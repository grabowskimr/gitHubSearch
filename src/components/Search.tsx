import React, { useState, useEffect, ChangeEvent, useContext } from 'react';

import SearchInput from '../containers/SearchInput';
import { searchForUser } from '../actions/apiCalls';
import { AppContext } from '../appContext';
import { showError, setUsers, clearUsers, setSearching, unsetSearching } from '../actions/actions';

const Search: React.FC = (): JSX.Element => {
    const [searchInput, setSearchInput] = useState<string>('');
    const [searchTimeout, setSearchTimeout] = useState();
    const minValueLength = 3;
    const { dispatch } = useContext(AppContext);

    const handeSearch = (e: ChangeEvent<HTMLInputElement>): void => {
        setSearchInput(e.target.value);
        dispatch(clearUsers());
        dispatch(setSearching());
        clearTimeout(searchTimeout);
    };

    useEffect(() => {
        const fetchData = async () => {
            const data = await searchForUser(searchInput);
            if ('message' in data) {
                dispatch(showError(data.message));
            } else {
                dispatch(setUsers(data));
                dispatch(unsetSearching());
            }
        };

        if (searchInput.length < minValueLength) {
            if (searchInput.length === 0) {
                dispatch(unsetSearching());
            }
            return;
        } else {
            setSearchTimeout(
                setTimeout(() => {
                    fetchData();
                }, 1000)
            );
        }

        return () => {
            clearTimeout(searchTimeout);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchInput]);

    return <SearchInput value={searchInput} onChange={handeSearch} />;
};

export default Search;
