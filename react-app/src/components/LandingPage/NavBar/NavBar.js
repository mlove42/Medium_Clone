import React, { useState } from "react";
import logo from "../../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import LogoutButton from "../../auth/LogoutButton";
import LoginFormModal from "../../modals/LoginFormModal/index";
import SignUpFormModal from "../../modals/SignUpModal/index";
import "./navbar.css";

const NavBar = () => {
    const sessionUser = useSelector((state) => state.session.user);
    console.log(sessionUser, "USER !!!!");
    let sessionLinks;

    if (sessionUser) {
        sessionLinks = (
            <div className="sign-in-session">
                <div>
                    <NavLink to="/story">Write</NavLink>
                </div>
                <div>
                    {" "}
                    <LogoutButton />
                </div>
            </div>
        );
    } else {
        sessionLinks = (
            <div className="session-test">
                <div className="story">Our Story</div>
                <div className="membership">Membership</div>

                <div className="login-nav">
                    <LoginFormModal />
                </div>
                <div className="signup-nav">
                    <SignUpFormModal />
                </div>
            </div>
        );
    }

    return (
        <div className="wrapper">
            <div className="content">
                <div className="logoContainer">
                    <NavLink exact to="/">
                        <img className="logo" src={logo} />
                    </NavLink>
                </div>
                <div className="bannerNav">
                    <div>{sessionLinks}</div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
