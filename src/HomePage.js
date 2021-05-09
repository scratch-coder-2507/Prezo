import React, { useRef, useState, useEffect} from 'react';
import "./HomePage.css";
import "slick-carousel/slick/slick.css";
import"slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function HomePage() {

    let settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay: true,
    };
    
    return (
        <div className='homepage'>
            <div className="streaming__header">
                <h1 className="now__streaming">NOW STREAMING</h1>
                <h1 className="see__all">See More</h1>
            </div>
            <div className="homepage__slider">
                <Slider className="slider" {...settings}>
                    <div className="div">
                        <a className="link">
                            <img src="https://static.easyvideo.in/default_thumb/f57aab1a-efef-4d60-820e-fe567694ec98.jpg" alt=""/>
                        </a>
                    </div>
                    <div className="div">
                        <a className="link">
                            <img src="https://static.easyvideo.in/default_thumb/3dd2c1e9-caac-4437-b36b-2030f7f0c9fc.jpg" alt=""/>
                        </a>
                    </div>
                    <div className="div">
                        <a className="link">
                            <img src="https://static.easyvideo.in/stream_thumb/da7fa639-524e-4cbe-bda8-4efddb4babd7.jpg" alt=""/>
                        </a>
                    </div>
                    <div className="div">
                        <a className="link">
                            <img src="https://static.easyvideo.in/default_thumb/94fc8beb-57a4-46ee-8728-b136a670ef82.jpg" alt=""/>
                        </a>
                    </div>
                </Slider>
            </div>
            <div className="streamers__header">
                <h1 className="streamers">TOP STREAMERS</h1>
                <h1 className="see__all">See More</h1>
            </div>
            <div className ="top__streamers">
                <div className="particular__streamer">
                    <img src="https://fsb.zobj.net/crop.php?r=Fq_MVhTIBmBu55izKVN9_BkQX8hdkLFjHHBADUd5rrYJZa5RUHEqyYVwbKJFP0Jl-jObIDm3h7MdcRqpkOC8J7T1CnlN9casFAJBFfYgnIIR12wuV4moc2f04XsaIcWgzRMA8_mqecCWfRMv" alt=""/>
                    <h1>sc0utop</h1>
                    <h2>281k Followers</h2>
                </div>
                <div className="particular__streamer">
                    <img src="data:image/jpeg;base64,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" alt=""/>
                    <h1>CarryMinati</h1>
                    <h2>500k Followers</h2>
                </div>
                <div className="particular__streamer">
                    <img src="https://static.getloconow.com/thumbnail/rescaled/users/VAPA3H4T749e9bb9483ff54d62bb39507d63204492.jpg" alt=""/>
                    <h1>Jonathan Gaming</h1>
                    <h2>50.5k Followers</h2>
                </div>
                <div className="particular__streamer">
                    <img src="https://static.getloconow.com/thumbnail/rescaled/users/5J11J0F0WZ10601b21949d474eaa64ac3e3774bbb2.jpg" alt=""/>
                    <h1>Thugwa</h1>
                    <h2>25.3k Followers</h2>
                </div>
                <div className="particular__streamer">
                    <img src="https://static.getloconow.com/thumbnail/rescaled/users/CKQN1YOHP304b36aee629d4136b63327624176a121.jpg" alt=""/>
                    <h1>8 Bit Mafia</h1>
                    <h2>45.2k Followers</h2>
                </div>
                <div className="particular__streamer">
                    <img src="https://static.getloconow.com/thumbnail/rescaled/users/QRKZQN76DXd52978d394d7410599056fc2ccd01932.jpg" alt=""/>
                    <h1>8 Bit Rebel</h1>
                    <h2>35.1k Followers</h2>
                </div>
                <div className="particular__streamer">
                    <img src="https://static.getloconow.com/thumbnail/rescaled/users/TORPC3Z3IG7d37994ce27142b2ba08cddc67c8f8eb.jpg" alt=""/>
                    <h1>Beg4Mercy_8bit</h1>
                    <h2>11.9k Followers</h2>
                </div>
            </div>
            <div className="streamers__header">
                <h1 className="streamers">TOP VIDEOS</h1>
                <h1 className="see__all">See More</h1>
            </div>
            <div className="topvideos">
                <div className="particular__videos">
                    <img className="video__img" src="https://static.easyvideo.in/default_thumb/39fa6f06-e40c-4c77-850e-092fb909a5d7.jpg" alt=""/>
                    <div className="video__name">
                        <img src="https://static.getloconow.com/thumbnail/rescaled/users/VAPA3H4T749e9bb9483ff54d62bb39507d63204492.jpg" alt=""/>
                        <h1>Jonathan Gaming</h1>
                        <h3>⭐PUBG</h3>
                    </div>
                    <h2>Naughty or what!</h2>
                </div>
                <div className="particular__videos">
                    <img className="video__img" src="https://static.easyvideo.in/default_thumb/3dd2c1e9-caac-4437-b36b-2030f7f0c9fc.jpg" alt=""/>
                    <div className="video__name">
                        <img src="https://static.getloconow.com/loco-avatars/4bdecdff35714f24b9085ec191866d5c.jpg" alt=""/>
                        <h1>Novaking</h1>
                        <h3>⭐PUBG</h3>
                    </div>
                    <h2>Top 100 or what!</h2>
                </div>
                <div className="particular__videos">
                    <img className="video__img" src="https://static.easyvideo.in/default_thumb/11cc1695-6fa3-466e-8058-d872e2951a98.jpg" alt=""/>
                    <div className="video__name">
                        <img src="https://static.getloconow.com/thumbnail/rescaled/users/8IS83M64UL83569ebe17b04c17a245afb0a32049bd.jpg" alt=""/>
                        <h1>SouLVipeR</h1>
                        <h3>⭐Valorant</h3>
                    </div>
                    <h2>Valorant Chill</h2>
                </div>
                <div className="particular__videos">
                    <img className="video__img" src="https://static.easyvideo.in/default_thumb/203610e2-5211-4d1f-9a94-243221f662b6.jpg" alt=""/>
                    <div className="video__name">
                        <img src="https://static.getloconow.com/thumbnail/rescaled/users/9R12JB1MZEb651a2a7810e40508e6e4f7b49c479d2.jpg" alt=""/>
                        <h1>soulregaltos</h1>
                        <h3>⭐Valorant</h3>
                    </div>
                    <h2>valorant rankh pushh</h2>
                </div>
            </div>
            <div className="streamers__header">
                <h1 className="streamers">TOP CATEGORIES</h1>
                <h1 className="see__all">See More</h1>
            </div>
            <div className ="top__streamers">
                <div className="particular__streamer">
                    <img src="https://static.getloconow.com/onboarding-categories-images/Valorant.png" alt=""/>
                    <h1>Valorant</h1>
                    <h2>281k Views</h2>
                </div>
                <div className="particular__streamer">
                    <img src="https://static.getloconow.com/onboarding-categories-images/Free+Fire.png" alt=""/>
                    <h1>Fire Fire</h1>
                    <h2>500k Followers</h2>
                </div>
                <div className="particular__streamer">
                    <img src="https://static.getloconow.com/onboarding-categories-images/PubG.png" alt=""/>
                    <h1>PUBG</h1>
                    <h2>5M Followers</h2>
                </div>
                <div className="particular__streamer">
                    <img src="https://static.getloconow.com/onboarding-categories-images/GTA5.png" alt=""/>
                    <h1>GTA 5</h1>
                    <h2>3M Followers</h2>
                </div>
                <div className="particular__streamer">
                    <img src="https://static.getloconow.com/onboarding-categories-images/cod-mobile.png" alt=""/>
                    <h1>Call of Duty</h1>
                    <h2>400k Followers</h2>
                </div>
                <div className="particular__streamer">
                    <img src="https://static.getloconow.com/onboarding-categories-images/Minecraft.png" alt=""/>
                    <h1>Minecraft</h1>
                    <h2>450k Followers</h2>
                </div>
                <div className="particular__streamer">
                    <img src="https://static.getloconow.com/onboarding-categories-images/Clash+of+Clans.png" alt=""/>
                    <h1>Clash of Clans</h1>
                    <h2>650k Followers</h2>
                </div>
            </div>
            <div className="streamers__header">
                <h1 className="streamers">TRENDING LIVE STREAMS</h1>
                <h1 className="see__all">See More</h1>
            </div>
            <div className="topvideos">
                <div className="particular__videos">
                    <img className="video__img" src="https://static.easyvideo.in/default_thumb/39fa6f06-e40c-4c77-850e-092fb909a5d7.jpg" alt=""/>
                    <div className="video__name">
                        <img src="https://static.getloconow.com/thumbnail/rescaled/users/VAPA3H4T749e9bb9483ff54d62bb39507d63204492.jpg" alt=""/>
                        <h1>Jonathan Gaming</h1>
                        <h3>⭐PUBG</h3>
                    </div>
                    <h2>Naughty or what!</h2>
                </div>
                <div className="particular__videos">
                    <img className="video__img" src="https://static.easyvideo.in/default_thumb/39fa6f06-e40c-4c77-850e-092fb909a5d7.jpg" alt=""/>
                    <div className="video__name">
                        <img src="https://static.getloconow.com/thumbnail/rescaled/users/VAPA3H4T749e9bb9483ff54d62bb39507d63204492.jpg" alt=""/>
                        <h1>Jonathan Gaming</h1>
                        <h3>⭐PUBG</h3>
                    </div>
                    <h2>Naughty or what!</h2>
                </div>
                <div className="particular__videos">
                    <img className="video__img" src="https://static.easyvideo.in/default_thumb/39fa6f06-e40c-4c77-850e-092fb909a5d7.jpg" alt=""/>
                    <div className="video__name">
                        <img src="https://static.getloconow.com/thumbnail/rescaled/users/VAPA3H4T749e9bb9483ff54d62bb39507d63204492.jpg" alt=""/>
                        <h1>Jonathan Gaming</h1>
                        <h3>⭐PUBG</h3>
                    </div>
                    <h2>Naughty or what!</h2>
                </div>
                <div className="particular__videos">
                    <img className="video__img" src="https://static.easyvideo.in/default_thumb/39fa6f06-e40c-4c77-850e-092fb909a5d7.jpg" alt=""/>
                    <div className="video__name">
                        <img src="https://static.getloconow.com/thumbnail/rescaled/users/VAPA3H4T749e9bb9483ff54d62bb39507d63204492.jpg" alt=""/>
                        <h1>Jonathan Gaming</h1>
                        <h3>⭐PUBG</h3>
                    </div>
                    <h2>Naughty or what!</h2>
                </div>
            </div>
            <div className="streamers__header">
                <h1 className="streamers">TRENDING VIDEOS</h1>
                <h1 className="see__all">See More</h1>
            </div>
            <div className="topvideos">
                <div className="particular__videos">
                    <img className="video__img" src="https://static.easyvideo.in/default_thumb/39fa6f06-e40c-4c77-850e-092fb909a5d7.jpg" alt=""/>
                    <div className="video__name">
                        <img src="https://static.getloconow.com/thumbnail/rescaled/users/VAPA3H4T749e9bb9483ff54d62bb39507d63204492.jpg" alt=""/>
                        <h1>Jonathan Gaming</h1>
                        <h3>⭐PUBG</h3>
                    </div>
                    <h2>Naughty or what!</h2>
                </div>
                <div className="particular__videos">
                    <img className="video__img" src="https://static.easyvideo.in/default_thumb/39fa6f06-e40c-4c77-850e-092fb909a5d7.jpg" alt=""/>
                    <div className="video__name">
                        <img src="https://static.getloconow.com/thumbnail/rescaled/users/VAPA3H4T749e9bb9483ff54d62bb39507d63204492.jpg" alt=""/>
                        <h1>Jonathan Gaming</h1>
                        <h3>⭐PUBG</h3>
                    </div>
                    <h2>Naughty or what!</h2>
                </div>
                <div className="particular__videos">
                    <img className="video__img" src="https://static.easyvideo.in/default_thumb/39fa6f06-e40c-4c77-850e-092fb909a5d7.jpg" alt=""/>
                    <div className="video__name">
                        <img src="https://static.getloconow.com/thumbnail/rescaled/users/VAPA3H4T749e9bb9483ff54d62bb39507d63204492.jpg" alt=""/>
                        <h1>Jonathan Gaming</h1>
                        <h3>⭐PUBG</h3>
                    </div>
                    <h2>Naughty or what!</h2>
                </div>
                <div className="particular__videos">
                    <img className="video__img" src="https://static.easyvideo.in/default_thumb/39fa6f06-e40c-4c77-850e-092fb909a5d7.jpg" alt=""/>
                    <div className="video__name">
                        <img src="https://static.getloconow.com/thumbnail/rescaled/users/VAPA3H4T749e9bb9483ff54d62bb39507d63204492.jpg" alt=""/>
                        <h1>Jonathan Gaming</h1>
                        <h3>⭐PUBG</h3>
                    </div>
                    <h2>Naughty or what!</h2>
                </div>
            </div>
        </div>
    )
}

export default HomePage
