import React from "react";
import './NavBar.scss';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navBar">
            <NavLink className="navLink" to={"/profile"}>Profile</NavLink>
            <NavLink className="navLink" to={"/dialogs"}>Dialogs</NavLink>
            <NavLink className="navLink" to={"/news"}>News</NavLink>
            <NavLink className="navLink" to={"/music"}>Music</NavLink>
            <NavLink className="navLink" to={"/settings"}>Settings</NavLink>
            {/*<a className="navLink" href="/profile">Profile</a>*/}
            {/*<a className="navLink" href="/dialogs">Dialogs</a>*/}
            {/*<a className="navLink" href="/news">News</a>*/}
            {/*<a className="navLink" href="/music">Music</a>*/}
            {/*<a className="navLink" href="/settings">Settings</a>*/}
        </nav>
    );
}

export default NavBar;