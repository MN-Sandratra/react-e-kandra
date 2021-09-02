import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../styles/feed.scss'
import Chat from './Chat';
import Commentaire from './comment';
import Home from './home';
import Job from './Job';
import Message from './messages';

function Feed(){
    return(
        <div className="feed">
            <div className="container">
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/commentaire/:postId">
                    <Commentaire />
                </Route>
                <Route path="/message">
                    <Message />
                </Route>
                <Route path="/chat/:id">
                    <Chat/>
                </Route>
                <Route path="/job">
                    <Job/>
                </Route>
            </Switch>
                
            </div>
        </div>
    )

}
export default Feed;
