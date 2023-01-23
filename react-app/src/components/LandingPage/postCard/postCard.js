import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
// import { getStories } from "../../store/story";
import { getStories } from "../../../store/story";
import "./postCard.css";
const PostCard = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const stories = useSelector((store) => {
        return Object.values(store.story);
    });
    console.log(stories, "STORIES INFO");

    useEffect(() => {
        dispatch(getStories());
    }, [dispatch]);
    return (
        <>
            {stories?.map((story) => (
                <>
                    <div className="wrapper-home">
                        <div className="post-details">
                            <div className="author-container">
                                <div className="author-image-container">
                                    <img
                                        className="author-image"
                                        src={story.picture}
                                    />
                                </div>

                                <div className="author-name">
                                    {story.firstName} {story.lastName}
                                </div>
                            </div>
                            <h3 className="title-home">{story.title}</h3>
                            <div className="briefing">{story.brief}</div>
                            <div className="details-container">
                                <span className="article-details">
                                    June 15 • {story.estimatedRead} min read •{" "}
                                    <span className="category">
                                        productivity
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className="thumbnail-image">
                            <img src={story.storyImage} />
                        </div>
                    </div>
                </>
            ))}
        </>
    );
};

export default PostCard;
