import React from 'react';

type Props = {
    repo: Repo;
};

const Repo = (props: Props): JSX.Element => (
    <div className="repo">
        <span className="repo-name">{props.repo.name}</span>
        <span className="repo-stars">{props.repo.stargazers_count}</span>
    </div>
);

export default Repo;
