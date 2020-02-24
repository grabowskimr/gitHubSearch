import React, { useReducer } from 'react';

import { AppProvider, initialState, reducer } from '../appContext';

const ContextProvider: React.FC = (props): JSX.Element => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };
    return <AppProvider value={value}>{props.children}</AppProvider>;
};

export default ContextProvider;
