import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Search from "../../Components/Search/Search";
import ListPortfolio from "../../Components/Portfolio/ListPortfolio/ListPortfolio";
import CardList from "../../Components/CardList/CardList";
import { CompanySearch } from "../../company";
import { searchCompanies } from "../../api";

interface Props {};

const SearchPage = ({}: Props) => {

    const [search, setSearch] = useState<string>("");
    const [portfolioValues, setPortflioValues] = useState<string[]>([]);
    const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
    const [serverError, setServerError] = useState<string>("");

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        console.log(e);
    };

    const onSearchSubmit = async (e: SyntheticEvent) => {

        e.preventDefault();
        const res = await searchCompanies(search);

        if (typeof res == "string")
            setServerError(res);
        else if (Array.isArray(res.data))
            setSearchResult(res.data);

        console.log(searchResult);
    };


    const onPortfolioCreate = (e: any) => {
        e.preventDefault();

        const portfolioExists = portfolioValues.find(v => v === e.target[0].value);

        if (portfolioExists)
            return;

        const updatePortfolio = [...portfolioValues, e.target[0].value]

        setPortflioValues(updatePortfolio);
    };

    const onPortfolioDelete = (e: any) => {
        e.preventDefault();

        const removed = portfolioValues.filter(v => v !== e.target[0].value);

        setPortflioValues(removed);
    };

    return (
        <>
            <Search onSearchSubmit={onSearchSubmit} search={search} handleSearchChange={handleSearchChange} />
            {serverError && <h1>{serverError}</h1>}
            <ListPortfolio portfolioValues={portfolioValues} onPortfolioDelete={onPortfolioDelete} />
            <CardList searchResults={searchResult} onPortfolioCreate={onPortfolioCreate} />
        </>
    );
};

export default SearchPage;