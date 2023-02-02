import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import { getStoryById } from "../store/story";

import { getSelectedStoryComments } from "../store/comment";
// import "./commentCards.css";

const CommentCards = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { storyId } = useParams();

    useEffect(() => {
        dispatch(getStoryById(storyId));
        dispatch(getSelectedStoryComments(storyId));
    }, [dispatch, storyId]);

    const sessionUser = useSelector((state) => state.session.user);

    const comments = useSelector((state) => {
        return Object.values(state.comment);
    });
    // console.log(comments);
    // const findId = useSelector((state) => {
    //     return state.comment;
    // });

    // console.log(findId.id, "WHERE IS ID");
    const test = comments.map((item) => {
        return item;
    });

    const userComment = comments?.filter(
        (comment) => comment?.userId === sessionUser?.id
    );
    // console.log(userComment[0].id, "USER COMMENT");
    // const deleteComment = () => {
    //     dispatch(deleteMyComment(userComment[0]?.id));
    //     dispatch(getStoryById(storyId));
    //     dispatch(getSelectedStoryComments(storyId));

    //     history.push(`/story/${storyId}`);
    // };

    return (
        <>
            <div className="header-review">
                <h1>Review Section</h1>
            </div>
            <section className="reviews">
                <div className="reviews-box-container">
                    {comments?.map((comment) => (
                        <>
                            <div className="review-box">
                                <div className="box-top">
                                    <div className="profile">
                                        <div className="name-user">
                                            <strong>
                                                Mike Love
                                                {/* {review.firstName}{" "}
                                                {review.lastName} */}
                                            </strong>
                                        </div>
                                    </div>

                                    <div className="review-ratings">
                                        old rating
                                        {/* <i>
                                            <Rating value={review?.rating} />{" "}
                                        </i> */}
                                    </div>
                                </div>
                                <div className="comment-section">
                                    <div className="client-comment">
                                        <p>{comment?.body}</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>{" "}
            </section>
        </>
    );
};

export default CommentCards;
