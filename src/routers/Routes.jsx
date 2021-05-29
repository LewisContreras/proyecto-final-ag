import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Chat from '../containers/Chat';
import LogIn from '../containers/LogIn';
import MainPage from '../containers/MainPage';
import PetDetailView from '../containers/PetDetailView';
import PostPage from '../containers/PostPage';



function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/post" component={PostPage} /><Route exact path="/detail/:id" component={PetDetailView} />
                <Route exact path="/chat" component={Chat} />
                <Route exact path="/login" component={LogIn} />
            </Switch>
        </Router>
)

        
        
}

export default Routes
