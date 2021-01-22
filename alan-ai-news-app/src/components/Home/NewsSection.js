import React, { useState, useEffect } from 'react'
import { fetchNews } from '../api';
import {Grid, Grow} from "@material-ui/core"
import useStyles from "../Alan/HomeNewsCardsStyles"
import NewsCards from "./NewsCards"

const NewsSection = (request) => {
        const classes = useStyles();
        const [newsSection, setNewsSection] = useState([]);
            useEffect(() => {
                    const fetchAPI = async () => {
                            setNewsSection(await fetchNews(request));
                    };
                    fetchAPI();
        }, [request]);

    return (
        <>
            <h1 style={{ fontSize: '30px' }}>{request.topHeading}</h1>

            <Grow in>
                <Grid className={classes.container} container alignitem="stretch" spacing={3}>
                {
                    newsSection.length > 1 ?
                    newsSection.map((article, i)=>(
                        <Grid item xs={12} sm={6} md={4} lg={3} style={{ display:"flex"}} key={article.id}>
                            <NewsCards article={article} i={i} key={article.id}/>
                        </Grid>
                    ))
                : "Loading.."
                }
                </Grid>
            </Grow>
        </>
    )
}

export default NewsSection;