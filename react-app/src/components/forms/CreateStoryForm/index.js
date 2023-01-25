import React, { useState } from "react";
import "./index.css";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createStory, getStories } from "../../../store/story";

// import { addNewSpot } from "../../../store/spotsReducer";

const CreateStory = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [brief, setBrief] = useState("");
    const [estimated_read, setEstimatedRead] = useState("");
    const [image, setImage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newStory = {
            title,
            body,
            brief,
            estimated_read,
            image,
        };

        dispatch(createStory(newStory));
        // dispatch(getStories());
        history.push("/");
    };

    return (
        <div className="new-story-wrapper">
            <div className="boarder-div">
                <div className="title-new-story">Write your story</div>

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
                                    placeholder="Enter Title"
                                    required
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </span>
                        </div>

                        <div className="small-field">
                            <span className="field-title">Brief</span>
                            <span className="input-container-story">
                                <input
                                    type="text"
                                    className="input-field-story"
                                    placeholder="Enter Brief"
                                    onChange={(e) => setBrief(e.target.value)}
                                />
                            </span>
                        </div>
                        <div className="small-field">
                            <span className="field-title">Estimated Read</span>
                            <span className="input-container-story">
                                <input
                                    type="text"
                                    className="input-field-story"
                                    placeholder="Enter Estimated Read"
                                    required
                                    onChange={(e) =>
                                        setEstimatedRead(e.target.value)
                                    }
                                />
                            </span>
                        </div>

                        <div className="small-field">
                            <span className="field-title">Story Image URL</span>
                            <span className="input-container-story">
                                <input
                                    type="input"
                                    placeholder="Enter Story Image"
                                    className="input-field-story"
                                    // required
                                    onChange={(e) => setImage(e.target.value)}
                                />
                            </span>
                        </div>
                        <div className="small-field">
                            <span className="field-title">Article Text</span>
                            <span className="input-container-story">
                                <textarea
                                    type="text"
                                    className="input-field-story"
                                    placeholder="Enter text here"
                                    rows={24}
                                    required
                                    onChange={(e) => setBody(e.target.value)}
                                />
                            </span>
                        </div>

                        <button type="submit" className="button">
                            Publish Story
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateStory;
