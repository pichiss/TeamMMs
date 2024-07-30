import { useContext } from "react";
import ItemInput from "../hook/askhook";
import { editAskContext } from '../../../../../App';
import { useNavigate } from "react-router-dom";
import Subnav from "../../../common/Subnav";
import './askboard.css';

const AskNew = ()=>{

    const navigate = useNavigate();
    
    const [{tit,content,category},onchange, reset]=ItemInput({
        tit : '',
        content :'',
        category : '' ,
        ansur : false
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
    };

    function cancleFunc(){
        reset()
        return(navigate('/mypage/ask/'))}

    return(
        <section className='w1440 pa55 flex'>
            <Subnav tit={'학부모 코너'}/>
            <div className="writeWrap">
                <h2 className='subtit'>1:1 문의</h2>
                <div>
                    <label>말머리 : </label>
                    <select name="category" value={category} onChange={onchange}>
                        <option value={'일반문의'}>일반문의</option>
                        <option value={'오답신고'}>오답신고</option>
                        <option value={'학습질문'}>학습질문</option>
                    </select>        
                </div>
                <div>
                    <label>제목 : </label>
                    <input type="text"name="tit" value={tit} onChange={onchange}></input>
                </div>
                <div>
                    <label>내용 : </label>
                    <textarea name="content" value={content} onChange={onchange}></textarea>            
                </div>
                
                <button className="btn" onClick={cancleFunc}>취소</button>
                <button className="btn" onClick={createBtn}>저장</button>
            </div>
        </section>
    )
}


export default AskNew;