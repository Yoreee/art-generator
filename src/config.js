"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, "constants/blend_mode.js"));
const { NETWORK } = require(path.join(basePath, "constants/network.js"));

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "TTAV Edition";
const description = "Time Travelling Anime Villains are your keys to the Villain-verse!";
const baseUri = "ipfs://QmaDspzYdpnKx1aiowohyn6WsXQm36BipKJSajYgKJtH8S";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  

  // ALL HAIR MASC
  {
    growEditionSizeTo: 44,
    layersOrder: [
      { name: "BG"},
      { name: "BG Text" },
      { name: "Equipment"},
      { name: "Base Body (M)" },
      { name: "Eyes (M)" },
      { name: "Clothes (M)"},
      { name: "Lower Jaw (M) (Config 2)" },
      { name: "Hair Reduced (M) (Config 2)" },
      { name: "Face" },
      { name: "Horns" },
    ],
  },
  {
    growEditionSizeTo: 54,
    layersOrder: [
      { name: "BG"},
      { name: "BG Text" },
      { name: "Equipment"},
      { name: "Base Body (F)" },
      { name: "Eyes (F)" },
      { name: "Clothes (M)"},
      { name: "Lower Jaw (F) (Config 2)" },
      { name: "Hair Reduced (F) (Config 2)" },
      { name: "Face" },
      { name: "Horns" },
    ],
  },
  {
    growEditionSizeTo: 55,
    layersOrder: [
      { name: "One-of-One"}
    ],
  },
  {
    growEditionSizeTo: 119,
    layersOrder: [
      { name: "BG"},
      { name: "BG Text" },
      { name: "Equipment"},
      { name: "Base Body (M)" },
      { name: "Eyes (M)" },
      { name: "Clothes (M)"},
      { name: "Lower Jaw (M) (Config 2)" },
      { name: "Hair Reduced (M) (Config 2)" },
      { name: "Face" },
      { name: "Horns" },
    ],
  },
  {
    growEditionSizeTo: 129,
    layersOrder: [
      { name: "BG"},
      { name: "BG Text" },
      { name: "Equipment"},
      { name: "Base Body (F)" },
      { name: "Eyes (F)" },
      { name: "Clothes (M)"},
      { name: "Lower Jaw (F) (Config 2)" },
      { name: "Hair Reduced (F) (Config 2)" },
      { name: "Face" },
      { name: "Horns" },
    ],
  },
  {
    growEditionSizeTo: 130,
    layersOrder: [
      { name: "One-of-One"}
    ],
  },
  {
    growEditionSizeTo: 224,
    layersOrder: [
      { name: "BG"},
      { name: "BG Text" },
      { name: "Equipment"},
      { name: "Base Body (M)" },
      { name: "Eyes (M)" },
      { name: "Clothes (M)"},
      { name: "Lower Jaw Reduced (M) (Config 1)" },
      { name: "Hair (M) (Config 1)" },
      { name: "Face" },
    ],
  },
  {
    growEditionSizeTo: 234,
    layersOrder: [
      { name: "BG"},
      { name: "BG Text" },
      { name: "Equipment"},
      { name: "Base Body (F)" },
      { name: "Eyes (F)" },
      { name: "Clothes (F)"},
      { name: "Lower Jaw Reduced (F) (Config 1)" },
      { name: "Hair (F) (Config 1)" },
      { name: "Face" },
    ],
  },
  {
    growEditionSizeTo: 235,
    layersOrder: [
      { name: "One-of-One"}
    ],
  },
  {
    growEditionSizeTo: 327,
    layersOrder: [
      { name: "BG"},
      { name: "BG Text" },
      { name: "Equipment"},
      { name: "Base Body (M)" },
      { name: "Eyes (M)" },
      { name: "Clothes (M)"},
      { name: "Lower Jaw (M) (Config 2)" },
      { name: "Hair Reduced (M) (Config 2)" },
      { name: "Face" },
      { name: "Horns" },
    ],
  },
  {
    growEditionSizeTo: 337,
    layersOrder: [
      { name: "BG"},
      { name: "BG Text" },
      { name: "Equipment"},
      { name: "Base Body (F)" },
      { name: "Eyes (F)" },
      { name: "Clothes (F)"},
      { name: "Lower Jaw Reduced (F) (Config 1)" },
      { name: "Hair (F) (Config 1)" },
      { name: "Face" },
    ],
  },
  {
    growEditionSizeTo: 338,
    layersOrder: [
      { name: "One-of-One"}
    ],
  },
  {
    growEditionSizeTo: 413,
    layersOrder: [
      { name: "BG"},
      { name: "BG Text" },
      { name: "Equipment"},
      { name: "Base Body (M)" },
      { name: "Eyes (M)" },
      { name: "Clothes (M)"},
      { name: "Lower Jaw Reduced (M) (Config 1)" },
      { name: "Hair (M) (Config 1)" },
      { name: "Face" },
    ],
  },
  {
    growEditionSizeTo: 423,
    layersOrder: [
      { name: "BG"},
      { name: "BG Text" },
      { name: "Equipment"},
      { name: "Base Body (F)" },
      { name: "Eyes (F)" },
      { name: "Clothes (F)"},
      { name: "Lower Jaw Reduced (F) (Config 1)" },
      { name: "Hair (F) (Config 1)" },
      { name: "Face" },
    ],
  },
  {
    growEditionSizeTo: 424,
    layersOrder: [
      { name: "One-of-One"}
    ],
  },
  {
    growEditionSizeTo: 567,
    layersOrder: [
      { name: "BG"},
      { name: "BG Text" },
      { name: "Equipment"},
      { name: "Base Body (M)" },
      { name: "Eyes (M)" },
      { name: "Clothes (M)"},
      { name: "Lower Jaw (M) (Config 2)" },
      { name: "Hair Reduced (M) (Config 2)" },
      { name: "Face" },
      { name: "Horns" },
    ],
  },
  {
    growEditionSizeTo: 577,
    layersOrder: [
      { name: "BG"},
      { name: "BG Text" },
      { name: "Equipment"},
      { name: "Base Body (F)" },
      { name: "Eyes (F)" },
      { name: "Clothes (M)"},
      { name: "Lower Jaw (F) (Config 2)" },
      { name: "Hair Reduced (F) (Config 2)" },
      { name: "Face" },
      { name: "Horns" },
    ],
  },
  {
    growEditionSizeTo: 578,
    layersOrder: [
      { name: "One-of-One"}
    ],
  },
  {
    growEditionSizeTo: 661,
    layersOrder: [
      { name: "BG"},
      { name: "BG Text" },
      { name: "Equipment"},
      { name: "Base Body (M)" },
      { name: "Eyes (M)" },
      { name: "Clothes (M)"},
      { name: "Lower Jaw (M) (Config 2)" },
      { name: "Hair Reduced (M) (Config 2)" },
      { name: "Face" },
      { name: "Horns" },
    ],
  },
  {
    growEditionSizeTo: 671,
    layersOrder: [
      { name: "BG"},
      { name: "BG Text" },
      { name: "Equipment"},
      { name: "Base Body (F)" },
      { name: "Eyes (F)" },
      { name: "Clothes (F)"},
      { name: "Lower Jaw Reduced (F) (Config 1)" },
      { name: "Hair (F) (Config 1)" },
      { name: "Face" },
    ],
  },
  {
    growEditionSizeTo: 672,
    layersOrder: [
      { name: "One-of-One"}
    ],
  },
  {
    growEditionSizeTo: 693,
    layersOrder: [
      { name: "BG"},
      { name: "BG Text" },
      { name: "Equipment"},
      { name: "Base Body (M)" },
      { name: "Eyes (M)" },
      { name: "Clothes (M)"},
      { name: "Lower Jaw Reduced (M) (Config 1)" },
      { name: "Hair (M) (Config 1)" },
      { name: "Face" },
    ],
  },
  {
    growEditionSizeTo: 703,
    layersOrder: [
      { name: "BG"},
      { name: "BG Text" },
      { name: "Equipment"},
      { name: "Base Body (F)" },
      { name: "Eyes (F)" },
      { name: "Clothes (F)"},
      { name: "Lower Jaw Reduced (F) (Config 1)" },
      { name: "Hair (F) (Config 1)" },
      { name: "Face" },
    ],
  },

  // One of One
  {
    growEditionSizeTo: 704,
    layersOrder: [
      { name: "One-of-One"}
    ],
  },
  // ALL LOWER JAW MASC
  {
    growEditionSizeTo: 829,
    layersOrder: [
      { name: "BG"},
      { name: "BG Text" },
      { name: "Equipment"},
      { name: "Base Body (M)" },
      { name: "Eyes (M)" },
      { name: "Clothes (M)"},
      { name: "Lower Jaw (M) (Config 2)" },
      { name: "Hair Reduced (M) (Config 2)" },
      { name: "Face" },
      { name: "Horns" },
    ],
  },
  {
    growEditionSizeTo: 839,
    layersOrder: [
      { name: "BG"},
      { name: "BG Text" },
      { name: "Equipment"},
      { name: "Base Body (F)" },
      { name: "Eyes (F)" },
      { name: "Clothes (F)"},
      { name: "Lower Jaw Reduced (F) (Config 1)" },
      { name: "Hair (F) (Config 1)" },
      { name: "Face" },
    ],
  },
  {
    growEditionSizeTo: 888,
    layersOrder: [
      { name: "BG"},
      { name: "BG Text" },
      { name: "Equipment"},
      { name: "Base Body (M)" },
      { name: "Eyes (M)" },
      { name: "Clothes (M)"},
      { name: "Lower Jaw Reduced (M) (Config 1)" },
      { name: "Hair (M) (Config 1)" },
      { name: "Face" },
    ],

  },


];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 1000,
  height: 1000,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 20 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
