import React, { useState } from 'react';
import "./Profile.css";
import Agora from "./Agora"
import { Tabs, Tab } from '@material-ui/core';
import Home from './ProfileTabs/Home';
import About from './ProfileTabs/About';

const Profile = () => {

    const [selectedTab, setSelectedTab] = useState(0);

    const tabStyle = {
        default_tab:{
            color: '#68C222',
            fontSize: 15
        },
        active_tab:{
            fontFamily: "Segoe UI",
            fontSize: 20,
            fontWeight: "bold"
        }
    };

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return (
        <div className="profile">
              <div className="profile__topLeft">
                  <img src="https://th.bing.com/th/id/OIP.o2GFbWR0ThJD8kRzOpdnPwHaEH?w=326&h=181&c=7&o=5&pid=1.7"
                  alt="profile"/>
                  <div className="profile__top">
                    <div className="profile__topLeftDetails">
                        <h1>Cristiano Ronaldo</h1>
                        <h3>250M followers</h3>
                    </div>
                    <div className="profile__topRight">
                        <i className="fas fa-heart graybg"></i>
                        <i className="fas fa-bell graybg"></i>
                        <i className="fas fa-ellipsis-v"></i>
                    </div>
                  </div> 
              </div>
              {/*<div className="profile__menu">
                  <h2 className='active'>Home</h2>
                  <h2>About</h2>
                  <h2>Schedule</h2>
                  <h2>Videos</h2>
                  <h2><i class="fas fa-arrow-up"></i></h2>
                  <h2>Chat</h2>
              </div>*/}
              <div className="profile__tabs">
                <Tabs className="profile__tab"
                fullWidth
                TabIndicatorProps={{style: { background:'#0a9b77', height: '6px'}}}
                textColor="#0a9b77"  
                value={selectedTab} onChange={handleChange}>
                    <Tab style={tabStyle.active_tab} label="Home"/>
                    <Tab style={tabStyle.active_tab} label="About"/>
                    <Tab style={tabStyle.active_tab} label="Schedule"/>
                    <Tab style={tabStyle.active_tab} label="Videos"/>
                    <Tab style={tabStyle.active_tab} label="🡵  Chat"/>
                </Tabs>
                {selectedTab === 0 && <Home/>}
                {selectedTab === 1 && <About/>}
              </div>              
              
              <Agora/>
        </div>
    )
}

export default Profile
