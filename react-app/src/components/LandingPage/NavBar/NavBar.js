import React, { useState } from "react";
import { useEffect } from "react";
import logo from "../../../assets/logo.png";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LogoutButton from "../../auth/LogoutButton";
import LoginFormModal from "../../modals/LoginFormModal/index";
import SignUpFormModal from "../../modals/SignUpModal/index";
import { login } from "../../../store/session";
import Menu from "../../menu";
import "./navbar.css";
import { BsPencilSquare } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
const NavBar = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    // console.log(showMenu, "OPEN STATE");
    const sessionUser = useSelector((state) => state.session.user);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;
        const closeMenu = () => {
            setShowMenu(false);
        };
        document.addEventListener("click", closeMenu);
        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);
    let sessionLinks;

    if (sessionUser) {
        sessionLinks = (
            <div className="sign-in-session">
                <div
                    className="write-header"
                    onClick={() => {
                        history.push("/story");
                    }}
                >
                    <div className="pencil-homepage">
                        <BsPencilSquare />
                    </div>
                    <div>Write</div>
                </div>

                {showMenu && <Menu />}
                <div className="menu-photo" onClick={openMenu}>
                    <div className="author-image-container">
                        <img
                            className="author-image"
                            src={sessionUser?.picture}
                        />
                    </div>
                    <div className="icon-menu">
                        <BiChevronDown />
                    </div>
                </div>
            </div>
        );
    } else {
        sessionLinks = (
            <div className="session-test">
                {/* <div className="story">Our Story</div>
                <div className="membership">Membership</div> */}

                <div className="login-nav">
                    <LoginFormModal />
                </div>
                <div className="signup-nav">
                    <SignUpFormModal />
                </div>
                <button
                    className="demo-user"
                    onClick={async (e) => {
                        const email = "thanos@aa.io";
                        const password = "password";
                        // history.push("/");

                        const data = await dispatch(login(email, password));
                        if (data) history.push("/");
                    }}
                >
                    Demo User
                </button>
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
