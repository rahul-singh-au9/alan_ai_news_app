import React from 'react';
import  './cards.css'
import Container from '@material-ui/core/Container';
import {Link} from 'react-router-dom'
const Cards=()=>{
        return(
            <Container>
            <div className='head'>
            <div className='center'>
                <div className='property-card'>
                    <div className='property-image1'>
                    </div>
                    <div className='property-description'>
                        <h5>Rahul Singh</h5>
                    </div>

                </div>
            </div>
            <Link to={{pathname: 'https://www.rahulsg.tech/'}} target='_blank'>Get More Info</Link>


            <div className='center'>
                <div className='property-card'>
                    <div className='property-image2'>
                    </div>
                    <div className='property-description'>
                        <h5>Prasad Mude</h5>   
                    </div>
                </div>
            </div>
            </div>
            </Container>
        )
    }

    
export default Cards;
