import "@emotion/react";

declare module "@emotion/react" {
  export class Theme {
    colors: {
      primary: string;
      secondary: string;
    };
  }
}
