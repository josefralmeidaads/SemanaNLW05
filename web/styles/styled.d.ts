import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors:{
      white: string,
      gray_50: string,
      gray_100: string,
      gray_200: string,
      gray_500: string,
      gray_800: string,  
      green_500: string,    
      purple_300: string,
      purple_400: string, 
      purple_500: string,
      purple_800: string,
      main: string,
    },
  }
}