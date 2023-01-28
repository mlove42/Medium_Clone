import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import { getStories } from "../../store/story";

const LogoutButton = () => {
    const dispatch = useDispatch();
    const onLogout = async (e) => {
        await dispatch(logout());
    };

    return <div onClick={onLogout}>Logout</div>;
};

export default LogoutButton;
