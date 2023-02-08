import React, { useEffect, useState } from "react";
// import "./index.css";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserId } from "../../../store/follow";
import {
    createStory,
    getStories,
    getStoryById,
    editStory,
} from "../../../store/story";

// import { addNewSpot } from "../../../store/spotsReducer";

const EditStory = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const { storyId } = useParams();
    console.log(storyId, "edit form STORY ID");
    const story = useSelector((store) => store.story[storyId]);
    console.log(story, "edit form STORY");
    const [errors, setErrors] = useState([]);
    const [title, setTitle] = useState(story?.title);
    const [body, setBody] = useState(story?.body);
    const [brief, setBrief] = useState(story?.brief);
    const [estimated_read, setEstimatedRead] = useState(story?.estimatedRead);
    const [image, setImage] = useState(story?.storyImage);
    const [load, setLoad] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();

        const updateStory = {
            title,
            body,
            brief,
            estimated_read,
            image,
            id: parseInt(storyId),
        };
        const data = await dispatch(editStory(storyId, updateStory));
        if (data) {
            setErrors(data);
            // console.log(data, "CAN I SEE THIS");
            // console.log(data.length, "WHAT IS THIS LENGTH");
        }

        setLoad((prev) => !prev);

        if (!data) {
            {
                history.push(`/story/${storyId}`);
            }
        }
        dispatch(getStoryById(storyId));
    };

    return (
        <>
            <div className="back-home" onClick={() => history.push("/")}>
                <button>Back to Home</button>
            </div>
            <div className="new-story-wrapper">
                <div className="boarder-div">
                    <div className="title-new-story">Update your story</div>

                    <form
                        className="test-form"
                        method="POST"
                        onSubmit={handleSubmit}
                    >
                        <div className="help-div">
                            <div className="small-field">
                                <span className="field-title">Title</span>
                                <span className="input-container-story">
                                    <input
                                        className="input-field-story"
                                        type="text"
                                        value={title}
                                        // required
                                        onChange={(e) =>
                                            setTitle(e.target.value)
                                        }
                                    />
                                </span>
                            </div>

                            <div className="small-field">
                                <span className="field-title">Brief</span>
                                <span className="input-container-story">
                                    <input
                                        type="text"
                                        className="input-field-story"
                                        value={brief}
                                        onChange={(e) =>
                                            setBrief(e.target.value)
                                        }
                                    />
                                </span>
                            </div>
                            <div className="small-field">
                                <span className="field-title">
                                    {" "}
                                    Estimated Read (in minutes)
                                </span>
                                <span className="input-container-story">
                                    <input
                                        type="text"
                                        className="input-field-story"
                                        value={estimated_read}
                                        // required
                                        onChange={(e) =>
                                            setEstimatedRead(e.target.value)
                                        }
                                    />
                                </span>
                            </div>

                            <div className="small-field">
                                <span className="field-title">
                                    Story Image URL
                                </span>
                                <span className="input-container-story">
                                    <input
                                        type="input"
                                        placeholder="Enter Story Image"
                                        className="input-field-story"
                                        value={image}
                                        // required
                                        onChange={(e) =>
                                            setImage(e.target.value)
                                        }
                                    />
                                </span>
                            </div>
                            <div className="small-field">
                                <span className="field-title">
                                    Article Text
                                </span>
                                <span className="input-container-story">
                                    <textarea
                                        type="text"
                                        className="input-field-story"
                                        value={body}
                                        rows={24}
                                        // required
                                        onChange={(e) =>
                                            setBody(e.target.value)
                                        }
                                    />
                                </span>
                            </div>
                            <div className="error-messages">
                                {errors?.map((error, ind) => (
                                    <div className="error" key={ind}>
                                        {error}
                                    </div>
                                ))}
                            </div>
                            <button type="submit" className="button">
                                Republish Story
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default EditStory;
