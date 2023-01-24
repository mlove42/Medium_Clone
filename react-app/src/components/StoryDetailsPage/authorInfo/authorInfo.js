import "./authorInfo.css";
import React, { useState, useEffect } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getStoryById, removeStory } from "../../../store/story";
import { AiOutlineSearch } from "react-icons/ai";
import { MdMarkEmailUnread } from "react-icons/md";
const AuthorInfo = (store) => {
    console.log(store?.store.author?.firstName, "author INFO");
    const dispatch = useDispatch();
    const { storyId } = useParams();

    useEffect(() => {
        dispatch(getStoryById(storyId));
    }, [dispatch]);

    return (
        <div className="author-info-wrapper">
            <div className="author-info-container">
                <div className="author-info-profile-image-container">
                    <img
                        className="info-right-image"
                        src={store?.store.author?.picture}
                    />
                </div>
                <div className="author-name-info">
                    {store?.store.author?.firstName}{" "}
                    {store?.store.author?.lastName}
                </div>
                <div className="info-author-following">
                    2 followers (not dynamic yet)
                </div>
                <div className="info-author-action">
                    <button className="info-action-button">Follow</button>
                    <button className="info-action-button">
                        <MdMarkEmailUnread />
                    </button>
                </div>
            </div>
            <div className="author-bio-containers">
                Husband-to-be, avid-reader, coffee liker, advocate of of the
                Marvel Universe. Currently working on my App Academy capstone
                project. (not dynamic yet)
            </div>
            <div className="info-following">Following</div>
            <div className="info-folower-container">
                <div className="info-follower-image">Picture</div>
                <div className="info-following-name">Name</div>
            </div>
        </div>
    );
};

export default AuthorInfo;
