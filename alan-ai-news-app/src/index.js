import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './store/store'
import Routing from "./Routing"
import './index.scss'
// , {useState, useEffect}
// import * as themes from './components/Theme/schema.json'
// import {setToLS} from './components/utils/storage'
// import styled, {ThemeProvider} from 'styled-components';
// import WebFont from 'webfontloader';
// import {GlobalStyles} from './components/Theme/GlobalStyles';
// import {useTheme} from './components/Theme/useTheme';


// // 2: Create a cotainer
// const Container = styled.div`
//     margin: 5px auto 5px auto;
// `;

// const Index = () => {

//     const {theme, themeLoaded, getFonts} = useTheme();

//     const [selectedTheme, setSelectedTheme] = useState(theme);

//     const [newTheme, setNewTheme] = useState();

//     useEffect(() => {
//         setSelectedTheme(theme);
//     },[themeLoaded]);


//     // 4: Load all the fonts
//     useEffect(() =>{
//         WebFont.load({
//             google: {
//                 families: getFonts()
//             }
//         });
//     });


//     const createTheme = newTheme => {
//         // console.log(newTheme);
//         setNewTheme(newTheme);
//     };

//     setToLS('all-themes', themes.default);
//     return(
//         <>
//         {
//             themeLoaded && <ThemeProvider theme={selectedTheme}>
//                 <GlobalStyles/>
//                 <Container style={{fontFamily: selectedTheme.font}}>
//                     <Routing/>
//                 </Container>
//             </ThemeProvider>
//         }
//         </>
//     )
// }

ReactDOM.render(
    <React.Fragment>
        <Provider store={store}>
            <Routing/>
        </Provider>
    </React.Fragment>,
        document.getElementById('root')
)