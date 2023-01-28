import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getStoryById } from "../../../store/story";
import {
    getSelectedStoryComments,
    deleteMyComment,
} from "../../../store/comment";
import PostComment from "../../forms/CreateCommentForm";
const AllComments = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { storyId } = useParams();

    useEffect(() => {
        dispatch(getStoryById(storyId));
        dispatch(getSelectedStoryComments(storyId));
    }, [dispatch, storyId]);

    const sessionUser = useSelector((state) => state.session.user);

    const comments = useSelector((state) => {
        return Object.values(state.comment);
    });

    const state = useSelector((state) => {
        return state;
    });

    console.log(state.session.user?.id, "STATE!!!!!");
    console.log(state.comment.user?.id, "STATE!!!!!");
    const test = comments.map((item) => {
        return item;
    });

    const userComment = comments?.filter(
        (comment) => comment?.userId === sessionUser?.id
    );
    // console.log(userComment, "USER COMMENT!!!");
    // console.log(userComment[0].id, "USER COMMENT");
    const deleteComment = () => {
        dispatch(deleteMyComment(userComment[0]?.id));
        dispatch(getStoryById(storyId));
        dispatch(getSelectedStoryComments(storyId));

        history.push(`/story/${storyId}`);
    };
    // console.log(comments, "ESTT");
    // console.log(userComment, "USER COMMENT RESULT");
    return (
        <div>
            <h1>Comments Section</h1>
            <PostComment />
            {comments?.map((comment) => (
                <>
                    <p>{comment.body} </p>

                    {state.session.user?.id == comment.userId ? (
                        <>
                            <button
                                onClick={() => {
                                    history.push(
                                        `/story/${storyId}/comments/${userComment[0].id}`
                                    );
                                }}
                            >
                                Update Comment
                            </button>
                            <button onClick={deleteComment}>
                                Delete Comment
                            </button>
                        </>
                    ) : null}
                </>
            ))}
        </div>
    );
};

export default AllComments;
