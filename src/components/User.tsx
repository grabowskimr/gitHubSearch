import React from 'react';

import UserRepos from '../containers/UserRepos';

type Props = {
    user: User;
};

const User = (props: Props): JSX.Element => {
    console.log(props.user);
    return (
        <div className="user">
            <div className="user-img">
                <img src={props.user.avatar_url} alt="user avatar" />
            </div>
            <div className="user-details">
                <h3 className="user-login">{props.user.login}</h3>
                <h4 className="user-id">{props.user.id}</h4>
                <UserRepos user={props.user} />
            </div>
        </div>
    );
};

export default User;
