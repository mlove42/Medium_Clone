import "./main_pass.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { getStories } from "../../store/story";

import PostCard from "../LandingPage/postCard/postCard";
import NavBar from "../StoryDetailsPage/header/header";
import UserInfo from "./user_sidebar";
import { authenticate } from "../../store/session";
const MainPage = () => {
    const dispatch = useDispatch();
    const stories = useSelector((store) => {
        return store;
    });
    // console.log(stories, "STORE");
    useEffect(() => {
        dispatch(getStories());
        dispatch(authenticate());
    }, [dispatch]);

    return (
        <>
            <div className="main-page-user">
                {/* <Banner /> */}
                <NavBar />
                <div className="view-page-content">
                    <div className="user-home">
                        <div>
                            <PostCard />
                        </div>
                    </div>
                    <div className="user-info">
                        <UserInfo />
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainPage;
