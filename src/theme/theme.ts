import { Theme } from "@emotion/react";

const theme: Theme = {
  background: {
    primary: "#FFFFFF",
    headerFooter: "#000000",
    block: "#868686",
    activity: "#F0F0F8",
    highlight: {
      yellow: "#FFDF6B",
      orange: "#FFA96B",
      purple: "#9989F7",
    },
  },
  font: {
    size: {
      h1: 72,
      h2: 36,
      h3: 32,
      h4: 24,
      xlarge: 18,
      large: 16,
      medium: 14,
      small: 12,
    },
    weight: {
      bold: 600,
      medium: 500,
      regular: 400,
      light: 300,
      thin: 100,
    },
    color: {
      primary: "#000000",
      secondary: "#FFFFFF",
      warning: "#FF3939",
      highlight: "#9989F7",
      block: "#868686",
    },
  },
};

export default theme;
