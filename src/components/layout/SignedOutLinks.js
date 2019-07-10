import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (

    <ul id="slide-out" className="sidenav sidenav-fixed blue-raspberry">
        <li>
            <div className="user-view">
                <a href="/profile"><img className="sidenav_logo " src="img/logo2.png" alt="profile_photo" /></a>
            </div>
        </li>
        
        <li>
            <NavLink to='/signin'>
                <i className="material-icons white-text">exit_to_app</i>
                    <span className="white-text">Login</span>
            </NavLink>
        </li>
        <li className="">
            <NavLink to='/signup'>
                <i className="material-icons white-text">person_add</i>
                    <span className="white-text">Register</span>
            </NavLink>
        </li>
        
    </ul>


  )
}

export default SignedOutLinks