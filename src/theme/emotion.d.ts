import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    background: {
      primary: string;
      headerFooter: string;
      block: string;
      activity: string;
      highlight: {
        yellow: string;
        orange: string;
        purple: string;
      };
    };
    font: {
      size: {
        h1: number;
        h2: number;
        h3: number;
        h4: number;
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
        primary: string;
        secondary: string;
        warning: string;
        highlight: string;
        block: string;
      };
    };
  }
}
