import {makeStyles} from "@material-ui/core/styles"


export default makeStyles((theme) => ({
        media: {
                height: 10,
                paddingTop: '56.25%', // 16:9
        },
        activeCard: {
        borderBottom: '10px solid #22289a',
        },
        expand: {
                transform: 'rotate(0deg)',
                marginLeft: 'auto',
                transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
                }),
        },
        expandOpen: {
                transform: 'rotate(180deg)',
        },
        card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderBottom: '10px solid white',
        },
        }));
