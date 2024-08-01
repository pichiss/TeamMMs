import { useContext, useState } from "react";
import Btn from "../../component/common/button/btn";
import './noticeSearchStyle.css'
import { editNotiContext } from "../../../App";

export default function NoticeSearch({ allList }) {

    const {searchNoti} = useContext(editNotiContext)

    const [searchNotis, setSeacrchNotis] = useState('')

    function changeSearchNoti(e){
        setSeacrchNotis(e.target.value)
    }

    function searchBtn(){
        searchNoti(searchNotis)
    }

    const activeEnter = (e) => {
        if(e.key === "Enter") {
          searchBtn();
        }
      }


    // 버튼
    const searchBtns = {
        tit: '검색',
        link: '',
        Bclass: 'searchBtn'
    }

    return (
        <div className="flex searchWrap">
            <p>총 <span>{allList}</span> 건</p>
            <div className="flex search">
                <input type="text" name="name" value={searchNotis} onChange={changeSearchNoti} onKeyDown={activeEnter}/>
                <Btn {...searchBtns} func={searchBtn}/>
            </div>
        </div>
    )
}