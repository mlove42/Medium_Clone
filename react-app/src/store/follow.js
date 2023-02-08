const UNFOLLOW = "follow/UNFOLLOW";
const FOLLOW = "follow/FOLLOW";
const GET_USER_BY_ID = "user/USER_USER";
const LOAD_USERS = "user/LOAD_USERS";
export const loadUserById = (user) => ({
    type: GET_USER_BY_ID,
    user,
});

const loadUsers = (users) => ({
    type: LOAD_USERS,
    users,
});
export const followActionCreator = (user) => {
    return {
        type: FOLLOW,
        user,
    };
};

export const unfollowActionCreator = (userId) => {
    return {
        type: UNFOLLOW,
        userId,
    };
};

export const getUserId = (storyId) => async (dispatch) => {
    const response = await fetch(`/api/users/author/${storyId}`);
    if (response.ok) {
        const data = await response.json();

        dispatch(loadUsers(data));
    }
};

export const follow = (payload) => async (dispatch) => {
    const res = await fetch("/api/follows", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: payload }),
    });
    const data = await res.json();

    if (res.ok) {
        await dispatch(followActionCreator(data.user));
    } else {
        throw res;
    }
    return data;
};

export const unfollow = (payload) => async (dispatch) => {
    const res = await fetch("/api/follows", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: payload }),
    });
    const data = await res.json();

    if (res.ok) {
        dispatch(unfollowActionCreator(data.userId));
    }
    return data;
};

export default function followReducer(state = {}, action) {
    const newState = { ...state };
    switch (action.type) {
        case LOAD_USERS:
            return { ...newState, ...action.users };
        case GET_USER_BY_ID:
            return action.user;
        case FOLLOW:
            newState[action.user.id] = action.user;
            return newState;
        case UNFOLLOW:
            const index = newState?.user?.following.findIndex(
                (user) => user.id === action.userId
            );
            newState?.user?.following.splice(index, 1);
            return newState;
        default:
            return state;
    }
}
