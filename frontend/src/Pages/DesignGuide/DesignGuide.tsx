import React from 'react'
import Table from '../../Components/Table/Table'
import RatioList from '../../Components/RatioList/RatioList'
import { CompanyKeyMetrics } from '../../company';
import { testIncomeStatementData } from '../../Components/Table/testData';

interface Props { }


const tableConfig = [
    {
        label: "Market Cap",
        render: (company: CompanyKeyMetrics) => company.marketCapTTM,
        subTitle: "Total value of all a company's shares of stock",
    },
];

function DesignGuide({ }: Props) {
    return (
        <div>
            <h1>Finshark Design Page</h1>
            <h2>Design guide- This is the design guide for Fin Shark. These are reuable
                components of the app with brief instructions on how to use them</h2>
            <RatioList data={testIncomeStatementData} config={tableConfig} />
            <Table data={testIncomeStatementData} config={tableConfig} />

            <h3>
                Table - Table takes in a configuration object and company data as
                params. Use the config to style your table.
            </h3>
        </div>

    )
}

export default DesignGuide