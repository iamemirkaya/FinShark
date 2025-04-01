import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { getCompData } from '../../api';
import { CompanyCompData } from '../../company';
import CompFinderItem from './CompFinderItem/CompFinderItem';
import Spinner from '../Spinners/Spinner';

type Props = {
    ticker: string;
};

const CompFinder = ({ ticker }: Props) => {

    const [companyData, setCompanyData] = useState<CompanyCompData>();
    useEffect(() => {
        const getComps = async () => {
            const value = await getCompData(ticker);
            setCompanyData(value?.data[0]);
        };
        getComps();
    }, [ticker]);
    return (
        <div className="inline-flex rounded-md shadow-sm m-4" role="group">
            {companyData ? (
                companyData?.peersList.map((ticker) => {
                    return <CompFinderItem ticker={ticker} />;
                })
            ) : (
                <Spinner />
            )}
        </div>
    )
}

export default CompFinder