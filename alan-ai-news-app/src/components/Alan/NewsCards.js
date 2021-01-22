import React from 'react'
import {Grid, Grow} from "@material-ui/core"
import useStyles from "./HomeNewsCardsStyles"
import Home from "./HomeCard"
import NewsCard from "./NewsCard/NewsCard"

const NewsCards = ({articles, activeArticle}) => {
    const classes = useStyles();

    if(!articles.length){
        return(
            <Home/>
        )
    }

    return (
        <Grow in>
            <Grid className={classes.container} container alignitem="stretch" spacing={3}>
            {
                articles.map((article, i)=>(
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{ display:"flex"}} key={article.id}>
                        <NewsCard article={article} i={i} activeArticle={activeArticle} key={article.id}/>
                    </Grid>
                ))
            }
            </Grid>
        </Grow>
    )
}

export default NewsCards
