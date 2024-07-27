import Pagination from "react-js-pagination";
import "./noticeStyle.css";
import { useMemo } from "react";



export default function NoticePagination({page, setPage, postPerPage, datas}) {


    function allCounts (datas){
        return datas.length
      }
    
    const allCount = useMemo(()=>allCounts(datas),[datas])

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
