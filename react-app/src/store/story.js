const LOAD_STORIES = "story/LOAD_STORIES";
const GET_MY_STORY = "story/GET_MY_STORY";
const ADD_STORY = "story/ADD_BUSINESS";
const UPDATE_STORY = "story/UPDATE_STORY";
const DELETE_STORY = "story/DELETE_STORY";
const GET_STORY_BY_ID = "story/GET_STORY_BY_ID";

const loadStories = (stories) => ({
    type: LOAD_STORIES,
    stories,
});

const loadStoriesById = (story) => ({
    type: GET_STORY_BY_ID,
    story,
});

const loadMyStories = (story) => ({
    type: GET_MY_STORY,
    story,
});

const addStory = (story) => ({
    type: ADD_STORY,
    story,
});

const updateStory = (story) => ({
    type: UPDATE_STORY,
    story,
});

const deleteStory = (storyId) => ({
    type: DELETE_STORY,
    storyId,
});

export const getStories = () => async (dispatch) => {
    const response = await fetch("/api/story");
    if (response.ok) {
        const data = await response.json();
        dispatch(loadStories(data));
    }
};

export const getStoryById = (storyId) => async (dispatch) => {
    const response = await fetch(`/api/story/${storyId}`);
    if (response.ok) {
        const data = await response.json();
        dispatch(loadStoriesById(data));
    }
};

export const getMyStories = () => async (dispatch) => {
    const response = await fetch(`/api/story/current`);
    if (response.ok) {
        const data = await response.json();
        dispatch(loadMyStories(data));
    }
};

export const createStory = (storyData) => async (dispatch) => {
    const response = await fetch("/api/story", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(storyData),
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(addStory(data));
    }
};

export const editStory = (storyId, storyData) => async (dispatch) => {
    const response = await fetch(`/api/story/${storyData.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(storyData),
    });
    if (response.ok) {
        const data = await response.json();
        dispatch(updateStory(data));
    }
};

export const removeStory = (storyId) => async (dispatch) => {
    const response = await fetch(`/api/story/${storyId}`, {
        method: "DELETE",
    });
    if (response.ok) {
        dispatch(deleteStory(storyId));
    }
};

export default function storyReducer(state = {}, action) {
    const newState = { ...state };
    switch (action.type) {
        case LOAD_STORIES:
            return action.stories;
        case GET_STORY_BY_ID:
            return action.story;
        case GET_MY_STORY:
            return action.stories;
        case ADD_STORY:
            newState[action.story.id] = action.story;
            return newState;
        case UPDATE_STORY:
            newState[action.story.id] = action.story;
            return newState;
        case DELETE_STORY:
            delete newState[action.storyId];
            return newState;
        default:
            return state;
    }
}
