import "./mainArticle.css";
import React, { useState, useEffect } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getStoryById, removeStory } from "../../../store/story";
import { AiFillPlayCircle } from "react-icons/ai";
import photo from "../../../assets/logo.png";
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { HiOutlineLink } from "react-icons/hi";
import { BiBookmarks } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";
import AllComments from "../storyComments/allComments";
import SideBar from "../sideBar/sideBar";
const MainArticle = (store) => {
    const dispatch = useDispatch();
    const { storyId } = useParams();

    useEffect(() => {
        dispatch(getStoryById(storyId));
    }, [dispatch]);

    return (
        <>
            <div className="wrapper-article">
                <div className="content-article">
                    <div className="header-container-article">
                        <div className="author-container-article">
                            <div className="author-image-container-article">
                                <img
                                    className="author-image-article"
                                    src={store?.store?.picture}
                                />
                            </div>
                            <div className="column-article">
                                {store?.store?.firstName}{" "}
                                {store?.store?.lastName}
                                <div className="post-details-article">
                                    <span>
                                        {/* January 23rd •{" "} */}
                                        {store?.store?.estimatedRead} min read{" "}
                                    </span>
                                    {/* <span className="listen-button-article">
                                        <AiFillPlayCircle /> Listen
                                    </span> */}
                                </div>
                            </div>
                        </div>
                        {/* <div className="socials-article">
                            <IoLogoTwitter />
                            <FaFacebook />
                            <GrLinkedin />
                            <HiOutlineLink />
                            <div className="space-article" />
                            <BiBookmarks />
                            <FiMoreHorizontal />
                        </div> */}
                    </div>
                    <div className="main-container-article">
                        <div className="banner-container-article">
                            <img
                                className="image-main-article"
                                src={store?.store?.storyImage}
                            />
                        </div>
                    </div>
                    <h1 className="title-main">{store?.store?.title}</h1>
                    <h4 className="subtitle-main">
                        <div>{store?.store?.brief}</div>
                    </h4>
                    <div className="body-article-main">
                        {store?.store?.body}
                    </div>
                    {/* <button onClick={handleOpenSideBar}>Open SideBar</button> */}
                    <div>
                        <SideBar />
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainArticle;
