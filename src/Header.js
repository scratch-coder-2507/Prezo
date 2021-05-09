import React from 'react';
import "./Header.css";
import {Avatar} from "@material-ui/core"
import {useHistory} from "react-router-dom"

function Header() {
    const history = useHistory();
    return (
        <div className="header">
            <div className="header__left">
                <img 
                onClick={() => {
                    history.push("/");
                }}
                className="header__leftLogo"
                src="https://i.ibb.co/xSHzfZV/imageonline-co-transparentimage.png"
                alt="Twitch Logo"
                />
                <h2>Home</h2>
                <h2 
                onClick={() => {
                    history.push('/browse');
                }}>Trending</h2>
                <div className="header__verticalLine"></div>
                    <h2 onClick={() => {
                        history.push('/esports');
                    }} >Categories</h2>
                    <h2>Streamers</h2>
                    <i class="fas fa-ellipsis-h"></i>
            </div>
            <div className="header__center">
                <input type="text" placeholder="Search" />
                <div className="header__centerLogoContainer">
                    <i class="fas fa-search"></i>
                </div>
            </div>
            <div className="header__right">
                <div className="header__rightContainer">
                    <i className="fas fa-crown"></i>
                    <i className="fas fa-inbox"></i>
                    <i className="fas fa-comment-alt"></i>

                    <div className="header__rightBits">
                        <i className="fas fa-gem"></i>
                        <h4>Get Bits</h4>
                    </div>
                    
                    <Avatar/>
                </div>
            </div>
            
        </div>
    )
}

export default Header
