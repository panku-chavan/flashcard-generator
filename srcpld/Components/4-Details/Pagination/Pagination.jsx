import { useRef } from "react";

import { GrNext, GrPrevious } from "react-icons/gr";

export const Pagination = ({ cardsPerPage, totalCards, paginate }) => {

    // current page using useref for avoide rerendering of current value
    const current = useRef(1)
    // Find all pages having six cards
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
        pageNumbers.push(i);
    }

    // lenght of total pages
    let length = pageNumbers.length - 1;

    // fuction for previous page
    const prevFun = () => {
        if (current.current !== 1) {
            current.current--;
            //console.log(current.current)
            paginate(current.current)
        }

    }

    // fuction for next page
    const nextFun = () => {
        if (pageNumbers[current.current] <= pageNumbers[length]) {
            //console.log(current.current + 1)
            paginate(current.current + 1);
            current.current++;
        }

    }
    return (

        <div>
            {
                // If page number have more than one then and then showing following buttons otherwise it shows nothing.
                pageNumbers.length > 1 ?
                    <div className="flex">

                        {/* Previous Page button. */}
                        <div className="mt-0.5">
                            <button onClick={prevFun} title="Previous Page">
                                <GrPrevious className="opacity-60 transition ease-in-out delay-60 duration-300  hover:-translate-x-1 hover:scale-60" />
                            </button>
                        </div>

                        {/* Display current page of total pages. */}
                        <span className=" text-slate-500   px-8">{current.current}/{pageNumbers.length}</span>

                        {/* Next Page button. */}
                        <div className="mt-0.5">
                            <button onClick={nextFun} title="Next Page">
                                <GrNext className="opacity-60 transition ease-in-out delay-60 duration-300  hover:translate-x-1 hover:scale-60" />
                            </button>
                        </div>

                    </div> : null
            }

        </div>

    )
}