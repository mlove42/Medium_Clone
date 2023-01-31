import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { logout } from "../../store/session";
import { getStories } from "../../store/story";

const LogoutButton = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const onLogout = async (e) => {
        await dispatch(logout());
        history.push("/");
    };

    return <div onClick={onLogout}>Logout</div>;
};

export default LogoutButton;
