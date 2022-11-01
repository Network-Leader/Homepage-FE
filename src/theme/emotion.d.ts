import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    font: {
      size: {
        h1: number;
        h2: number;
        h3: number;
        h4: number;
        xxlarge: number;
        xlarge: number;
        large: number;
        medium: number;
        small: number;
      };
      weight: {
        thin: number;
        light: number;
        regular: number;
        medium: number;
        bold: number;
      };
      color: {
        black: string;
        blackopacity: string;
        grey: string;
        white: string;
        warning: string;
        highlight: string;
        block: string;
        foot: string;
        blue: string;
      };
    };
    background: {
      white: string;
      black: string;
      block: string;
      activity: string;
      yellow: string;
      orange: string;
      purple: string;
      lightpurple: string;
      purpleopacity: string;
      blue: string;
      blueopacity: string;
    };
    borderRadius: {
      min: string;
      default: string;
      max: string;
    };
  }
}
