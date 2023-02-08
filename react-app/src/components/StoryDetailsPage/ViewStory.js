import React, { useState, useEffect } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getStoryById, removeStory } from "../../store/story";
import StoryHeader from "./header/header";
import AuthorInfo from "./authorInfo/authorInfo";
import MainArticle from "./mainArticle/mainArticle";

import "./viewStory.css";
import AllComments from "./storyComments/allComments";
import { getUserId, getUserById } from "../../store/follow";
const ViewStory = () => {
    const dispatch = useDispatch();
    const { storyId } = useParams();
    const history = useHistory();
    const data = useSelector((store) => {
        return store.story[storyId];
    });

    useEffect(() => {
        // console.log(data, "DATA");
        if (!data) dispatch(getStoryById(storyId));
        if (!data) dispatch(getUserId(storyId));
    }, [dispatch]);

    return (
        <>
            <StoryHeader />
            <div className="view-page-content">
                {/* <AllComments /> */}
                <MainArticle store={data} />

                <AuthorInfo store={data} />
            </div>
        </>
    );
};

export default ViewStory;
