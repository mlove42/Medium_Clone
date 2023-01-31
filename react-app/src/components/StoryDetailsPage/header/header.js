import React, { useState, useEffect } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getStoryById, removeStory } from "../../../store/story";
import Menu from "../../menu";
import smallLogo from "../../../assets/smallLogo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import "./header.css";
const StoryHeader = () => {
    const dispatch = useDispatch();
    const { storyId } = useParams();
    const history = useHistory();
    const [showMenu, setShowMenu] = useState(false);
    const author = useSelector((store) => {
        return store.story;
    });
    const sessionUser = useSelector((state) => state.session.user);

    // console.log(sessionUser, "SESSION USER");
    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;
        const closeMenu = () => {
            setShowMenu(false);
        };
        document.addEventListener("click", closeMenu);
        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

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
            </div>
            <div className="right">
                <div
                    className="write-pen"
                    onClick={() => {
                        history.push("/story");
                    }}
                >
                    <div>
                        <BsPencilSquare />
                    </div>
                    <div>Write</div>
                </div>
                {showMenu && <Menu />}
                <div className="menu-photo" onClick={openMenu}>
                    <div className="author-image-container">
                        <img
                            className="author-image"
                            src={sessionUser?.picture}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoryHeader;
