import { useEffect, useState } from "react";
import { CompanyTenK } from "../../company";
import { getTenK } from "../../api";
import Spinner from "../Spinner/Spinner";
import TenKFinderItem from "./TenKFinderItem/TenKFinderItem";

interface Props {
    ticker: string
};

const TenkFinder = ({ticker}: Props) => {

    const [companyData, setCompanyData] = useState<CompanyTenK[]>();

    useEffect(() => {
        const getTenKData = async () => {
            const res = await getTenK(ticker);
            setCompanyData(res?.data);
        };
        getTenKData();
    }, [ticker]);

    return (
        <div className="inline-flex rounded-md shadow-sm m-4" role="group">
            {companyData ? (companyData.slice(0, 5).map(tenK => <TenKFinderItem tenK={tenK} />)) : (<Spinner />)}
        </div>
    );
};

export default TenkFinder;