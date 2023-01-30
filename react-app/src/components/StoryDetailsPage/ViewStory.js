import React, { useState, useEffect } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getStoryById, removeStory } from "../../store/story";
import StoryHeader from "./header/header";
import AuthorInfo from "./authorInfo/authorInfo";
import MainArticle from "./mainArticle/mainArticle";

import "./viewStory.css";
import AllComments from "./storyComments/allComments";
const ViewStory = () => {
    const dispatch = useDispatch();
    const { storyId } = useParams();
    const history = useHistory();
    const data = useSelector((store) => {
        return store.story;
    });
    useEffect(() => {
        dispatch(getStoryById(storyId));
    }, [dispatch]);

    // console.log(store, "VIEW STORY ");
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
