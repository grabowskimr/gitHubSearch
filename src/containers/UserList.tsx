import React, { useContext } from 'react';

import User from '../components/User';
import { AppContext } from '../appContext';
import UserPlaceholder from './UserPlaceholder';

const UserList = (): JSX.Element => {
    const { state } = useContext(AppContext);
    return (
        <ul className="user-list">
            {state.users.length && !state.searching ? (
                state.users.map((user: User) => (
                    <li key={user.login}>
                        <User user={user} />
                    </li>
                ))
            ) : state.searching ? (
                <>
                    <li>
                        <UserPlaceholder />
                    </li>
                    <li>
                        <UserPlaceholder />
                    </li>
                    <li>
                        <UserPlaceholder />
                    </li>
                    <li>
                        <UserPlaceholder />
                    </li>
                </>
            ) : (
                <div className="search-info">
                    <h2 className="search-message">Search for users</h2>
                </div>
            )}
        </ul>
    );
};

export default UserList;
