import { useContext, useState } from "react";
import Btn from "../../../component/common/button/btn";
import '../../notice/noticeSearchStyle.css'
import { editAskContext } from "../../../App";

export default function AskSearch({ allList }) {

    const {searchItem} = useContext(editAskContext)
    const [searchAsks, setSearchAsks] = useState('') 
    const [filterAsk, setFilterAsk] = useState([])

    function changeSearchAsk(e){
        const value = e.target.value;
        setSearchAsks(value);
        filteringAsk(value);
    }

    function filteringAsk(searchFilter){
        const filtered = searchItem.filter((search)=>{
            return Object.values(search).join('').toLowerCase().includes(searchFilter.toLowerCase())
        })
        setFilterAsk(filtered)
    }

    function searchBtn(){
            searchItem(searchAsks)
    }
    function EnterSearch(e){
        if (e.key === "Enter"){
            e.preventDefault();
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
                <input type="text" name="name" value={searchAsks} onChange={changeSearchAsk} onKeyDown={EnterSearch} />
                <Btn {...searchBtns} func={searchBtn}/>
            </div>
        </div>
    )
}