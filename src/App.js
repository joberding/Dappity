import React from 'react';
import Profile from './Profile.js';
import Sidebar,{Menu, MenuItem} from './library/Sidebar.jsx';

export default function App (props) {
  return (
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
         <Profile />
      </div>
    </div>
  )
}
