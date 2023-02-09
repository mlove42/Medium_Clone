const LOAD_LIKES = "likes/LOAD";
const ADD_LIKE = "like/ADD";
const DELETE_LIKE = "like/DELETE";

const load = (likes) => {
    return { type: LOAD_LIKES, likes };
};

const add = (like) => {
    return {
        type: ADD_LIKE,
        like,
    };
};

const deleteLike = (storyId) => {
    return {
        type: DELETE_LIKE,
        storyId,
    };
};

export const loadLikesByStoryId = (storyId) => async (dispatch) => {
    const response = await fetch(`/api/story/${storyId}/likes`);

    if (response.ok) {
        const data = await response.json();
        dispatch(load(data));
    }
};

export const likeAStory = (storyId) => async (dispatch) => {
    // console.log(storyId, "story id thunk ");

    const response = await fetch(`/api/story/${storyId}/likes`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (response.ok) {
        const data = await response.json();

        if (data.status === "deleted") {
            dispatch(deleteLike(data.id));
        } else {
            // console.log(data, "THIS IS THE THUNK DATA");
            dispatch(add(data));
        }

        return data;
    }
};

const initialState = {};

const likesReducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case LOAD_LIKES:
            return action.likes;
        case ADD_LIKE:
            newState[action.like.id] = action.like;
            return newState;

        case DELETE_LIKE:
            return Object.assign({}, newState, action.storyId);

        default:
            return newState;
    }
};

export default likesReducer;
