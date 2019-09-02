import React from 'react';
import Profile from './Profile.js';
import Sidebar,{Menu, MenuItem} from './library/Sidebar.jsx';

export default function App (props) {
  return (
    <div className="row">
      <div className="col-auto">
         <Sidebar>
          <Menu>
            <MenuItem title = "favorites" icon = "fas fa-heart"/>
            <MenuItem title = "my apps" icon = "fas fa-bookmark" />
          </Menu>

         </Sidebar>
      </div>
      <div className="col">
         <Profile />
      </div>
    </div>
  )
}
