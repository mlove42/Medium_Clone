import React, { useEffect, useState } from "react";
// import "./index.css";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

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
    const story = useSelector((store) => store.story);
    console.log(story?.title, "THIS IS THE STORY");
    console.log(story?.brief, "BODY");
    console.log(story?.image, "IMAGE");
    const [title, setTitle] = useState(story?.title);
    const [body, setBody] = useState(story?.body);
    const [brief, setBrief] = useState(story?.brief);
    const [estimated_read, setEstimatedRead] = useState(story.estimated_read);
    const [image, setImage] = useState(story.image);

    const handleSubmit = (e) => {
        e.preventDefault();

        const updateStory = {
            title,
            body,
            brief,
            estimated_read,
            image,
            id: parseInt(storyId),
        };
        dispatch(editStory(storyId, updateStory));
        history.push(`/story/${storyId}`);
    };
    useEffect(() => {
        dispatch(getStoryById(storyId));
    }, [dispatch]);

    return (
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
                                    value={brief}
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
                                    value={estimated_read}
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
                                    value={image}
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
                                    value={body}
                                    rows={24}
                                    required
                                    onChange={(e) => setBody(e.target.value)}
                                />
                            </span>
                        </div>

                        <button type="submit" className="button">
                            Republish Story
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditStory;
