import React, { useContext } from 'react';

import User from '../components/User';
import { AppContext } from '../appContext';
import UserPlaceholder from './UserPlaceholder';

const UserList = (): JSX.Element => {
    const { state } = useContext(AppContext);
    return (
        <ul className="user-list">
            {state.users.length ? (
                state.users.map((user: User) => (
                    <li key={user.login}>
                        <User user={user} />
                    </li>
                ))
            ) : (
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
            )}
        </ul>
    );
};

export default UserList;
