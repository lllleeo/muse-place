const CONTENT_FOLDER =
  "https://d27rt3a60hh1lx.cloudfront.net/content/c2a/brands";

export type Giveaway = {
  name: string;
  productImage: string;
  logoImage: string;
  comingText: string;
  availableText: string;
};

export const giveaways: Giveaway[] = [
  {
    name: "HSTRY",
    productImage: `${CONTENT_FOLDER}/HSTRY-beanie.png`,
    logoImage: `${CONTENT_FOLDER}/HSTRY-logo.png`,
    comingText:
      "Available today at 12:30PM EST the first 100 users to sign-up will receive an exclusive HSTRY Motherland Beanie.",
    availableText:
      "HSTRY Motherland Beanie available now, enter to win by providing the below details:",
  },
];
