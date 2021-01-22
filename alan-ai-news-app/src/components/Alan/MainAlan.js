import React , {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import alanBtn from "@alan-ai/alan-sdk-web"
import wordsToNumbers from "words-to-numbers"
import useStyles from "./MainAlanStyles"
import NewsCards from "./NewsCards"
import Login from "../Login/Login"


const MainAlan = ()  => {
    const[newsArticles, setNewsArticles] = useState([])
    const[activeArticle, setActiveArticle] = useState(-1)

    const classes = useStyles();

    useEffect(() => {
        alanBtn({
            key: "ff5b4386f116bd7be69f77cff31107452e956eca572e1d8b807a3e2338fdd0dc/stage",
            onCommand: ({command, articles, number}) => {
                if(command === "newHeadlines"){
                    // console.log(articles)
                    setNewsArticles(articles)
                    setActiveArticle(-1)
                }

                else if(command === "highlight"){
                    setActiveArticle((prevActiveArticle) => (prevActiveArticle + 1))
                }

                else if (command === 'open') {
                    const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
                    const article = articles[parsedNumber - 1];

                    if (parsedNumber > articles.length) {
                        alanBtn().playText('Please try that again...');
                    }

                    else if (article) {
                        window.open(article.url, '_blank');
                        alanBtn().playText('Opening...');
                    }

                    else {
                        alanBtn().playText('Please try that again...');
                    }
                }
            }
        })
    },[])

        return (
            <div>

                <span style={{marginLeft: '78px', marginTop: '1px', display:'inline-block'}}><Login/></span>

                <div className={classes.logoContainer}>

                    <Link to="/">
                    <img src="https://i.ibb.co/Fxftx3N/alan-photo.jpg" className={classes.alanLogo} alt="alan"/></Link>


                </div>
                <NewsCards articles={newsArticles} activeArticle={activeArticle}/>
            </div>
    );
}

export default MainAlan;
