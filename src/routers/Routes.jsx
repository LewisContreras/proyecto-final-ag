import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Chat from '../containers/Chat';
import MainPage from '../containers/MainPage';
import PetDetailView from '../containers/PetDetailView';
import PetList from '../components/PetEdit/PetList.jsx';
import PostPage from '../containers/PostPage';
import EditPage from '../components/PetEdit/EditPage.jsx';
import MapsView from '../components/Map/MapsView';
import ChatMessages from '../containers/ChatMessages';



function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/post" component={PostPage} />
                <Route exact path="/my-pets" component={PetList} />
                <Route exact path="/map" component={MapsView} />
                <Route exact path="/detail/:id" component={PetDetailView} />
                <Route exact path="/chat" component={Chat} />
                <Route exact path="/chat-messages" component={ChatMessages} />
                <Route path="/my-pets/:petName" component={EditPage} />
            </Switch>
        </Router>
)
}

export default Routes
