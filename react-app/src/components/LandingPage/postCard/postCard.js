import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useHistory, Link, History } from "react-router-dom";

// import { getStories } from "../../store/story";
import { getStories, getStoryById } from "../../../store/story";
import { getSelectedStoryComments } from "../../../store/comment";
import { loadLikesByStoryId } from "../../../store/likes";
import { getUserId } from "../../../store/follow";
import "./postCard.css";
const PostCard = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const stories = useSelector((store) => {
        return Object.values(store.story);
    });

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
                            <div
                                className="card-title-brief"
                                // to={`/story/${story.id}`}
                                onClick={() => {
                                    history.push(`/story/${story.id}`);
                                    dispatch(getStoryById(story.id));
                                    dispatch(
                                        getSelectedStoryComments(story.id)
                                    );
                                    if (!story.id)
                                        dispatch(loadLikesByStoryId(story?.id));
                                    dispatch(getUserId(story.id));
                                }}
                            >
                                <h3 className="title-home">{story.title}</h3>
                                <div className="briefing">{story.brief}</div>
                            </div>
                            <div className="details-container">
                                {/* <span className="article-details">
                                    June 15 • {story.estimatedRead} min read •{" "}
                                    <span className="category">
                                        productivity
                                    </span>
                                </span> */}
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
