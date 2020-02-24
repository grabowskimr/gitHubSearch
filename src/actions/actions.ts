import ACTIONS from '../constants/actions';

export const showError = (errorMessage: string): Action => {
    return {
        type: ACTIONS.SHOW_ERROR,
        payload: {
            error: errorMessage,
        },
    };
};

export const hideError = (): Action => {
    return {
        type: ACTIONS.HIDE_ERROR,
        payload: {},
    };
};

export const setUsers = (users: User[]): Action => {
    return {
        type: ACTIONS.SET_USERS,
        payload: {
            users,
        },
    };
};

export const clearUsers = (): Action => {
    return {
        type: ACTIONS.CLEAR_USERS,
        payload: {},
    };
};
