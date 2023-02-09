import "./authorInfo.css";
import React, { useState, useEffect } from "react";

import { useHistory, useParams, Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getStoryById, removeStory } from "../../../store/story";
import { AiOutlineSearch } from "react-icons/ai";
import { MdMarkEmailUnread } from "react-icons/md";
import { follow, getUserId, unfollow } from "../../../store/follow";
import { loadUserById } from "../../../store/follow";
import { getStories } from "../../../store/story";
const AuthorInfo = (store) => {
    const dispatch = useDispatch();
    const { storyId } = useParams();

    const history = useHistory();
    const state = useSelector((state) => state);
    const currentUser = useSelector((state) => state.session.user);

    const author = state.author;
    const authorId = state?.author?.id;
    const currentStory = store.store;

    const [currentUserFollowing, setCurrentUserFollowing] = useState(
        currentUser.following.map((user) => user.id)
    );

    const editStoryOnClick = (storyId) => {
        history.push(`/story/${storyId}/edit`);
    };

    const deleteStoryOnClick = (storyId) => {
        dispatch(removeStory(storyId));
        history.push("/");
    };

    const followButton = async (e) => {
        e.preventDefault();
        dispatch(follow(authorId)).then(() => dispatch(getUserId(storyId)));

        setCurrentUserFollowing((prev) => [...prev, authorId]);
    };

    const unfollowButton = async (e) => {
        dispatch(unfollow(authorId)).then(() => dispatch(getUserId(storyId)));
        setCurrentUserFollowing((prev) =>
            prev.filter((followId) => followId === currentUser.id)
        );
    };

    return (
        <div className="author-info-wrapper">
            <div className="author-info-container">
                <div className="author-info-profile-image-container">
                    <img className="info-right-image" src={author?.picture} />
                </div>
                <div className="author-name-info">
                    {author?.firstName} {author?.lastName}
                </div>
                <div className="info-author-following">
                    <div className="followers">
                        Followers: {author?.followers?.length}{" "}
                    </div>
                    <div className="following">
                        Following: {author?.following?.length}
                    </div>
                </div>
                <div>
                    {currentUser.id === authorId ? (
                        <div className="edit-delete-story-container">
                            <div className="edit-story">
                                <button
                                    onClick={() =>
                                        editStoryOnClick(currentStory.id)
                                    }
                                >
                                    Edit Story
                                </button>
                            </div>
                            <div className="delete-story">
                                <button
                                    onClick={() =>
                                        deleteStoryOnClick(currentStory.id)
                                    }
                                >
                                    Delete Story
                                </button>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
            {!currentUserFollowing.includes(authorId) &&
                !(authorId == currentUser.id) && (
                    <button
                        className="info-action-button"
                        onClick={followButton}
                    >
                        Follow
                    </button>
                )}
            {currentUserFollowing.includes(authorId) &&
                !(authorId == currentUser.id) && (
                    <button
                        className="info-action-button-unfollow"
                        onClick={unfollowButton}
                    >
                        Unfollow
                    </button>
                )}
        </div>
    );
};

export default AuthorInfo;
