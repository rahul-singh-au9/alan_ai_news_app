import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { AUTH_ACTION, PROFILE_ACTION } from '../../actions';
import Button from '@material-ui/core/Button';

const clientId = '716102099277-02pdp95dhbk8i9aujb6a6qgssdcvcp5a.apps.googleusercontent.com'

class Login extends React.Component {

    componentDidMount() {
        const user = JSON.parse(localStorage.getItem('user'));
        if(user) {
            this.props.dispatch({
                type: AUTH_ACTION.LOGIN,
                payload: user.token
            });
            this.props.dispatch({
                type: PROFILE_ACTION.SET,
                payload: user.userData
            });
        }
    }

    googleCallback = (response) => {
        if(!response || !response.accessToken) {
            return;
        }
        const user = {
            token: response.accessToken,
            userData: response.profileObj
        }
        localStorage.setItem('user',JSON.stringify(user));
        this.props.dispatch({
            type: AUTH_ACTION.LOGIN,
            payload: user.token
        });
        this.props.dispatch({
            type: PROFILE_ACTION.SET,
            payload: user.userData
        });
    }

    logout = () => {
        localStorage.removeItem('user');
        this.props.dispatch({ type: AUTH_ACTION.LOGOUT });
        this.props.dispatch({ type: PROFILE_ACTION.RESET });
    }

    render(){
        // console.log(this.props);
        return (
            <>
                <div>
                    <div>
                        {
                            this.props.auth.isAuthenticated &&
                            <>
                                <Button variant="outlined" color="primary">
                                    <Link to={'/profile'}>{this.props.profileName}</Link>
                                </Button>
                                <GoogleLogout
                                    clientId={clientId}
                                    buttonText="Logout"
                                    onLogoutSuccess={this.logout}
                                />
                            </>
                        }
                        {
                            !this.props.auth.isAuthenticated &&
                            <GoogleLogin 
                                clientId={clientId}
                                onSuccess={this.googleCallback}
                                onFailure={this.googleCallback}
                                buttonText="Login"
                                isSignedIn={true}
                            />
                        }
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        profileName: state.profile.name
    }
}

export default connect(mapStateToProps)(Login);