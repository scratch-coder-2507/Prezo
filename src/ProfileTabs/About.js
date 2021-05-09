import React from 'react';
import "./About.css";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

function About() {
    return (
        <div className="about">
            <div className="about__me">
                <div className="profile__topLeft">
                    <img src="https://th.bing.com/th/id/OIP.o2GFbWR0ThJD8kRzOpdnPwHaEH?w=326&h=181&c=7&o=5&pid=1.7"
                    alt="profile"/> 
                    <div className="about__us">
                      <h1>Cristiano Ronaldo</h1>
                      <h3>250M followers</h3>
                      <h2>Learn football with me!!!</h2>
                    </div>
                      <YouTubeIcon className="youtube" fontSize="large"/>
                      <InstagramIcon className="instagram" fontSize="large"/>
                      <FacebookIcon className="facebook" fontSize="large"/> 
                      <TwitterIcon className="twitter" fontSize="large"/>
                </div> 
                

            </div>
            
        </div>
    )
}

export default About;
