import { useEffect, useState } from "react";
import { CompanyCompData } from "../../company";
import { getCompData } from "../../api";
import CompFinderItem from "./CompFinderItem/CompFinderItem";


interface Props {
    ticker: string
};

const CompFinder = ({ticker}: Props) => {

    const [companyData, setCompanyData] = useState<CompanyCompData>();

    useEffect(() => {
        const getComps = async () => {
            const res = await getCompData(ticker);
            setCompanyData(res?.data[0]);
        };
        getComps();
    }, []);

    return <div className="inline-flex rounded-md shadow-sm m-4">
        {companyData?.peersList.map((ticker) => {
            return <CompFinderItem ticker={ticker} />
        })}
    </div>;
};

export default CompFinder;