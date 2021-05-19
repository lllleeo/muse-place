#!/usr/bin/env bash

EXTENSIONS="jpg png jpeg pam pgm ppm"
STAGED_FOLDER="public/staging"
RESULT_FILE="TextureUrls.txt"


handle_error () { echo -e "\n🛑 ERRORED"; exit; }

nextPowerOf2() {
  node getNextPower $1 $2
}
#nextPowerOf2 23 $WIDTH
echo "STARTING..."
mkdir "${STAGED_FOLDER}/ktx"

let end=0
getImageCount () {
  mkdir "${STAGED_FOLDER}/ktx/sizes"
  for FILE in "$1"/*
    do
      if [ -d $FILE ]
      then
        getImageCount $FILE
      else
        NAME=`file $FILE | cut -d ',' -f 1 | cut -d '.' -f 1 | cut -d '/' -f 5`
        touch "./${STAGED_FOLDER}/ktx/sizes/${NAME}.txt"
        let end=$end+1
      fi
  done
}
getImageCount "${STAGED_FOLDER}/images"

let start=0
imageToKTX () {
  for FILE in "$1"/*
    do
      if [ -d $FILE ]
      then
        imageToKTX $FILE
      else
        EXT=`file $FILE | cut -d ',' -f 1 | cut -d '.' -f 2 | cut -d ':' -f 1`



        DATA=`file $FILE`
        NAME=`file $FILE | cut -d ',' -f 1 | cut -d '.' -f 1 | cut -d '/' -f 5`
        WIDTH=`file $FILE | cut -d ',' -f 8 | cut -d 'x' -f 1`
        HEIGHT=`file $FILE | cut -d ',' -f 8 | cut -d 'x' -f 2`

        echo $WIDTH >> "${STAGED_FOLDER}/ktx/sizes/${NAME}.txt"
        echo $HEIGHT >> "${STAGED_FOLDER}/ktx/sizes/${NAME}.txt"

        KTXWIDTH=`node ./scripts/nearestPower.js $WIDTH`
        KTXHEIGHT=`node ./scripts/nearestPower.js $HEIGHT`

        TOKTX=`toktx --2d --genmipmap --bcmp --resize "${KTXWIDTH}x${KTXHEIGHT}" --t2 --verbose "public/staging/ktx/${NAME}" $FILE`

        let start=$start+1
        echo "${start}/${end} Images Compressed."
      fi
  done
  echo " "
  let start=0
  touch $RESULT_FILE
  for FILE in "$STAGED_FOLDER/ktx"/*
    do
      if [ -f $FILE ]
      then
        NAME=`file $FILE | cut -d ',' -f 1 | cut -d '.' -f 1 | cut -d '/' -f 4`
        DATE_S=`date +%s`
        CLOUD_FOLDER="${NAME}-${DATE_S}"
        CLOUD_URL="https://d27rt3a60hh1lx.cloudfront.net/textures/${CLOUD_FOLDER}/${NAME}.ktx2"

        aws s3 cp "${FILE}" "s3://spaces-gallery-assets/textures/${CLOUD_FOLDER}/${NAME}.ktx2" || handle_error
        aws s3 cp "${STAGED_FOLDER}/ktx/sizes/${NAME}.txt" "s3://spaces-gallery-assets/textures/${CLOUD_FOLDER}/${NAME}.txt" || handle_error

        echo $NAME >> $RESULT_FILE
        echo $CLOUD_URL >> $RESULT_FILE
        echo " " >> $RESULT_FILE

        echo "Image successfully uploaded! Compressed Texture can be found at -> ${CLOUD_URL}"
        let start=$start+1
        echo "${start}/${end} Textures Uploaded. 🤛👁👄👁🤜"
        echo " "
      fi
  done
  rm -rf "${STAGED_FOLDER}/ktx"
}
imageToKTX "${STAGED_FOLDER}/images"

echo "Done"
