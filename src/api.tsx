import axios from "axios";
import { CompanyBalanceSheet, CompanyCashFlow, CompanyCompData, CompanyHistoricalDividend, CompanyIncomeStatement, CompanyKeyMetrics, CompanyProfile, CompanySearch, CompanyTenK } from "./company";

interface SearchResponse {
    data: CompanySearch[];
};

export const searchCompanies = async (query: string) => {

    try {
        return await axios.get<SearchResponse>(
            `https://financialmodelingprep.com/stable/search-name?query=${query}&apikey=${process.env.REACT_APP_API_KEY}`
        ); 
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            console.log(error.message);
            return error.message;
        } else {
            console.log("Unexpected error: ", error);
            return "An unexpected error has occured";
        }
    }
};

export const getCompanyProfile = async (query: string) => {

    try {
        const data = await axios.get<CompanyProfile[]>(
            `https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${process.env.REACT_APP_API_KEY}`
        );
        console.log(data);
        return data;
        
    } catch (error: any) {
        console.log("Error from API: ", error.message);
    }
};

export const getKeyMetrics = async (query: string) => {

    try {
        const data = await axios.get<CompanyKeyMetrics[]>(
            `https://financialmodelingprep.com/api/v3/key-metrics-ttm?symbol=${query}?apikey=${process.env.REACT_APP_API_KEY}`
        );
        console.log(data);
        return data;

    } catch (error: any) {
        console.log("Error from API: ", error.message);
    }
};

export const getIncomeStatement = async (query: string) => {
    try {
        const data = await axios.get<CompanyIncomeStatement[]>(
            `https://financialmodelingprep.com/stable/income-statement?symbol=${query}?limit=50&apikey=${process.env.REACT_APP_API_KEY}`
        );
        console.log(data);
        return data;

    } catch (error: any) {
        console.log("Error message: ", error.message);
    }
};

export const getBalanceSheet = async (query: string) => {
    try {
        const data = await axios.get<CompanyBalanceSheet[]>(
            `https://financialmodelingprep.com/stable/balance-sheet-statement/${query}?limit=50&apikey=${process.env.REACT_APP_API_KEY}`
        );
        console.log(data);
        return data;

    } catch (error: any) {
        console.log("Error message: ", error.message);
    }
};

export const getCashflow = async (query: string) => {
    try {
        const data = await axios.get<CompanyCashFlow[]>(
            `https://financialmodelingprep.com/stableapi/v3/cash-flow-statement?symbol=${query}?limit=50&apikey=${process.env.REACT_APP_API_KEY}`
        );
        console.log(data);
        return data;

    } catch (error: any) {
        console.log("Error message: ", error.message);
    }
};

export const getCompData = async (query: string) => {
    try {
        const data = await axios.get<CompanyCompData[]>(
            `https://financialmodelingprep.com/stable/stock_peers?symbol=${query}?limit=50&apikey=${process.env.REACT_APP_API_KEY}`
        );
        console.log(data);
        return data;

    } catch (error: any) {
        console.log("Error message: ", error.message);
    }
};

export const getTenK = async (query: string) => {
    try {
        const data = await axios.get<CompanyTenK[]>(
            `https://financialmodelingprep.com/stable/sec_filings/${query}?limit=50&apikey=${process.env.REACT_APP_API_KEY}`
        );
        console.log(data);
        return data;

    } catch (error: any) {
        console.log("Error message: ", error.message);
    }
};

export const getHistoricalDividend = async (query: string) => {
    try {
        const data = await axios.get<CompanyHistoricalDividend[]>(
            `https://financialmodelingprep.com/stable/historical-price-full?symbol=${query}?limit=50&apikey=${process.env.REACT_APP_API_KEY}`
        );
        console.log(data);
        return data;

    } catch (error: any) {
        console.log("Error message: ", error.message);
    }
};