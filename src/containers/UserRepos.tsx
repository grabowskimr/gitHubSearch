import React from 'react';

type Props = {
    user: User;
};

const UserRepos: React.FC<Props> = (props): JSX.Element => <div className="user-info">{props.user.login}</div>;

export default UserRepos;
