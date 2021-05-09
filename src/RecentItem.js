import React from 'react'
import './RecentItem.css'

const RecentItem = ({url, title}) => {
    return (
        <div className="item">
            <iframe
                width="400"
                height="235"
                src={url}
                frameborder="0"
                allow="accelerometer; autoplay;clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
            </iframe>

            <div className="item__details">
                <img src="https://th.bing.com/th/id/OIP.uMAa6hV-PWwr5P0sBQSXlgHaEo?w=248&h=180&c=7&o=5&pid=1.7" alt="football"/>
                <div className="item__detailsText">
                    <h4>{title}</h4>
                    <p>Cristiano Ronaldo</p>
                    <p>Football</p>
                </div>
            </div>
        </div>
    )
}

export default RecentItem
