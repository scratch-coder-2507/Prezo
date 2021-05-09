import React, { useEffect, useState } from 'react'
import "./Row.css"
import axios from "./axios"
import requests from "./Requests"

function Row() {
    
    const [games, setGames] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchGames);
            setGames(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]);
            return requests;
        }
        fetchData();
    },[]);
    console.log(games);
    return (
        <div className="row">
            <div className="row__posters">
                <h1>{games.name}</h1> 
            </div>
        </div>
    )
}

export default Row
