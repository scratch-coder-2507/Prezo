import React from 'react'
import { useHistory } from 'react-router-dom';
import "./Channel.css";
const Channel = ({avatar, name, followers}) => {
    const history = useHistory();
    return (
        <div onClick={() => {
            history.push("/profile");
        }} className='channel'>
            <div className='channel__details'>
                <img src={avatar}
                alt="avatar"/>
                <p>{name}</p>

            </div>
            <p>{followers}</p>
        </div>
    )
}

export default Channel
