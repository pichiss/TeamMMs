import { useContext, useState } from "react";
import Btn from "./btn";
import './noticeSearchStyle.css'
import { editNotiContext } from "../../../../App";

export default function NoticeSearch({ allList }) {

    const {searchNoti} = useContext(editNotiContext)

    const [searchNotis, setSeacrchNotis] = useState('')

    function changeSearchNoti(e){
        setSeacrchNotis(e.target.value)
    }

    function searchBtn(){
        searchNoti(searchNotis)
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
                <input type="text" name="name" value={searchNotis} onChange={changeSearchNoti}/>
                <Btn {...searchBtns} func={searchBtn}/>
            </div>
        </div>
    )
}