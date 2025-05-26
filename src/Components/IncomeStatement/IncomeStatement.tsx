import { useEffect, useState } from "react";
import { CompanyIncomeStatement } from "../../company";
import { formatLargeMonetaryNumber } from "../../Helpers/NumberFormatting";
import { useOutletContext } from "react-router-dom";
import { getIncomeStatement } from "../../api";
import Table from "../Table/Table";

interface Props {};

const configs = [
    {
        label: "Date",
        render: (company: CompanyIncomeStatement) => company.date
    },
    {
        label: "Revenue",
        render: (company: CompanyIncomeStatement) => formatLargeMonetaryNumber(company.revenue)
    },
    {
        label: "Cost of Revenue",
        render: (company: CompanyIncomeStatement) => formatLargeMonetaryNumber(company.costOfRevenue)
    },
    {
        label: "Depreciation",
        render: (company: CompanyIncomeStatement) => formatLargeMonetaryNumber(company.depreciationAndAmortization)
    },
    {
        label: "Operating Income",
        render: (company: CompanyIncomeStatement) => formatLargeMonetaryNumber(company.operatingIncome)
    },
    {
        label: "Income Before Taxes",
        render: (company: CompanyIncomeStatement) => formatLargeMonetaryNumber(company.incomeBeforeTax)
    },
    {
        label: "Net Income",
        render: (company: CompanyIncomeStatement) => formatLargeMonetaryNumber(company.netIncome)
    },
    {
        label: "Net Income Ratio",
        render: (company: CompanyIncomeStatement) => formatLargeMonetaryNumber(company.netIncomeRatio)
    },
    {
        label: "Earnings Per Share",
        render: (company: CompanyIncomeStatement) => formatLargeMonetaryNumber(company.eps)
    },
    {
        label: "Gross Profit Ratio",
        render: (company: CompanyIncomeStatement) => formatLargeMonetaryNumber(company.grossProfitRatio)
    },
    {
        label: "Operating Income Ratio",
        render: (company: CompanyIncomeStatement) => formatLargeMonetaryNumber(company.operatingIncomeRatio)
    },
    {
        label: "Income Before Taxes Ratio",
        render: (company: CompanyIncomeStatement) => formatLargeMonetaryNumber(company.incomeBeforeTaxRatio)
    },
];

const IncomeStatement = ({}: Props) => {

    const ticker = useOutletContext<string>();
    const [incomeStatement, setIncomeStatement] = useState<CompanyIncomeStatement[]>();

    useEffect(() => {
        const getRatios = async () => {
            const res = await getIncomeStatement(ticker!);
            setIncomeStatement(res!.data);
        };
        getRatios();
    }, []);

    return (
        <>
            {incomeStatement ? <><Table config={configs} data={incomeStatement}></Table></> : <>Loading...</>}
        </>);
};

export default IncomeStatement;