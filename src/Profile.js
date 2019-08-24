import React from 'react';
import { useBlockstack, useAppManifest } from 'react-blockstack'

const avatarFallbackImage = 'https://s3.amazonaws.com/onename/avatar-placeholder.png';

function App (props) {
  const { app } = props
  const manifest = useAppManifest(app) || {"short_name": "None"}
  const {name, short_name, start_url, description, icons } = manifest
  return (
    <div className="card col-4">
      <h1>{ short_name || name || "???" }</h1>
      <h3>{app}</h3>
      <p> {description} </p>
      <small hidden={true}>{JSON.stringify (manifest)}</small>
    </div>)
}

export default function Profile (props) {
  const { signOut, person, userData } = useBlockstack()
  return (
    person ?
    <div className="panel-welcome" id="section-2">
      <div className="avatar-section">
        <img src={ person.avatarUrl() ? person.avatarUrl() : avatarFallbackImage } className="img-rounded avatar" id="avatar-image" alt=""/>
      </div>
      <h1>Hello, <span id="heading-name"> { person.name() ? person.name() : 'Nameless Person' } aka {userData.username}</span>!</h1>
      <div className = "row">
        { Object.keys(userData.profile.apps).map(app => <App app={app} /> ) }
      </div>
    </div> : null
  )
}
