import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import { addNewComment } from "../../../store/comment";
import "./createComment.css";

function PostComment() {
    const dispatch = useDispatch();
    const user = useSelector((store) => {
        return store.session.user;
    });

    console.log(user.firstName, "FIND USER");
    const [body, setBody] = useState("");

    const { storyId } = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            body: body,
        };
        dispatch(addNewComment(storyId, payload));
        setBody("");
    };

    return (
        <>
            <div style={{ display: "flex" }}>
                <div className="create-comment-box-container">
                    <form className="make-new-comment" onSubmit={handleSubmit}>
                        <div className="create-comment-box">
                            <div className="box-top">
                                <div className="profile">
                                    <div className="profile-img">
                                        <img src={user.picture} />
                                    </div>
                                    <div className="name-user">
                                        <strong>
                                            {user.firstName} {user.lastName}
                                        </strong>
                                    </div>
                                </div>

                                <div className="review-ratings">
                                    <BsThreeDots />
                                </div>
                            </div>
                            <div className="comment-section">
                                <div className="client-comment">
                                    <input
                                        className="review-body"
                                        type="textarea"
                                        required
                                        placeholder="What are you thoughts"
                                        name="body"
                                        rows={22}
                                        value={body}
                                        onChange={(e) =>
                                            setBody(e.target.value)
                                        }
                                    ></input>
                                </div>
                            </div>
                            <div>
                                <button
                                    className="respond-button"
                                    type=" submit"
                                >
                                    Respond
                                </button>
                            </div>
                        </div>
                    </form>
                </div>{" "}
            </div>
        </>
    );
}

export default PostComment;
