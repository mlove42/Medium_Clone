import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {
    editMyComment,
    getSelectedStoryComments,
} from "../../../store/comment";
import { getStories } from "../../../store/story";

function EditComment() {
    const history = useHistory();
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state?.session.user);
    const { storyId } = useParams();
    const { commentId } = useParams();
    const comment = useSelector((state) => state?.comment[commentId]);
    const [body, setBody] = useState(comment?.body);
    const [userId, setUserId] = useState(sessionUser?.id);

    useEffect(() => {
        dispatch(getStories());
        dispatch(getSelectedStoryComments(storyId));
    }, [dispatch]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (sessionUser) {
            setUserId(sessionUser?.id);
        }

        const payload = {
            body: body,
        };

        const editedComment = dispatch(editMyComment(commentId, payload));

        history.push(`/story/${storyId}`);
    };

    return (
        <>
            <section className="edit-review">
                <form className="put-review" onSubmit={handleSubmit}>
                    <h3 className="review-text">Edit Comment</h3>

                    <input
                        className="review-body"
                        type="textarea"
                        required
                        name="body"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    ></input>
                    <button className="review-button" type=" submit">
                        Update Review
                    </button>
                </form>
            </section>
        </>
    );
}

export default EditComment;
