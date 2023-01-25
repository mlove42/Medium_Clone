import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { addNewComment } from "../../../store/comment";
// import "./CreateReview.css";

function PostComment() {
    const history = useHistory();
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [body, setBody] = useState("");
    const [userId, setUserId] = useState(sessionUser.id);
    const { storyId } = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (body.length === 0) {
        }

        if (sessionUser) {
            setUserId(sessionUser?.id);
        }

        const payload = {
            body: body,
        };
        dispatch(addNewComment(storyId, payload));

        history.push(`/story/${storyId}`);
    };
    return (
        <>
            <section className="new-review">
                <form className="make-new-review" onSubmit={handleSubmit}>
                    <h3 className="review-text">New Comment</h3>

                    <input
                        className="review-body"
                        type="textarea"
                        required
                        name="body"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    ></input>

                    <button className="review-button" type=" submit">
                        Post Comment
                    </button>
                </form>
            </section>
        </>
    );
}

export default PostComment;
