import React from "react";
import emailjs from 'emailjs-com';
import "./contact.scss"
import Container from '@material-ui/core/Container';

const Contact=()=>{

        const sendEmail = (e) => {
            e.preventDefault();

            emailjs.sendForm('service_hiexk5o', 'template_8pr7mhv', e.target,
                                'user_nfnzqRPjGcJhpsXZuYuFY')
            .then((result) => {
                // console.log(result.text);
                alert('successful, we will get back to you soon')
            }, (error) => {
                console.log(error.text);
            });

            e.target.reset()
        }

        return(
            <div style={{ backgroundColor: '#D4D4DA', height: '100vh' }}>
                <Container>
                    <div className="container1">
                        <div className="left"></div>
                            <div  className="contact__wrap">
                                <h1>Contact Us</h1>
                                <form className="contact__form"  onSubmit={sendEmail}>
                                    <input type="text" name="name" placeholder="NAME" title="Your name" maxlength="50" required/>
                                    <input type="email" name="email" placeholder="EMAIL" title="Your email" maxlength="50" required/>
                                    <textarea type="text" name="message" placeholder="MESSAGE" title="Your message" maxlength="550" required/>
                                    <input id="con_sub" type="submit" value="send message"/>
                                </form>
                            </div>
                    </div>
                </Container>
            </div>
        )
    }


export default Contact;
