import Pagination from "react-js-pagination";
import "../page/notice/noticeStyle.css";
import { useMemo } from "react";



export default function CommonPagination({page, setPages, postPerPage, datas}) {


    function allCounts (datas){
        return datas.length
      }
    
    const allCount = useMemo(()=>allCounts(datas),[datas])

    const handlePageChange = (page) => {
        setPages(page);
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
