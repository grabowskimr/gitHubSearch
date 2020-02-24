import React, { useContext } from 'react';

import User from '../components/User';
import { AppContext } from '../appContext';

const UserList = (): JSX.Element => {
    const { state } = useContext(AppContext);
    return (
        <ul className="user-list">
            {state.users.map((user: User) => (
                <li key={user.login}>
                    <User user={user} />
                </li>
            ))}
        </ul>
    );
};

export default UserList;
