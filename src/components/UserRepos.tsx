import React, { useState, useContext, useEffect } from 'react';

import { getUserRepos } from '../actions/apiCalls';
import { AppContext } from '../appContext';
import { showError } from '../actions/actions';
import Repo from '../containers/Repo';

type Props = {
    reposUrl: string;
    instant: boolean;
};

const UserRepos = (props: Props): JSX.Element => {
    const [repos, setRepos] = useState<Repo[]>([]);
    const { dispatch } = useContext(AppContext);
    const maxReposToShow = 3;

    useEffect(() => {
        if (props.instant) {
            getRepos();
        }

        return () => {
            setRepos([]);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getRepos = async (): Promise<void> => {
        const data = await getUserRepos(props.reposUrl);
        if ('message' in data) {
            dispatch(showError(data.message));
        } else {
            setRepos(getBestUserRepos(data, maxReposToShow));
        }
    };

    const getBestUserRepos = (userRepos: Repo[], max: number): Repo[] => {
        const sortedRepos = [...userRepos].sort((prev, next) => {
            const prevStars = prev.stargazers_count;
            const nextStars = next.stargazers_count;

            return nextStars - prevStars;
        });
        return sortedRepos.slice(0, max);
    };

    return (
        <div className="user-info">
            {!props.instant ? (
                <button className="user-repos-btn" onClick={getRepos}>
                    Get user repos
                </button>
            ) : null}
            <ul className="repo-list">
                {repos.map(repo => (
                    <li key={repo.id} className="user-repo">
                        <Repo repo={repo} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserRepos;
