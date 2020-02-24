import React from 'react';
import ACTIONS from './constants/actions';

export const initialState: State = {
    error: '',
    users: [],
};

export const reducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case ACTIONS.SHOW_ERROR:
            return {
                ...state,
                error: action.payload.error ? action.payload.error : '',
            };
        case ACTIONS.HIDE_ERROR:
            return {
                ...state,
                error: '',
            };
        case ACTIONS.SET_USERS:
            return {
                ...state,
                users: action.payload.users && action.payload.users.length ? action.payload.users : [],
            };
        case ACTIONS.CLEAR_USERS:
            return {
                ...state,
                users: [],
            };
        default:
            throw new Error();
    }
};

export const AppContext = React.createContext<{
    state: typeof initialState;
    dispatch: (action: Action) => void;
}>({
    state: initialState,
    dispatch: () => {},
});

export type TContext = {
    contextState: typeof initialState;
    dispatch: (action: Action) => void;
};

export const AppProvider = AppContext.Provider;
export const AppConsumer = AppContext.Consumer;

export default AppContext;
