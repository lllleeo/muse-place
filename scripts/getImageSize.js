function getImageSize(metadata, w) {
  const regX = /([0-9]+x[0-9]+)/g;
  const matches = regX.exec(metadata);

  if (matches === null) {
    // eslint-disable-next-line no-undef
    console.log("mismatch");
    return;
  }

  const middle = matches[0].indexOf("x");
  const width = matches[0].substr(0, matches[0].length - middle - 1);
  const height = matches[0].substr(middle + 1, matches[0].length - middle - 1);

  if (w === "width") {
    // eslint-disable-next-line no-undef
    console.log(width);
  } else if (w === "height") {
    // eslint-disable-next-line no-undef
    console.log(height);
  } else {
    // eslint-disable-next-line no-undef
    console.log("Invalid Dimension");
  }
}

// eslint-disable-next-line no-undef
getImageSize(
  process.argv.slice(2, process.argv.length - 3).join(""),
  process.argv[process.argv.length - 1]
);
