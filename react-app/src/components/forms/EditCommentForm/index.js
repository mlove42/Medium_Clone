import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {
    editMyComment,
    getSelectedStoryComments,
} from "../../../store/comment";
import { getStories } from "../../../store/story";

function EditComment() {
    const id = useParams;
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state?.session.user);
    const { storyId } = useParams();
    const { commentId } = useParams();
    const comment = useSelector((state) => state?.comment[commentId]);
    const [body, setBody] = useState(comment?.body);
    const [userId, setUserId] = useState(sessionUser?.id);

    const [editReview, setEditReview] = useState("");
    const [editState, setEditState] = useState(false);
    useEffect(() => {
        dispatch(getStories());
        dispatch(getSelectedStoryComments(storyId));
    }, [dispatch]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const editComment = {
            body: body,
        };

        dispatch(editMyComment(commentId, editComment));
        setEditState((editState) => !editState);
        // history.push(`/story/${storyId}`);
    };
    // console.log(commentId, "THIS IS THE COMMENT ID");
    // console.log(editState, "EDIT STATE");

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
