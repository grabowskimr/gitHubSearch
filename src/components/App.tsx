import React from 'react';

import Search from './Search';
import ErrorMessage from './ErrorMessage';
import ContextProvider from './ContextProvider';

const App: React.FC = (): JSX.Element => {
    return (
        <div className="App">
            <ContextProvider>
                <Search />
                <ErrorMessage />
            </ContextProvider>
        </div>
    );
};

export default App;
