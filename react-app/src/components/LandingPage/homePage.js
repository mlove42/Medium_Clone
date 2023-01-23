import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { getStories } from "../../store/story";
import Banner from "./Banner/banner";
import PostCard from "./postCard/postCard";
const AllStories = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const stories = useSelector((store) => {
        return store;
    });
    console.log(stories, "STORE");
    useEffect(() => {
        dispatch(getStories());
    }, [dispatch]);

    return (
        <>
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
};

export default AllStories;
