import './App.css';
import Body from './Body';
import Header from './Header';
import Sidebar from "./Sidebar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Browse from './Browse';
import Esports from './Esports';
import HomePage from './HomePage';

function App() {
  return (
    //BEM naming convention
    <div className="app">
      <Router>
        <Switch>
        <Route path="/esports">
              <Header/>
              <div className="app__main2">
                <Sidebar/>
                <Esports/>
              </div>  
            </Route>
            <Route path="/browse">
              <Header/>
              <div className="app__main2">
                <Sidebar/>
                <Browse/>
              </div>  
            </Route>
            <Route path="/profile">    
              <Header/>          
              <div className="app__main3">
              <Sidebar/>
                <Body/>
              </div>
            </Route>
            <Route path="/">    
              <Header/>          
              <div className="app__main">
              <Sidebar/>
                <HomePage/>
              </div>
            </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
