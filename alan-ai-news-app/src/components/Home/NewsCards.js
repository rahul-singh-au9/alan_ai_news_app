import React from 'react';
import useStyles from './NewsCardStyles';
import {Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography, Collapse, Avatar, CardHeader,IconButton } from "@material-ui/core"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';

const newsimage = "https://media4.s-nbcnews.com/j/newscms/2019_01/2705191/nbc-social-default_b6fa4fef0d31ca7e8bc7ff6d117ca9f4.nbcnews-fp-1200-630.png"

const avatar = "https://alan.app/voice/images/branding_page/icon/color/alan-logo-icon-color.png"

const NewsCards = ({ article: { description, publishedAt, source, title, url, urlToImage }, i }) =>{
        const classes = useStyles();
        const [expanded, setExpanded] = React.useState(false);

        const handleExpandClick = () => {
            setExpanded(!expanded);
    };

    return (
            <Card>
                <CardHeader
                    avatar={
                    <Avatar aria-label="recipe">
                        <img src={avatar} alt="alan" height="45px"/>
                    </Avatar>
                    }
                    title={source.name}
                    subheader={(new Date(publishedAt)).toDateString()}
                />
                <CardMedia
                    className={classes.media}
                    image={urlToImage || newsimage }
                />
                <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {title}
                        </Typography>
                </CardContent>

                <CardActions disableSpacing>
                <CardActionArea href={url} target="_blank">
                        <Button size="small" color="primary">Read more</Button>
                        <Typography variant="h5" color="textSecondary" component="h2">{i+1}</Typography>
                </CardActionArea>

                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more">
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>

                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                    <Typography paragraph>
                        {description}
                    </Typography>
                    </CardContent>
                </Collapse>

            </Card>
    );
}

export default NewsCards