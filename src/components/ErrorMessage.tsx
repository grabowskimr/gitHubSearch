import React, { useContext, useEffect } from 'react';

import { AppContext } from '../appContext';
import { hideError } from '../actions/actions';

const ErrorMessage = (): JSX.Element => {
    const { state, dispatch } = useContext(AppContext);

    useEffect(() => {
        const timeout = setTimeout(() => {
            dispatch(hideError());
        }, 5000);

        return () => clearTimeout(timeout);
    }, [dispatch, state.error]);

    return <div className={`error-message ${state.error.length ? 'show' : ''}`}>{state.error}</div>;
};

export default ErrorMessage;
