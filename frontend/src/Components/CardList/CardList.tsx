import React, { SyntheticEvent } from 'react'
import Card from '../Card/Card'
import { CompanySearch } from '../../company'
import { v4 as uuidv4 } from "uuid"

interface Props {

    searchResult: CompanySearch[];
    onPortfolioCreate: (e: SyntheticEvent) => void;

}

const CardList: React.FC<Props> = ({ searchResult, onPortfolioCreate }) => {
    return (
        <>
            {searchResult.length > 0 ? (
                searchResult.map((result) => (
                    <Card
                        key={uuidv4()}
                        id={result.symbol}
                        searchResult={result}
                        onPortfolioCreate={onPortfolioCreate}
                    />
                ))
            ) : (
                <p className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
                    No results!
                </p>
            )}
        </>
    );
};
export default CardList;
