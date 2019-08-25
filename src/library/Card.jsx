import React, { useState } from 'react'

function AppLink (props) {
  return(
    <a className="stretched-link"
       href={props.appUrl}
       onClick={props.onClick}
       target="_blank"
       rel="noopener noreferrer" ></a>
     )
}

export default function Card (props) {
  const {href, title, description, icon, onClick, className} = props
      const [iconHidden, hideIcon] = useState(false)
  if (title) {

    return (
      <div className={["card h-100 shadow-sm", className].join(" ")}
           href={href} target="_blank">
        <div className="row no-gutters card-body">
          <div className="col-md-4 px-4 pt-1 p-sm-1">
            <img src={icon}
                 hidden={!icon || iconHidden}
                 className="dapp-icon"
                 onError={() => hideIcon(true)}
                 style={{height: "auto", width: "100%", marginRight: "1em"}} />
            <div className="alert alert-primary dapp-icon w-100 h-100"
                 hidden={!iconHidden}
                 style={{color: "white", textAlign: "center", backgroundColor: '#a56dff'}}>
              <svg viewBox="0 0 100 100" style={{width: "100%", height: "auto"}}>
                <text x="50" y="100" fontSize="100" fill="white" textAnchor="middle">
                  {title? title.charAt(0) : "-"}
                </text>
              </svg>
            </div>
          </div>
          <div className="col-md-8 text-center text-md-left">
            <div className="card-body py-0 mb-0 mt-2">
              <div className="card-title">{title}</div>
              <p className="card-text d-none d-sm-block">
                {description}
              </p>
            </div>
          </div>
          <AppLink
             className="stretched-link"
             onCLick={onClick}
             appUrl={href} />
        </div>
        <div className="card-footer m-0 p-0 bg-light">
          {props.children}
        </div>
      </div>
    )
  } else {
    return (null)
  }
}
