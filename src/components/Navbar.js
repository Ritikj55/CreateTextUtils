import React from 'react'
import PropTypes from 'prop-types'
import {
     Link
} from 'react-router-dom'

export default function Navbar(props) {
  
   const styles = {
    width: "20px",
    height: "20px",
    padding: "6px 4px",
    borderRadius: "15px",
    fontSize: "4px",
    textAlign: "center"
   }
  
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode}  bg-${props.mode}`}>
    <div className="container-fluid">
    <a className="Navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="/">Link</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">Action</a></li>
              <li><a className="dropdown-item" href="/">Another action</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="/">Something else here</a></li>
            </ul>
          </li> */}
          <li className="nav-item">
            <a className="nav-link active" href="/about">{props.aboutText}</a>
          </li>
        </ul>
        {/* <div className={`form-check form-switch text-${props.switchMode}`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" 
          id="flexSwitchCheckDefault"/>
        <label className="form-check-label" for="flexSwitchCheckDefault" >DarkMode</label>
       </div> */}
         <div>
         <button type="button" style={styles} onClick={()=>props.toggleMode('primary')} className="btn btn-primary mx-2 border"></button>
         <button type="button" style={styles} onClick={()=>props.toggleMode('secondary')} className="btn btn-secondary mx-2 border"></button>
         <button type="button" style={styles} onClick={()=>props.toggleMode('success')} className="btn btn-success mx-2 border"></button>
         <button type="button" style={styles} onClick={()=>props.toggleMode('danger')} className="btn btn-danger mx-2 border"></button>
         <button type="button" style={styles} onClick={()=>props.toggleMode('warning')} className="btn btn-warning mx-2 border"></button>
         <button type="button" style={styles} onClick={()=>props.toggleMode('light')} className="btn btn-light mx-2 border"></button>
         <button type="button" style={styles} onClick={()=>props.toggleMode('dark')} className="btn btn-dark mx-2 border"></button>
         </div>
     </div>
    </div>
  </nav>
  )
}
Navbar.propTypes = {title: PropTypes.string.isRequired, 
                   aboutText: PropTypes.string}
Navbar.defaultProps = {title:"Enter Title here " ,
                       aboutText: "Enter about here "} ;