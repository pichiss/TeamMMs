import Pagination from "react-js-pagination";
import "../page/notice/noticeStyle.css";
import { useMemo } from "react";



export default function CommonPagination({pages, setPages, postPerPage, datas}) {


    function allCounts (datas){
        return datas.length
      }
    
    const allCount = useMemo(()=>allCounts(datas),[datas])

    const handlePageChange = (pages) => {
        setPages(pages);
    };



    return (
        <Pagination
        activePage={pages}
        itemsCountPerPage={postPerPage}
        totalItemsCount={allCount}
        pageRangeDisplayed={5}
        prevPageText={""}
        nextPageText={""}
        onChange={handlePageChange}
      />
    );
}
