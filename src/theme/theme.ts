import { Theme } from "@emotion/react";

const theme: Theme = {
  font: {
    size: {
      h1: 64,
      h2: 36,
      h3: 32,
      h4: 24,
      xxlarge: 20,
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
      black: "#000000",
      white: "#FFFFFF",
      warning: "#FF3939",
      highlight: "#4A38F4",
      block: "#868686",
      foot: "#BEBEBE",
    },
  },
  background: {
    white: "#FFFFFF",
    black: "#000000",
    block: "#D4D4D4",
    activity: "#F0F0F8",
    yellow: "#FFDF6B",
    orange: "#FFA96B",
    purple: "#4A38F4",
    lightpurple: "#DAD4FD",
    purpleopacity: "rgba(153, 137, 247, 0.1)",
  },
  borderRadius: {
    min: "5px",
    default: "10px",
    max: "20px",
  },
};

export default theme;
