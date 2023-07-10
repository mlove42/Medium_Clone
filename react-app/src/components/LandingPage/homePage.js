import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { getStories } from "../../store/story";
import Banner from "./Banner/banner";
import NavBar from "./NavBar/NavBar";
import PostCard from "./postCard/postCard";
import MainPage from "../user_home/main_page";
const AllStories = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const stories = useSelector((store) => {
        return store;
    });
    const sessionUser = useSelector((state) => state.session.user);
    // console.log(stories, "STORE");
    useEffect(() => {
        dispatch(getStories());
    }, [dispatch]);

    let sessionLinks;
    if (sessionUser) {
        return <MainPage />;
    } else {
        return (
            <>
                <NavBar />
                <div className="home-wrapper">
                    <Banner />
                    <div className="post-main">
                        <div className="posts-list">
                            <PostCard />
                        </div>
                    </div>
                </div>
            </>
        );
    }
};
export default AllStories;
