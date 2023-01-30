import React, { useState, useEffect } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import { getStoryById } from "../../../store/story";

import {
    getSelectedStoryComments,
    deleteMyComment,
    editMyComment,
} from "../../../store/comment";
import "./commentCards.css";
import { IoCloseSharp } from "react-icons";
import "./sidebar.css";
import { IoClose } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import EditComment from "../../forms/EditCommentForm";
import PostComment from "../../forms/CreateCommentForm";

const SideBar = () => {
    const dispatch = useDispatch();
    const { storyId } = useParams();

    const sessionUser = useSelector((state) => state.session.user);
    console.log(sessionUser, "user info");
    const comments = useSelector((state) => {
        return Object.values(state.comment);
    });

    const userComment = comments?.filter(
        (comment) => comment?.userId === sessionUser?.id
    );

    const [open, setOpen] = useState(false);

    const handleOpenSideBar = () => {
        setOpen(true);
    };

    const handleCloseSideBar = () => {
        setOpen(false);
    };
    //////////////////////////////////////////////////////////////////
    const [editState, setEditState] = useState(false);
    let userId = sessionUser && sessionUser.id;
    const [commentId, setCommentId] = useState("");
    const comment = useSelector((state) => state?.comment[commentId]);
    const [body, setBody] = useState("");
    const [actionToggled, setActionToggled] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const editComment = {
            body: body,
        };

        dispatch(editMyComment(commentId, editComment));
        setEditState((editState) => !editState);
    };

    function findId(id) {
        for (let i = 0; i < userComment.length; i++) {
            let res = userComment[i];

            if (res.id === id) {
            }
            return id;
        }
    }

    useEffect(() => {
        dispatch(getStoryById(storyId));
        dispatch(getSelectedStoryComments(storyId));
    }, [dispatch, actionToggled]);

    return (
        <>
            <div style={{ display: "flex" }}>
                {open && (
                    <div className="sidebar">
                        <div className="sidebar-header">
                            <h1>Responses ({comments.length}) </h1>
                            <IoClose
                                onClick={handleCloseSideBar}
                                style={{ cursor: "pointer" }}
                            />
                        </div>
                        <PostComment />
                        <div className="reviews-box-container">
                            {comments?.map((comment) => (
                                <>
                                    <div
                                        key={comment.id}
                                        className="review-box"
                                    >
                                        <div className="box-top">
                                            <div className="profile">
                                                <div className="profile-img">
                                                    <img
                                                        src={comment.picture}
                                                    />
                                                </div>
                                                <div className="name-user">
                                                    <strong>
                                                        {comment.firstName}{" "}
                                                        {comment.lastName}
                                                    </strong>
                                                </div>
                                            </div>

                                            <div className="review-ratings">
                                                <BsThreeDots />
                                            </div>
                                        </div>
                                        <div className="comment-section">
                                            <div className="client-comment">
                                                {commentId === comment.id ? (
                                                    editState === true &&
                                                    userId == comment.userId &&
                                                    comment.id ===
                                                        findId(commentId) ? (
                                                        <form
                                                            className="put-comment"
                                                            onSubmit={
                                                                handleSubmit
                                                            }
                                                        >
                                                            <input
                                                                className="comment-body"
                                                                type="textarea"
                                                                required
                                                                name="body"
                                                                // value={body}
                                                                autoFocus
                                                                onChange={(e) =>
                                                                    setBody(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                            ></input>
                                                            <div className="button-containers">
                                                                {" "}
                                                                <div className="comment-update">
                                                                    <button type=" submit">
                                                                        Save
                                                                    </button>
                                                                </div>
                                                                <div className="delete-comment">
                                                                    <button
                                                                        onClick={() => {
                                                                            setEditState(
                                                                                (
                                                                                    editState
                                                                                ) =>
                                                                                    !editState
                                                                            );
                                                                        }}
                                                                    >
                                                                        Cancel
                                                                    </button>
                                                                </div>
                                                            </div>{" "}
                                                        </form>
                                                    ) : (
                                                        <p>{comment?.body}</p>
                                                    )
                                                ) : (
                                                    <p>{comment?.body}</p>
                                                )}
                                            </div>
                                        </div>
                                        {userId == comment.userId &&
                                        !editState ? (
                                            <div className="button-containers">
                                                <div className="comment-update">
                                                    <button
                                                        onClick={() => {
                                                            setEditState(
                                                                (editState) =>
                                                                    !editState
                                                            );
                                                            setCommentId(
                                                                comment.id
                                                            );
                                                        }}
                                                    >
                                                        Edit
                                                    </button>
                                                </div>
                                                <div className="delete-comment">
                                                    <button
                                                        onClick={() => {
                                                            dispatch(
                                                                deleteMyComment(
                                                                    comment.id
                                                                )
                                                            );
                                                            console.log(
                                                                comment.id,
                                                                "DELETE COMMENT FUNCT"
                                                            );
                                                            dispatch(
                                                                getStoryById(
                                                                    storyId
                                                                )
                                                            );
                                                            dispatch(
                                                                getSelectedStoryComments(
                                                                    storyId
                                                                )
                                                            );
                                                            setActionToggled(
                                                                (
                                                                    actionToggled
                                                                ) =>
                                                                    !actionToggled
                                                            );
                                                        }}
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        ) : null}
                                    </div>
                                </>
                            ))}
                        </div>{" "}
                    </div>
                )}
            </div>

            <div className="icon-comment" onClick={handleOpenSideBar}>
                <FaRegComment />
            </div>
        </>
    );
};

export default SideBar;
