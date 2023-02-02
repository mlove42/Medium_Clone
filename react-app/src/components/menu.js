import React, { useState } from "react";
import LogoutButton from "./auth/LogoutButton";
import "./menu.css";
const Menu = () => {
    return (
        <div className="menu-container dropDownProfile">
            <ul className="bullets">
                {/* <li>Profile</li> */}

                <li>
                    <LogoutButton />
                </li>
            </ul>
        </div>
    );
};

export default Menu;
