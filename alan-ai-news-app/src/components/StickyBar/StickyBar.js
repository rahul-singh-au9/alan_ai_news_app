import React from "react";
import "./stickyBar.scss"
import {Link} from "react-router-dom"
import Container from '@material-ui/core/Container';


const fb = "https://i.pinimg.com/originals/30/99/af/3099aff4115ee20f43e3cdad04f59c48.png"

const twitter = "https://image.flaticon.com/icons/png/512/124/124021.png"

const pinterest = "https://www.vectorico.com/download/social_media/Pinterest-Icon-Squircle.jpg"

const linkedin = "https://cdn5.vectorstock.com/i/1000x1000/99/09/linkedin-social-media-icon-design-template-vector-22339909.jpg"

const StickyBar=()=>{
    return(
        <Container>
            <div class="sticky-container">
                <ul class="sticky">

                    <li><Link to="/" style={{textDecoration:"none"}}>
                        <img width="25" height="25" title="" alt="" src={"https://alan.app/voice/images/branding_page/icon/color/alan-logo-icon-color.png"}/>
                        <p id="current">News AI</p>
                        </Link>
                    </li>

                    <li><Link to="/about" style={{textDecoration:"none"}}> <img width="25" height="25" title="" alt="" src={"https://fotofab2.herokuapp.com/static/media/group.23117c19.svg"}/>
                        <p id="current">About Us</p></Link>
                    </li>

                    <li>
                        <Link to="/contact" style={{textDecoration:"none"}}> <img width="25" height="25" title="" alt="" src={"https://fotofab2.herokuapp.com/static/media/contact.cfe59cd4.svg"}/>
                        <p id="current">Contact</p>
                        </Link>
                    </li>

                    <li>
                    <Link to = {{pathname: "https://www.facebook.com/Voice-Control-Alan-News-104390564959516"}} target="_blank" style={{textDecoration: 'none', color: 'white'}}>
                        <img width="25" height="25" title="" alt="fb" src={fb}/>
                        <p>Facebook</p>
                        </Link>
                    </li>

                    <li>
                        <Link to = {{pathname:"https://twitter.com/control_alan"}} target="_blank" style={{textDecoration: 'none', color: "white"}}>
                        <img width="25" height="25" title="" alt="tw" src={twitter}/>
                        <p>Twitter</p>
                        </Link>
                    </li>

                    <li>
                        <Link to={{pathname: "https://in.pinterest.com/pin/777574691911488437/"}} target="_blank" style={{textDecoration: 'none', color: "white"}}><img width="25" height="25" title="" alt="pin1" src={pinterest}/>
                        <p>Pinterest</p>
                        </Link>
                    </li>

                    <li>
                        <Link to= {{pathname: "https://www.linkedin.com/company/71351208/admin/"}} target="_blank" style={{textDecoration: 'none', color: 'white'}}><img width="25" height="25" title="" alt="li" src={linkedin}/>
                        <p>Linkedin</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </Container>
        )
    }

export default StickyBar;
