import React, { useEffect, useState } from "react";
import { CompanyKeyMetrics } from "../../company";
import { formatLargeNonMonetaryNumber, formatRatio } from "../../Helpers/NumberFormatting";
import { useOutletContext } from "react-router-dom";
import { getKeyMetrics } from "../../api";
import RatioList from "../RatioList/RatioList";
import Spinner from "../Spinner/Spinner";
import StockComment from "../StockComment/StockComment";

interface Props {};
const tableConfig = [
    {
        label: "Market Cap",
        render: (company: CompanyKeyMetrics) => formatLargeNonMonetaryNumber(company.marketCapTTM),
        subtitle: "Total value of all a company's shares of stock"
    },
    {
        label: "Current Ratio",
        render: (company: CompanyKeyMetrics) => formatRatio(company.roeTTM),
        subtitle: "Return on equity is the measure of a company's net income divided by its shareholder's equity"
    },
    {
        label: "Return On Assets",
        render: (company: CompanyKeyMetrics) => formatRatio(company.returnOnTangibleAssetsTTM),
        subtitle: "Return on assets is the measure of how effective a company is using its assets"
    },
    {
        label: "Free Cashflow Per Share",
        render: (company: CompanyKeyMetrics) => formatRatio(company.freeCashFlowPerShareTTM),
        subtitle: "Return on assets is the measure of how effective a company is using its assets"
    },
    {
        label: "Book Value Per Share TTM",
        render: (company: CompanyKeyMetrics) => formatRatio(company.bookValuePerShareTTM),
        subtitle: "Book value per share indicates a firm's net asset value (total assets - total liabilities) on per share basis"
    },
    {
        label: "Dividend Yield Share",
        render: (company: CompanyKeyMetrics) => formatRatio(company.dividendYieldTTM),
        subtitle: "Show how much a company pays each year relative to stock price"
    },
    {
        label: "Capex Per Share TTM",
        render: (company: CompanyKeyMetrics) => formatRatio(company.capexPerShareTTM),
        subtitle: "Capex is used by a company to aquire, upgrade and maintain physical assets"
    },
    {
        label: "Graham Number",
        render: (company: CompanyKeyMetrics) => formatRatio(company.grahamNumberTTM),
        subtitle: "This is the upperbouind of the price range that a defensive investor should pay for a stock"
    },
    {
        label: "PE Ratio",
        render: (company: CompanyKeyMetrics) => formatRatio(company.peRatioTTM),
        subtitle: "This measures the current price of a company's shares in telation to its earnings per share"
    },
];

const CompanyProfile = ({}: Props) => {

    const ticker = useOutletContext<string>();
    const [companyData, setCompanyData] = useState<CompanyKeyMetrics>();

    useEffect(() => {
        const getCompanyKeyRatios = async () => {
            const val = await getKeyMetrics(ticker);
            setCompanyData(val?.data[0]);
        };
        getCompanyKeyRatios()
    }, []);

    return (
    <>
        {companyData ? (
            <> 
                <RatioList config={tableConfig} data={companyData} /> 
                <StockComment stockSymbol={ticker} />
            </>) : (
                <Spinner />
            )}
    </>);
};

export default CompanyProfile;