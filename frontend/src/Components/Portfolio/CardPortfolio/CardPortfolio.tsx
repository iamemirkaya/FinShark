import React, { SyntheticEvent } from 'react'
import DeletePortfolio from '../DeletePortfolio/DeletePortfolio';
import { Link } from 'react-router-dom';

interface probs {
    portfolioValue: string;
    onPortfolioDelete: (e: SyntheticEvent) => void;

}


function CardPortfolio({ portfolioValue, onPortfolioDelete }: probs) {
    return (
        <div className="flex flex-col w-full p-8 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
            <Link to={`/company/${portfolioValue}/company-profile`} className="pt-6 text-xl font-bold">{portfolioValue}</Link>
            <DeletePortfolio
                portfolioValue={portfolioValue}
                onPortfolioDelete={onPortfolioDelete}
            />
        </div>
    )
}

export default CardPortfolio