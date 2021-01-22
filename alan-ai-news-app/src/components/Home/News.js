import React from 'react'
import NewsSection from './NewsSection';

const News = () => {

    return (
            <React.Fragment>
                <br/>
                <hr/>
                <NewsSection category='top-headlines' query='country=in' topHeading='Top News' linkText='See More Headlines' results='15' /> <hr/>

                <NewsSection category='everything' query='q=trending india' topHeading='Trending in India' linkText='More Indian Trends' results='12' /> <hr/>

                <NewsSection category='everything' query='q=trending tech' topHeading='Tech Trends' linkText='More about Tech' results='12' /> <hr/>
            </React.Fragment>
    )
}

export default News;