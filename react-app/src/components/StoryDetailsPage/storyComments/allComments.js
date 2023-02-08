import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, Link } from "react-router-dom";
import { getStoryById } from "../../../store/story";
import {
    getSelectedStoryComments,
    deleteMyComment,
    editMyComment,
} from "../../../store/comment";
import PostComment from "../../forms/CreateCommentForm";
import EditComment from "../../forms/EditCommentForm";
const AllComments = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { storyId } = useParams();
    const [editReview, setEditReview] = useState("");
    const [editState, setEditState] = useState(false);

    const [commentId, setCommentId] = useState("");
    const comment = useSelector((state) => state?.comment[commentId]);

    const [body, setBody] = useState(comment?.body);
    // console.log(editState, "EDIT STATE");
    useEffect(() => {
        // dispatch(getStoryById(storyId));
        dispatch(getSelectedStoryComments(storyId));
    }, [dispatch, storyId]);

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

    const sessionUser = useSelector((state) => state.session.user);
    let userId = sessionUser && sessionUser.id;

    const comments = useSelector((state) => {
        return Object.values(state.comment);
    });

    const state = useSelector((state) => {
        return state;
    });

    const userComment = comments?.filter(
        (comment) => comment?.userId === sessionUser?.id
    );

    const deleteComment = () => {
        dispatch(deleteMyComment(userComment[0]?.id));
        //
        dispatch(getSelectedStoryComments(storyId));

        history.push(`/story/${storyId}`);
    };

    function findId(id) {
        for (let i = 0; i < userComment.length; i++) {
            let res = userComment[i];

            if (res.id === id) {
            }
            return res.id;
        }
    }

    return (
        <div>
            <h1>Comments Section</h1>

            <PostComment />
            {comments?.map((comment) => (
                <div key={comment.id} className="comment-container">
                    <>
                        <p>{comment.body} </p>

                        {userId == comment.userId ? (
                            <>
                                <button
                                    onClick={() => {
                                        setEditState((editState) => !editState);
                                        setCommentId(comment.id);
                                        {
                                            // console.log(
                                            //     comment.id,
                                            //     "comment id ON CLIICK"
                                            // );
                                            // currentId = sessionUser.HUCK.find(
                                            //     (test) => test.id === comment.id
                                            // );
                                            // console.log(sessionUser.HUCK, "home");
                                            // console.log(currentId.id, "HUCK ID");
                                        }
                                    }}
                                >
                                    test
                                </button>
                                <button onClick={deleteComment}>
                                    Delete Comment
                                </button>
                            </>
                        ) : null}
                        {/* {console.log(comment.id, "BRACKET comment id")} */}
                        {/* {console.log(sessionUser.HUCK.id, "new bracket")} */}
                        {/* {sessionUser.HUCK.map((test) =>
                        test.id === comment.id ? (currentId = test.id) : null
                    )} */}
                        {/* {console.log(currentId)} */}
                        {/* let test = sessionUser.HUCK.find((test) => test.id === comment.id) */}
                        {/* {console.log(currentId, "DOES THIS WORK ")} */}
                        {/* {sessionUser?.HUCK.find(findId).id} */}

                        {editState === true &&
                        userId == comment.userId &&
                        comment.id === findId(comment.id) ? (
                            <form
                                className="put-review"
                                onSubmit={handleSubmit}
                            >
                                <input
                                    className="review-body"
                                    type="textarea"
                                    required
                                    name="body"
                                    value={body}
                                    onChange={(e) => setBody(e.target.value)}
                                ></input>
                                <button
                                    className="review-button"
                                    type=" submit"
                                >
                                    Update Comment
                                </button>
                            </form>
                        ) : null}
                    </>
                </div>
            ))}
        </div>
    );
};

export default AllComments;
