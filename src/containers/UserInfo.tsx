import React from 'react';

type Props = {
    user: User;
};

const UserInfo: React.FC<Props> = (props): JSX.Element => <div className="user-info">{props.user.login}</div>;

export default UserInfo;
