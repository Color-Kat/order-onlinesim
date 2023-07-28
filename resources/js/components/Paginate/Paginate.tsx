import React from 'react';
import ReactPaginate from "react-paginate";

interface PaginateProps {
    currentPage: number;
    pageCount: number;
    handlePageClick: (e: any) => void;
}

export const Paginate: React.FC<PaginateProps> = ({currentPage, pageCount, handlePageClick}) => {

    if(pageCount <= 1) return null;

    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="Вперёд >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< Назад"
            renderOnZeroPageCount={null}
            forcePage={currentPage}

            className="relative flex rounded-lg bg-white items-stretch divide-x h-8 w-max select-none"
            pageLinkClassName="px-2.5 h-full hover:bg-indigo-900/10 flex items-center"
            activeClassName="bg-blue-900/10"
            nextClassName="px-2.5 flex items-center hover:bg-blue-300/10"
            previousClassName="px-2.5 flex items-center hover:bg-blue-300/10"
            breakLinkClassName="px-2 hover:bg-blue-300/10"
        />
    );
}