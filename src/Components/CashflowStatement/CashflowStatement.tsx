import { useEffect, useState } from "react";
import { data, useOutletContext } from "react-router-dom";
import { CompanyCashFlow } from "../../company";
import { formatLargeMonetaryNumber } from "../../Helpers/NumberFormatting";
import { getCashflow } from "../../api";
import Table from "../Table/Table";
import Spinner from "../Spinner/Spinner";

interface Props {};

const configs = [
  {
    label: "Date",
    render: (company: CompanyCashFlow) => company.date,
  },
  {
    label: "Operating Cashflow",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.operatingCashFlow),
  },
  {
    label: "Investing Cashflow",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.netCashUsedForInvestingActivites),
  },
  {
    label: "Financing Cashflow",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(
        company.netCashUsedProvidedByFinancingActivities
      ),
  },
  {
    label: "Cash At End of Period",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.cashAtEndOfPeriod),
  },
  {
    label: "CapEX",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.capitalExpenditure),
  },
  {
    label: "Issuance Of Stock",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.commonStockIssued),
  },
  {
    label: "Free Cash Flow",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.freeCashFlow),
  },
];

const CashflowStatement = ({}: Props) => {

    const ticker = useOutletContext<string>();
    const [cashflowData, setCashflowData] = useState<CompanyCashFlow[]>();

    useEffect(() => {
        const getRatios = async () => {
            const res = await getCashflow(ticker);
            setCashflowData(res!.data);
        };
        getRatios();
    }, []);

    return (
        cashflowData ? <Table config={configs} data={cashflowData} /> : <Spinner />
    );

};

export default CashflowStatement;