import React from 'react';

import Search from './Search';
import ErrorMessage from './ErrorMessage';
import ContextProvider from './ContextProvider';
import UserList from '../containers/UserList';

const App: React.FC = (): JSX.Element => {
    return (
        <div className="App">
            <ContextProvider>
                <Search />
                <UserList />
                <ErrorMessage />
            </ContextProvider>
        </div>
    );
};

export default App;
