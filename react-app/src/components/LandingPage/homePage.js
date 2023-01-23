import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { getStories } from "../../store/story";
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
            <h1>home</h1>
            <h2>we made it</h2>
        </>
    );
};

export default AllStories;
