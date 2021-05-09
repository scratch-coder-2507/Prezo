import axios from './axios';
import React, { useEffect, useState } from 'react'
import "./Browse.css"
import requests from "./Requests"
import Row from './Row';

function Browse() {
    const [game, setGame] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchGames);
            setGame(
                request.data.results[
                    Math.random() * request.data.results.length - 1
                ]
            );
            return request;
        }
        fetchData();
    }, []);
    console.log(game);
    return (
        <div className="browse">
            <h1>Browse</h1>
            <div className="browse__category">
                <div className="browse__category__games">
                    <h1>Games</h1>
                    <img 
                    className="browse__category__games__sports" 
                    src="https://icons.iconarchive.com/icons/3xhumed/call-of-duty-modern-warfare-3/128/CoD-Modern-Warfare-3-2-icon.png"
                    alt=""/>
                </div>
                <div className="browse__category__esports">
                    <h1>Esports</h1>
                    <img 
                        className="browse__category__esports__sports" 
                        src="https://findicons.com/files/icons/547/sport/128/trophy_gold.png"
                        alt=""/>
                </div>  
                <div className="browse__category__music">
                    <h1>Music</h1>
                    <img 
                        className="browse__category__music__sports" 
                        src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/128/headphone-icon.png"
                        alt=""/>
                </div> 
            </div>
            <div className="browse__tabs">
                <h1 className="browse__tabs__category">Categories</h1>
                <h1 className="browse__tabs__live">Live Channels</h1>
            </div>
            <div className="browse__games">
                <Row/>
            </div>
            
        </div>
    )
}

export default Browse
