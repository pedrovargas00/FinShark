import React, { JSX, SyntheticEvent } from "react";
import CardPortfolio from "../CardPortfolio/CardPortfolio";

interface Props {
    portfolioValues: string[];
    onPortfolioDelete: (e: SyntheticEvent) => void;
};

const ListPortfolio: React.FC<Props> = ({portfolioValues, onPortfolioDelete}: Props): JSX.Element => {

    return (
        <section id="portfolio">
            <h2 className="mb-3 mt-3 text-3xl font-semibold text-center md:text-4xl">My portfolio</h2>
            <div className="relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 mb-5 md:px-6 md:space-y-0 md:space-x-7 md:flex-row">
                <>
                    { portfolioValues.length > 0 ? 
                    (portfolioValues.map(portfolioValue => <CardPortfolio portfolioValue={portfolioValue} onPortfolioDelete={onPortfolioDelete}/>)) :
                    (<h3 className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">Your portfolio is empty</h3>) }
                </>
            </div>
        </section>);
};

export default ListPortfolio;