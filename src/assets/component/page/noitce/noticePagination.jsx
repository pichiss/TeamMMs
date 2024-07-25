import Pagination from "react-js-pagination";
import "./noticeStyle.css";
import { useMemo } from "react";



export default function NoticePagination({page, setPage, postPerPage, notis}) {


    function allCounts (notis){
        return notis.length
      }
    
    const allCount = useMemo(()=>allCounts(notis),[notis])

    const handlePageChange = (page) => {
        setPage(page);
    };



    return (
        <Pagination
        activePage={page}
        itemsCountPerPage={postPerPage}
        totalItemsCount={allCount}
        pageRangeDisplayed={5}
        prevPageText={""}
        nextPageText={""}
        onChange={handlePageChange}
      />
    );
}
