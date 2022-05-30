import "../styles/globals.css";
import Header from "../src/components/Header/index";
import store from "../src/store/index";
import { Provider } from "react-redux";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "/src/utils/createEmotionCache";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CacheProvider value={emotionCache}>
          <Provider store={store}>
            <CssBaseline />
            <Header />
            <Component {...pageProps} />
          </Provider>
        </CacheProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
