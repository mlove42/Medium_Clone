//! action types
const ADD_COMMENT = "story/ADD_COMMENT";
const GET_STORY_COMMENTS = "story/GET_STORY_COMMENTS";
const DELETE_COMMENT = "story/DELETE_COMMENT";
const EDIT_COMMENT = "story/EDIT_COMMENT";
// working now
//! action creators
export const addComment = (comment) => {
    return {
        type: ADD_COMMENT,
        comment,
    };
};

export const getStoryComments = (storyComments) => {
    return {
        type: GET_STORY_COMMENTS,
        storyComments,
    };
};

export const deleteComment = (comment) => {
    return {
        type: DELETE_COMMENT,
        comment,
    };
};

export const editComment = (comment) => {
    return {
        type: EDIT_COMMENT,
        comment,
    };
};

//! thunk creators
//  Create a comment for a Story based on the Story's id
export const addNewComment = (storyId, commentData) => async (dispatch) => {
    console.log(storyId, "<=== story ID");
    console.log(commentData, "<==== comment DATA");
    const response = await fetch(`/api/story/${storyId}/comments`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(commentData),
    });
    if (response.ok) {
        const comment = await response.json();
        dispatch(addComment(comment));
    }
};

// Get all comments for the Story by the Story's id
export const getSelectedStoryComments = (storyId) => async (dispatch) => {
    const response = await fetch(`/api/story/${storyId}/comments`);
    const storyComments = await response.json();
    dispatch(getStoryComments(storyComments));
};
// Delete a Comment
export const deleteMyComment = (commentId) => async (dispatch) => {
    const response = await fetch(`/api/comments/${commentId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(deleteComment(data));
    }
};

// Edit a Comment
export const editMyComment =
    (commentId, editedCommentData) => async (dispatch) => {
        console.log(commentId, "<==== comment ID");
        console.log(editedCommentData, "<=== IN THE STORE");
        const response = await fetch(`/api/comments/${commentId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(editedCommentData),
        });
        if (response.ok) {
            const data = await response.json();
            dispatch(editComment(data));
        }
    };

//! story Reducer
const commentsReducer = (state = {}, action) => {
    const newState = { ...state };
    switch (action.type) {
        case ADD_COMMENT:
            newState[action.comment.id] = action.comment;
            return newState;
        case GET_STORY_COMMENTS:
            return action.storyComments;
        case DELETE_COMMENT:
            newState[action.comment.id] = action.comment;
            return newState;
        case EDIT_COMMENT:
            newState[action.comment.id] = action.comment;
            return newState;
        default:
            return state;
    }
};

export default commentsReducer;
