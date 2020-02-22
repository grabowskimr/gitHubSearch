import React, { ChangeEvent } from 'react';

type Props = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value: string;
};

const SearchInput = (props: Props): JSX.Element => (
    <div className="search-input">
        <input type="text" placeholder="Search" value={props.value} onChange={props.onChange} />
    </div>
);

export default SearchInput;
