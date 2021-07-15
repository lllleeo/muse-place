import { useMemo, useState } from "react";

type Song = {
  musicUrl: string;
  name: string;
  color: string;
  next: () => void;
  prev: () => void;
};

const CONTENT_FOLDER =
  "https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/marwan";
const SONGS = [
  `${CONTENT_FOLDER}/music/DJ YUNG VAMP - PWETTY BWOY SWAG.mp3`,
  `${CONTENT_FOLDER}/music/DJ YUNG VAMP - IM OFF THE MOLLY IM OFF THE BEANS wJEW3LZ.mp3`,
  `${CONTENT_FOLDER}/music/DJ YUNG VAMP - I PUT THE PLUG ON THREE WAY.mp3`,
];

const COLORS = ["red", "green", "blue"];

export const useSong = (): Song => {
  const [songIndex, setSongIndex] = useState(0);

  const musicUrl = useMemo(() => SONGS[songIndex], [songIndex]);

  const next = () =>
    setSongIndex(songIndex === SONGS.length - 1 ? 0 : songIndex + 1);
  const prev = () =>
    setSongIndex(songIndex === 0 ? SONGS.length - 1 : songIndex - 1);

  return {
    musicUrl,
    name: musicUrl.split("/").slice(-1)[0].replaceAll(".mp3", ""),
    color: COLORS[songIndex],
    next,
    prev,
  };
};
