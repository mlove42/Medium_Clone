import React from "react";
import logo from "../../../assets/logo.png";
import { NavLink } from "react-router-dom";
import LogoutButton from "../../auth/LogoutButton";
import "./navbar.css";

const NavBar = () => {
    return (
        <div className="wrapper">
            <div className="content">
                <div className="logoContainer">
                    <NavLink exact to="/">
                        <img className="logo" src={logo} />
                    </NavLink>
                </div>
                <div className="bannerNav">
                    <div className="story">Our Story</div>
                    <div className="membership">Membership</div>
                    <div>
                        <NavLink
                            to="/login"
                            exact={true}
                            activeClassName="active"
                        >
                            Login{" "}
                        </NavLink>
                    </div>
                    <div className="signup">
                        <NavLink
                            to="/sign-up"
                            exact={true}
                            activeClassName="active"
                        >
                            Sign Up
                        </NavLink>
                    </div>
                    <div className="accentedButton">Get Started</div>
                    <div>
                        {" "}
                        <LogoutButton />
                    </div>
                </div>
            </div>
        </div>
        // <nav>
        //     <ul>
        //         <li>
        //             <NavLink to="/" exact={true} activeClassName="active">
        //                 Home
        //             </NavLink>
        //         </li>
        //         <li>
        //             <NavLink to="/login" exact={true} activeClassName="active">
        //                 Login
        //             </NavLink>
        //         </li>
        //         <li>
        // <NavLink
        //     to="/sign-up"
        //     exact={true}
        //     activeClassName="active"
        // >
        //     Sign Up
        // </NavLink>
        //         </li>
        //         <li>
        //             <NavLink to="/users" exact={true} activeClassName="active">
        //                 Users
        //             </NavLink>
        //         </li>
        //         <li>
        //             <LogoutButton />
        //         </li>
        //     </ul>
        // </nav>
    );
};

export default NavBar;
