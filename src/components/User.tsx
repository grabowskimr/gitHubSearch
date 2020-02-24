import React from 'react';

import UserInfo from '../containers/UserInfo';

type Props = {
    user: User;
};

const User = (props: Props): JSX.Element => {
    return <UserInfo user={props.user} />;
};

export default User;
