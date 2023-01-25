import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getStoryById } from "../../../store/story";
import {
    getSelectedStoryComments,
    deleteMyComment,
} from "../../../store/comment";

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

    // const findId = useSelector((state) => {
    //     return state.comment;
    // });

    // console.log(findId.id, "WHERE IS ID");
    const test = comments.map((item) => {
        return item;
    });

    const userComment = comments?.filter(
        (comment) => comment?.userId === sessionUser?.id
    );
    // console.log(userComment[0].id, "USER COMMENT");
    const deleteComment = () => {
        dispatch(deleteMyComment(userComment[0]?.id));
        dispatch(getStoryById(storyId));
        dispatch(getSelectedStoryComments(storyId));

        history.push(`/story/${storyId}`);
    };
    return (
        <div>
            <h1>Comments Section</h1>

            {comments?.map((comment) => (
                <>
                    <p>{comment.body} </p>
                </>
            ))}
            <button
                onClick={() => {
                    history.push(`/story/${storyId}/comments`);
                }}
            >
                Write A Comment
            </button>
            <button
                onClick={() => {
                    history.push(
                        `/story/${storyId}/comments/${userComment[0].id}`
                    );
                }}
            >
                Update Comment
            </button>
            <button onClick={deleteComment}>Delete Comment</button>
        </div>
    );
};

export default AllComments;
