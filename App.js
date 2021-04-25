import React from 'react';
import { SafeAreaView, useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components';
import Themes from './src/components/themes';
import Body from './src/components/Body'


export default function App() {
  const deviceTheme = useColorScheme();
  const theme = Themes[deviceTheme] || theme.dark;

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Body theme={theme}/>
      </SafeAreaView>
    </ThemeProvider>
  );
}
