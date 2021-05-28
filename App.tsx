import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { useFonts, Jost_600SemiBold, Jost_400Regular } from '@expo-google-fonts/jost';
import AppLoading from 'expo-app-loading';


import theme from './styles/theme';
import Routes from './src/routes';


export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <StatusBar style="dark"/>
    </ThemeProvider>
  ); 
}

