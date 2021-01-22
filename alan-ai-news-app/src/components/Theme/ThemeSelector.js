import React, { useState, useEffect } from "react";
import _ from 'lodash';
import {useTheme} from './useTheme';
import { getFromLS } from '../utils/storage';
import './style.scss'


export default (props) => {
    const themesFromStore = getFromLS('all-themes');
    const [data, setData] = useState(themesFromStore.data);
    const [themes, setThemes] = useState([]);
    const {setMode} = useTheme();

    const themeSwitcher = selectedTheme => {
        console.log(selectedTheme);
        setMode(selectedTheme);
        props.setter(selectedTheme);
    };

    useEffect(() => {
        setThemes(_.keys(data));
    }, [data]);

    useEffect(() => {
        props.newTheme &&
            updateThemeCard(props.newTheme);
    }, [props.newTheme])

    const updateThemeCard = theme => {
        const key = _.keys(theme)[0];
        const updated = {...data, [key]:theme[key]};
        setData(updated);
    }

    const ThemeCard = props => {
        return(
            <>
                <div id="theme-options-wrapper" style={{display: 'flex'}}>
                        <div onClick={ (theme) => themeSwitcher(props.theme) }
                        className="theme-dot"
                        style={{backgroundColor: `${data[_.camelCase(props.theme.name)].colors.button.background}` ,display: 'inline-block'}}>
                        </div>
                </div>
            </>

        )
    }

    return (
        <div>
            <span style={{marginLeft: '900px'}}>*Theme settings will be saved for
            your next visit</span>

            <span style={{display: 'flex', marginLeft: '1000px', width:'200px'}}>
                {
                    themes.length > 0 &&
                        themes.map(theme =>(
                            <ThemeCard theme={data[theme]} key={data[theme].id} />
                        ))
                }
            </span>
        </div>
    )
}