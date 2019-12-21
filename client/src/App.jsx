import React from 'react';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Home from './components/Home/Home'
import Login_Register from './components/Login_Register/main';

class App extends React.Component{
    render(){
        return(
            <div>
                <Router>
                    <Switch>
                    <Route path = "/" exact component = {Login_Register} />
                        <Route path = "/Home" component = {Home} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;
