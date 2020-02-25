import React from 'react';

import Search from './Search';
import ErrorMessage from './ErrorMessage';
import ContextProvider from './ContextProvider';
import UserList from '../containers/UserList';
import AppTitle from '../containers/AppTitle';

const App: React.FC = (): JSX.Element => {
    return (
        <div className="App">
            <ContextProvider>
                <AppTitle />
                <Search />
                <UserList />
                <ErrorMessage />
            </ContextProvider>
        </div>
    );
};

export default App;
