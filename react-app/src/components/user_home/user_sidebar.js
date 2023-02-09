import React, { useState, useEffect } from "react";

import { useHistory, useParams, Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { getStoryById, removeStory } from "../../../store/story";
import { AiOutlineSearch } from "react-icons/ai";
import { MdMarkEmailUnread } from "react-icons/md";
// import { follow, getUserId, unfollow } from "../../../store/follow";
// import { loadUserById } from "../../../store/follow";
// import { getStories } from "../../../store/story";
const UserInfo = (store) => {
    const dispatch = useDispatch();
    const { storyId } = useParams();

    const history = useHistory();
    const sessionUser = useSelector((state) => state?.session?.user);
    console.log(sessionUser, "THIS IS STATE");

    return (
        <div className="author-info-wrapper">
            <div className="author-info-container">
                <div className="author-info-profile-image-container">
                    <img
                        className="info-right-image"
                        src={sessionUser?.picture}
                    />
                </div>
                <div className="author-name-info">
                    {sessionUser?.firstName} {sessionUser?.lastName}
                </div>
                <div className="info-author-following">
                    <div>Followers: {sessionUser?.followers?.length} </div>
                    <div>Following: {sessionUser?.following?.length}</div>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;
