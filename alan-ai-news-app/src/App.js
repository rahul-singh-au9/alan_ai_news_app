// 1: Import
import React, {useState, useEffect} from 'react';
import styled, {ThemeProvider} from 'styled-components';
import WebFont from 'webfontloader';
import {GlobalStyles} from './components/Theme/GlobalStyles';
import {useTheme} from './components/Theme/useTheme';
import MainAlan from './components/Alan/MainAlan'
import ThemeSelector from './components/Theme/ThemeSelector';

// 2: Create a cotainer
const Container = styled.div`
    margin: 5px auto 5px auto;
`;

const App = () => {
  // 3: Get the selected theme, font list, etc.
  const {theme, themeLoaded, getFonts} = useTheme();

  const [selectedTheme, setSelectedTheme] = useState(theme);

  const [newTheme, setNewTheme] = useState();

  useEffect(() => {
      setSelectedTheme(theme);
  },[themeLoaded]);


  // 4: Load all the fonts
  useEffect(() =>{
      WebFont.load({
          google: {
              families: getFonts()
          }
      });
  });

  const createTheme = newTheme => {
      // console.log(newTheme);
      setNewTheme(newTheme);
  };

  // 5: Render if the theme is loaded.

  return (
    <>
      {
        themeLoaded && <ThemeProvider theme={selectedTheme}>
            <GlobalStyles/>
            <Container style={{fontFamily: selectedTheme.font}}>
                <ThemeSelector setter={ setSelectedTheme } newTheme={ newTheme }/>
                <MainAlan/>
            </Container>
        </ThemeProvider>
      }
    </>
  )
}

export default App;
