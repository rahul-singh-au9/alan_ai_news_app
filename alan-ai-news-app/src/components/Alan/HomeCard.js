import React,{useState} from "react";
import { Grid, Grow, Typography } from "@material-ui/core";
import Zoom from "react-reveal/Zoom";
import ReactCardFlip from 'react-card-flip';
import useStyles from "./HomeNewsCardsStyles";

const infoCards = [
  {
    color: "#00838f",
    title: "Latest News",
    text: "Give me the latest news",
    id: "Left",
  },
  {
    color: "#1565c0",
    title: "News by Categories",
    info:
      "Business, Entertainment, General, Health, Science, Sports, Technology",
    text: "Give me the latest Technology news",
    id: "Right",
  },
  {
    color: "#4527a0",
    title: "News by Terms",
    info: "Bitcoin, PlayStation 5, Smartphones, Donald Trump...",
    text: "What's up with PlayStation 5",
    id: "Top",
  },
  {
    color: "#283593",
    title: "News by Sources",
    info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
    text: "Give me the news from CNN",
    id: "Bottom",
  },
];

const HomeCard = () => {
  const classes = useStyles();
  const [isFlipped,setIsFlipped] = useState(false)

  const handleOver = (e) =>{
    e.preventDefault();
    setIsFlipped(!isFlipped )
  }

  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignitem="stretch"
        spacing={3}
      >
        {infoCards.map((infoCard) => (
          <>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className={classes.infoCard} key={infoCard.id}
            >
              <Zoom>
                <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">

                    <div onMouseOver={handleOver}
                      className={classes.card}
                      style={{ backgroundColor: infoCard.color, boxShadow: "10px 30px 10px #9E9E9E"}}
                    >
                        <Typography variant="h5" style={{color: 'white'}}> {infoCard.title} </Typography>
                        {infoCard.info ? (
                          <Typography variant="h6" style={{color: 'white'}}>
                            <strong>{infoCard.title.split(" ")[2]}:</strong>
                            <br />
                            {infoCard.info}
                          </Typography>
                        ) : null}
                    </div>

                    <div onMouseOver={handleOver}
                      className={classes.card}
                      style={{ backgroundColor: infoCard.color, boxShadow: "10px 30px 10px #9E9E9E"}}
                    >
                        <Typography variant="h5" style={{color: 'white'}}>
                          Try Saying : <br /> <i>{infoCard.text}</i>
                        </Typography>
                    </div>

                </ReactCardFlip>
              </Zoom>
            </Grid>
          </>
        ))}
      </Grid>
    </Grow>
  );
};

export default HomeCard;
