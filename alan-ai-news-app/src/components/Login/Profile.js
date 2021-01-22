import React from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


class Profile extends React.Component {

    componentDidUpdate() {
        if(!this.props.isLoggedIn) {
            this.props.history.push('/');
        }
    }

    componentDidMount() {
        if(!this.props.isLoggedIn) {
            this.props.history.push('/');
        }
    }

    render(){
        return (
            <Card style={{maxWidth: 345, marginLeft: '500px', marginTop: '80px'}}>
                <CardActionArea>
                    <CardMedia
                    style={{height: 140}}
                    image={this.props.profile.imageUrl}
                    title={this.props.profile.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            User Profile
                        </Typography>
                        <Typography variant="h6" color="textSecondary" component="h3">
                            Name:{this.props.profile.name}  <br/>
                            Email:{this.props.profile.email}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.isAuthenticated,
        profile: state.profile
    }
}

export default connect(mapStateToProps)(Profile);

