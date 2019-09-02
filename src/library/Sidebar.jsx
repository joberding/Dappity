import React, {Fragment} from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

import css from "./Sidebar.css"

export function ToggleSidebar (props) {
  // nav has class navbar-expand-lg
    return (
            <button type="button" id="sidebarCollapse" className="btn btn-info">
                <i className="fas fa-align-left"></i>
                <span>Toggle Sidebar</span>
            </button>)
}

export function Badge (props) {
    return (<span className="badge badge-primary ml-2 ">
              {props.children}
            </span>)
}


export default function Sidebar (props) {
  return (
  <nav id="sidebar" className="bg-light collapse navbar-collapse d-sm-block">
    <div id="sidebarContent" className="">
    {props.children}
    </div>
  </nav>)
}

export function Menu (props) {
  return (
    <ul className="list-unstyled components">
      {props.children}
    </ul>
  )
}

export function MenuItem (props) {
  const item = props
  const {id, title, icon, badge, disabled, route} = props
  const iconElement = icon ? <i className={[icon, ""].join(' ')}></i> : null
  const badgeElement = badge ?
      <sup>
        <Badge>
             { badge }
        </Badge>
      </sup>
     : null
  return(
  <li key={id || title}
      id={id}
      data-toggle="tooltip" data-placement="right"
      title={disabled ? "Coming soon...": ""}>
    {props.children ?
     <a>{iconElement}{title}{props.children}{badgeElement}</a>
     :<NavLink to={disabled ? "/#" : (route || ('/' + id))}>
        {iconElement}
        {title}
        {badgeElement}
      </NavLink>}
  </li>)
}


export function SubMenu (props) {
  const {title, icon, id, disabled} = props
  return (
  <li key={id || title}
      data-toggle="tooltip" data-placement="right"
      title={disabled ? "Coming soon...": ""}>
    <a href={"#" + id} data-toggle="collapse" aria-expanded="false"
       className="dropdown-toggle">
      <i className={icon}></i>
      {title}</a>
    <ul className="collapse list-unstyled" id={id}>
      {props.children}
    </ul>
  </li>)
}

export function SubMenuItem (props) {
  const {title, id} = props
  return (
  <li id={id} key={title} >
      <a>{title}</a>
  </li>)
}

export const MenuItemField =  withRouter ((props) => {
  // FIX: Generalize to MenuItemForm to handle any submission
  const {id, title, icon, history, onsubmit} = props
  const handler = (event) => {
                              if (event.key === "Enter"){
                                const route = onsubmit(event.target.value)
                                if (route) {
                                  history.push(route)
                                }
                                event.target.value = ""}}
  return (
      <MenuItem title={null}
                id={id}
                key={id}
                icon={icon}>
        <div className="form-group">
            <input type="text" size="3" className="form-control"
                   placeholder={title}
                   onKeyPress={ e => handler(e)} />
          <span className="item-title">{title}</span>
        </div>
      </MenuItem>)})
