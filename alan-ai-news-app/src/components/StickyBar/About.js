import React from "react";
import  "./about.scss"
import Cards from "./Cards"
import Container from '@material-ui/core/Container';

const About=()=>{
    return(
        <div style={{ backgroundColor: '#195BAA', height: '100vh'}}>
            <Container>
                <div className="about-description" style={{color: 'black'}}>
                    <h1>About Us</h1>
                    <p>"It's not wise to violate rules until you know how to observe them."</p>
                    <div className="about-devs">
                        <h2>Developers</h2>
                        <div >
                            <Cards/>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default About;