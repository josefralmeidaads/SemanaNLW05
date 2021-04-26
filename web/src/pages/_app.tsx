
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../styles/global';
import theme from '../../styles/theme';
import Header from '../components/Header';
import Player from '../components/Player';

import { AppWrapper, AppMain } from '../../styles/stylesApp';
import { PlayerProvider } from '../contexts/PlayerContext';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <PlayerProvider>
        <AppWrapper>
          <AppMain>
            <Header />
            <Component {...pageProps} />
            <GlobalStyle />
          </AppMain>
          <Player />
        </AppWrapper>
      </PlayerProvider>
    </ThemeProvider>
  )
}

export default MyApp
