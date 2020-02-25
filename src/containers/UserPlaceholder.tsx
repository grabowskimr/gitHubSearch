import React from 'react';

const UserPlaceholder = (): JSX.Element => (
    <div className="user-placeholder fade">
        <span className="placeholder-img" />
        <div className="placeholder-desc">
            <span className="placeholder-text" />
            <span className="placeholder-text small" />
        </div>
    </div>
);

export default UserPlaceholder;
