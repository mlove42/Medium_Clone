import "./authorInfo.css";
import React, { useState, useEffect } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
    getMyStories,
    getStories,
    getStoryById,
    removeStory,
} from "../../../store/story";
import { AiOutlineSearch } from "react-icons/ai";
import { MdMarkEmailUnread } from "react-icons/md";
const AuthorInfo = (store) => {
    const dispatch = useDispatch();
    const { storyId } = useParams();
    const history = useHistory();
    useEffect(() => {
        dispatch(getStoryById(storyId));
    }, [dispatch]);

    const user = useSelector((state) => state.session.user);

    const userId = user.id;

    const authorId = store?.store?.userId;

    const editStoryOnClick = (storyId) => {
        history.push(`/story/${storyId}/edit`);
    };

    const deleteStoryOnClick = (storyId) => {
        dispatch(removeStory(storyId));
        // dispatch(getStories());
        history.push("/");
    };
    // console.log(store, "AUTHOR INFO");
    return (
        <div className="author-info-wrapper">
            <div className="author-info-container">
                <div className="author-info-profile-image-container">
                    <img
                        className="info-right-image"
                        src={store?.store?.picture}
                    />
                </div>
                <div className="author-name-info">
                    {store?.store?.firstName} {store?.store?.lastName}
                </div>
                {/* <div className="info-author-following">
                    2 followers (not dynamic yet)
                </div> */}
                <div>
                    {
                        userId === authorId ? (
                            <div className="edit-delete-story-container">
                                <div className="edit-story">
                                    <button
                                        onClick={() =>
                                            editStoryOnClick(store?.store?.id)
                                        }
                                    >
                                        Edit Story
                                    </button>
                                </div>
                                <div className="delete-story">
                                    <button
                                        onClick={() =>
                                            deleteStoryOnClick(store?.store?.id)
                                        }
                                    >
                                        Delete Story
                                    </button>
                                </div>
                            </div>
                        ) : null
                        // <div className="info-author-action">
                        //     <button className="info-action-button">
                        //         Follow
                        //     </button>
                        //     <button className="info-action-button">
                        //         <MdMarkEmailUnread />
                        //     </button>
                        // </div>
                    }
                </div>
            </div>
            {/* <div className="author-bio-containers">
                Husband-to-be, avid-reader, coffee liker, advocate of of the
                Marvel Universe. Currently working on my App Academy capstone
                project. (not dynamic yet)
            </div>
            <div className="info-following">Following</div>
            <div className="info-folower-container">
                <div className="info-follower-image">Picture</div>
                <div className="info-following-name">Name</div>
            </div> */}
        </div>
    );
};

export default AuthorInfo;
