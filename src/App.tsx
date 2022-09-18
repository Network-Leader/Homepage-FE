import { Global, ThemeProvider } from "@emotion/react";
import theme from "./theme/theme";
import Router from "./router";
import reset from "./styles/reset";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={reset} />
      <Router />
    </ThemeProvider>
  );
}

export default App;
