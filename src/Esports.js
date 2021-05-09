import axios from './axios';
import React, { useEffect, useState } from 'react'
import "./Esports.css"
import requests from "./Requests"

function Esports() {
    const [game, setGame] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchGames);
            setGame(
                request.data.results[
                    Math.floor(Math.random() * request.data.results)
                ]
            );
            return request;
        }
        fetchData();
    }, []);
    console.log(game);

    return (
        <header>
            <div className="esports">
                <h1 className="esports__name">{game.name}</h1>
                <h1 className="esports__rating">{game.rating}/{game.rating_top}</h1>
                <img src={game.background_image} alt={game.name}/>
                <div>
                    <h1>Live Tournaments</h1>
                </div>

            </div>
        </header>
        
    )
}

export default Esports
