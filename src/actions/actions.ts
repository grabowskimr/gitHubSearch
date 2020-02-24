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
