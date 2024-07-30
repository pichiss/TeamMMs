import { useContext } from "react";
import ItemInput from "../hook/askhook";
import { editAskContext } from '../../../../../App';
import { useNavigate } from "react-router-dom";

const AskNew = ()=>{
    const navigate = useNavigate();
    
    const [{tit,content,category},onchange, reset]=ItemInput({
        tit : '',
        content :'',
        category : '' 
    });

    const {CreateItem}=useContext(editAskContext);
    const createBtn = ()=>{
        let cate
        if(category === undefined || category=== ''){
            cate = '일반문의'
        }else{
            cate = category
        }
        if(window.confirm(`${tit}을/를 등록 하시겠습니까?`)){
            CreateItem(tit,content,cate)
            navigate('/mypage/ask/')
         }


    }
    return(
        <div className="writeWrap">
        <div>
            <label>제목 : </label>
            <input type="text"name="tit" value={tit} onChange={onchange}></input>
        </div>
        <div>
            <label>내용 : </label>
            <textarea name="content" value={content} onChange={onchange}></textarea>            
        </div>
        <div>
            <label>분류 : </label>
            <select name="category" value={category} onChange={onchange}>
                <option value={'일반문의'}>일반문의</option>
                <option value={'오답신고'}>오답신고</option>
                <option value={'학습질문'}>학습질문</option>
            </select>        
        </div>
        <button className="btn" onClick={createBtn}>저장</button>
    </div>
    )
}


export default AskNew;