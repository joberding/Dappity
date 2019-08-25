import React from 'react'
import { useBlockstack, useAppManifest } from 'react-blockstack'
import Card from './library/Card.jsx'

const avatarFallbackImage = 'https://s3.amazonaws.com/onename/avatar-placeholder.png';

/*
function AppCard (props) {
  const { app } = props
  const manifest = useAppManifest(app) || {"short_name": "None"}
  const {name, short_name, start_url, description, icons, theme_color, background_color} = manifest
  const icon = icons ? icons[0] : null
  const src = icon ? icon.src : avatarFallbackImage
  return (
  <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 p-1">
    <div className="card bg-dark text-white h-100 shadow-1" style={{color: theme_color, backgroundColor:  background_color}}>

      <img className="card-img-top p-3" src={src} alt="Card image cap" />
      <div className="card-header">
        <h3 className="card-title">
          <a href={app} target="_blank">   { short_name || name || "???" }</a>
        </h3>
        <h5 className="card-subtitle">{app}</h5>
      </div>
      <div className="card-body">
        <p className="card-text"> {description} </p>
      </div>
      <small hidden={true}>{JSON.stringify (manifest)}</small>
    </div>
  </div>)
}*/

function AppCard (props) {
  const { app } = props
  const manifest = useAppManifest(app) || {"short_name": "None"}
  const {name, short_name, start_url, description, icons, theme_color, background_color} = manifest
  const icon = icons ? icons[0] : null
  const src = icon ? icon.src : avatarFallbackImage
  return (
  <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 p-1">
    <Card title={short_name || name || "???" }
          description={description}
          icon={src}>
       Juliet
    </Card>
  </div>)
}



export default function Profile (props) {
  const { signOut, person, userData } = useBlockstack()
  return (
    person ?
    <div className="panel-welcome" id="section-2">
      <div className = "row">
        { Object.keys(userData.profile.apps).map(app => <AppCard app={app} /> ) }
      </div>
    </div> : null
  )
}
