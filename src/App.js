import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom'
import Profile from './Profile.js';
import Sidebar,{Menu, MenuItem} from './library/Sidebar.jsx';

export default function App (props) {
  return (
  <Router>
    <div className="row">
      <div className="col-auto">
         <Sidebar>
          <Menu>
            <MenuItem id="favorites" title = "Favorites" icon = "fas fa-heart"/>
            <MenuItem id="used" title = "My Apps" icon = "fas fa-bookmark" />
          </Menu>
          <Menu>
            <MenuItem id="productivity" title = "Productivity" icon = "fas fa-folder"/>
            <MenuItem id="digital rights"  title = "Digital Rights" icon = "fas fa-folder" />
          </Menu>
          <Menu>
            <MenuItem id="top" title = "Top Ranking" icon = "fas fa-certificate"/>
            <MenuItem id="recommended" title = "Recommended" icon = "fas fa-thumbs-up" />
            <MenuItem id="new" title = "New Releases" icon = "fas fa-lightbulb" />
          </Menu>
         </Sidebar>
      </div>
      <div className="col">

          <Switch>
            <Route key="favorites" path="/favorites" render={() => <p>Favorites</p>} />
            <Route key="used" path="/used" component={Profile} />
            <Redirect to="/used"/>
          </Switch>

      </div>
    </div>
  </Router>
  )
}
