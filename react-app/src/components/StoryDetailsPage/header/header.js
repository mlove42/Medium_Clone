import React, { useState, useEffect } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getStoryById, removeStory } from "../../../store/story";
import smallLogo from "../../../assets/smallLogo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import "./header.css";
const StoryHeader = () => {
    const dispatch = useDispatch();
    const { storyId } = useParams();
    const history = useHistory();

    const author = useSelector((store) => {
        return store.story;
    });

    useEffect(() => {
        dispatch(getStoryById(storyId));
    }, [dispatch]);
    // console.log(author.author, "header");
    return (
        <div className="smallLogo-wrapper">
            <div className="left">
                <Link to="/">
                    <div className="smallLogo-container">
                        <img src={smallLogo} />
                    </div>
                </Link>
                {/* <div className="header-search-container">
                    <AiOutlineSearch />
                    <input
                        className="info-searchInput"
                        placeholder="Search Medium"
                        type="text"
                    />
                </div> */}
            </div>
            <div className="right">
                <NavLink to="/story">
                    <BsPencilSquare /> Write
                </NavLink>
                <div>Profile drop down</div>
            </div>
        </div>
    );
};

export default StoryHeader;
