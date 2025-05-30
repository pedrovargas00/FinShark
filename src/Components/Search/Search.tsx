import Reach, { ChangeEvent, JSX, SyntheticEvent, useState } from "react";

interface Props {
    onSearchSubmit: (e: SyntheticEvent) => void;
    search: string | undefined;
    handleSearchChange:  (e: ChangeEvent<HTMLInputElement>) => void;
};

const Search: React.FC<Props> = ({search, onSearchSubmit, handleSearchChange}: Props): JSX.Element => {

    return (
        <section className="relative bg-gray-100">
            <div className="max-w-4xl mx-auto p-6 space-y-6">
                <form onSubmit={onSearchSubmit} 
                className="form relative flex flex-col w-full p-10 space-y-4 bg-darkBlue rounded-lg md:flex-row md:space-y-0 md:space-x-3">
                    <input id="search-input" placeholder="Search companies" value={search} onChange={e => handleSearchChange(e)} 
                    className="flex-1 p-3 border-2 rounded-lg placeholder-black focus:outline-none"/>
                </form>
            </div>
        </section>
    );
};

export default Search;