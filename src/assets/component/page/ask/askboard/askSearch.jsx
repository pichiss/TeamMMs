import { useContext, useState } from "react";
import Btn from "../../../common/button/btn";
import '../../notice/noticeSearchStyle.css'
import { editAskContext } from "../../../../../App";

export default function AskSearch({ allList }) {

    const {searchItem} = useContext(editAskContext)

    const [searchAsks, setSearchAsks] = useState('')

    function changeSearchAsk(e){
        setSearchAsks(e.target.value)
    }

    function searchBtn(){
            searchItem(searchAsks)
    }
    function EnterSearch(e){
        if (e.key === "Enter"){
            searchBtn()
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
                <input type="text" name="name" value={searchAsks} onChange={changeSearchAsk}onKeyDown={EnterSearch} />
                <Btn {...searchBtns} func={searchBtn}/>
            </div>
        </div>
    )
}