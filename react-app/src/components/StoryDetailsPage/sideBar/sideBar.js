import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import { getStoryById } from "../../../store/story";

import { getSelectedStoryComments } from "../../../store/comment";
import "./commentCards.css";
import { IoCloseSharp } from "react-icons";
import "./sidebar.css";
import { IoClose } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";

import PostComment from "../../forms/CreateCommentForm";

const SideBar = () => {
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

    const [open, setOpen] = useState(true);

    const handleOpenSideBar = () => {
        setOpen(true);
    };

    const handleCloseSideBar = () => {
        setOpen(false);
    };

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
                                    <div className="review-box">
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
                                                <p>{comment?.body}</p>
                                            </div>
                                        </div>
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
