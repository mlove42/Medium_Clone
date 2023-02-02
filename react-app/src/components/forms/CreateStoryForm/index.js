import React, { useState } from "react";
import "./index.css";
import "../error.css";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createStory, getStories } from "../../../store/story";

// import { addNewSpot } from "../../../store/spotsReducer";

const CreateStory = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [errors, setErrors] = useState([]);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [brief, setBrief] = useState("");
    const [estimated_read, setEstimatedRead] = useState("");
    const [image, setImage] = useState("");
    const [load, setLoad] = useState(false);
    const handleSubmit = async (e) => {
        // let data;
        e.preventDefault();
        const newStory = {
            title,
            body,
            brief,
            estimated_read,
            image,
        };
        const data = await dispatch(createStory(newStory));

        if (data) {
            setErrors(data);
            // console.log(data, "CAN I SEE THIS");
            // console.log(data.length, "WHAT IS THIS LENGTH");
        }

        setLoad((prev) => !prev);

        if (!data) {
            history.push("/");
        }
        // setLoad((prev) => !prev);
    };

    return (
        <>
            <div className="back-home" onClick={() => history.push("/")}>
                <button>Back to Home</button>
            </div>
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
                                        placeholder="Enter Brief"
                                        onChange={(e) =>
                                            setBrief(e.target.value)
                                        }
                                    />
                                </span>
                            </div>
                            <div className="small-field">
                                <span className="field-title">
                                    Estimated Read (in minutes)
                                </span>
                                <span className="input-container-story">
                                    <input
                                        type="text"
                                        className="input-field-story"
                                        placeholder="Enter Estimated Read"
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
                                        placeholder="Enter text here"
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
                                Publish Story
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default CreateStory;
