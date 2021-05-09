import React from 'react';
import "./Home.css";
import RecentItem from "../RecentItem";

function Home() {
    return (
        <div className="home">
            <div className="profile__recent">
                  <h2>Recent Broadcasts</h2>
                  <div className="profile__recentItems">
                      <RecentItem
                        url={'https://www.youtube.com/embed/ktjafK4SgWM'}
                        title={'Learn football skills live from the best footballer in the world!!'}
                        />
                        <RecentItem
                        url={'https://www.youtube.com/embed/ktjafK4SgWM'}
                        title={'Learn football skills live from the best footballer in the world!!'}
                        />
                        <RecentItem
                        url={'https://www.youtube.com/embed/ktjafK4SgWM'}
                        title={'Learn football skills live from the best footballer in the world!!'}
                        />
                        <RecentItem
                        url={'https://www.youtube.com/embed/ktjafK4SgWM'}
                        title={'Learn football skills live from the best footballer in the world!!'}
                        />
                  </div>

                  <div className="profile__categories">
                      <h2>Cristiano Ronaldo's recently streamed categories</h2>
                      <img src="https://th.bing.com/th/id/OIP.uMAa6hV-PWwr5P0sBQSXlgHaEo?w=248&h=180&c=7&o=5&pid=1.7" alt="football"/>
                      <h3>Football</h3>
                    </div>
              </div>
        </div>
    )
}

export default Home;
