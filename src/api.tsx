import axios from "axios";
import { CompanyBalanceSheet, CompanyCashFlow, CompanyIncomeStatement, CompanyKeyMetrics, CompanyProfile, CompanySearch } from "./company";

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

        return data;
    } catch (error: any) {
        console.log("Error from API: ", error.message);
    }
};

export const getKeyMetrics = async (query: string) => {

    try {
        const data = await axios.get<CompanyKeyMetrics[]>(
            `https://financialmodelingprep.com/api/v3/key-metrics-ttm/${query}?apikey=${process.env.REACT_APP_API_KEY}`
        );

        return data;

    } catch (error: any) {
        console.log("Error from API: ", error.message);
    }
};

export const getIncomeStatement = async (query: string) => {
    try {
        const data = await axios.get<CompanyIncomeStatement[]>(
            `https://financialmodelingprep.com/api/v3/income-statement/${query}?limit=50&apikey=${process.env.REACT_APP_API_KEY}`
        );

        return data;

    } catch (error: any) {
        console.log("Error message: ", error.message);
    }
};

export const getBalanceSheet = async (query: string) => {
    try {
        const data = await axios.get<CompanyBalanceSheet[]>(
            `https://financialmodelingprep.com/api/v3/balance-sheet-statement/${query}?limit=50&apikey=${process.env.REACT_APP_API_KEY}`
        );
        
        return data;

    } catch (error: any) {
        console.log("Error message: ", error.message);
    }
};

export const getCashflow = async (query: string) => {
    try {
        const data = await axios.get<CompanyCashFlow[]>(
            `https://financialmodelingprep.com/api/v3/cash-flow-statement/${query}?limit=50&apikey=${process.env.REACT_APP_API_KEY}`
        );
        
        return data;

    } catch (error: any) {
        console.log("Error message: ", error.message);
    }
};