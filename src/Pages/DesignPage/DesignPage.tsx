import React from "react";
import Table from "../../Components/Table/Table";
import RatioList from "../../Components/RatioList/RatioList";
import { testIncomeStatementData } from "../../Components/Table/testData";

interface Props {};
const tableConfig = [
    {
        label: "Market Cap",
        render: (company: any) => company.marketCapTTM,
        subtitle: "Total value of all a company's shares of stock"
    }
];

const DesignPage = ({}: Props) => {

    return (
    <>
        <h1>FinShark Design Page</h1>
        <h2>This is FinSharks design page. This is where we well house various design aspects of the app</h2>
        <RatioList data={testIncomeStatementData} config={tableConfig} />
        <Table data={testIncomeStatementData} config={tableConfig} />
    </>);
};

export default DesignPage;
