import { itemContext, editAskContext } from '../../../App'
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import Subnav from '../../../component/common/Subnav';
import SubHead from '../../../component/common/Subhead';
import AskAnsure from './askAnsure';


function AskDetail(){
    const navigate = useNavigate();
    const { id } = useParams();
    const items = useContext(itemContext).reverse();
    const item = items.find(item => item.id === parseInt(id)); //search 해도 링크, 디테일페이지 id 일치하게
    const { editItem, removeItem } = useContext(editAskContext);
    const [askUpdate, setaskUpdate] = useState(true);
    const [editAskItem, setEditAskItem] = useState({
      id: item.id,
      category: items.category,
      tit: item.tit,
      content: item.content
    });

    // 수정
  function editBtn() {
    setaskUpdate(!askUpdate);
    setEditAskItem({
      id: item.id,
      category: item.category,
      tit: item.tit,
      content: item.content
    });
  }
  // 취소
  function cancleBtn() {
    if (window.confirm(`수정을 취소 하시겠습니까?`)) {
        setaskUpdate(!askUpdate);
    }
  }
  // 목록으로
  function listBtn() {
    navigate(-1);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
  })
  }

  function editChange(e) {
    const { name, value } = e.target;

    setEditAskItem({
      ...editAskItem,
      [name]: value,
    });
  }
  //삭제
  function removeDetail() {
    removeItem(item[id].id);
    setEditAskItem({
      id: "",
      category: "",
      tit: "",
      content: "",
    });
    navigate("/ask");
  }

  //저장
  function saveDetail() {
    editItem(editAskItem.id, editAskItem.tit, editAskItem.content);
    navigate("/ask");
  }

  // 답변
  
    return(
      <>
      <SubHead chara={1} />
        <section className='w1440 pa55 flex'>
        <Subnav tit={'학부모 코너'}/>
        <div className='writeWrap'>
            <h2 className='subtit'>1:1 문의</h2>
            {askUpdate ? 
              <div>
                <h3>[{item.category}] {item.tit}</h3>
                <p><b>등록일</b><span>{item.createDate}</span></p>
                <pre>{item.content}</pre>
                <AskAnsure />
                <div className='flex threeBtn'>
                  <ul className='flex '>
                    <li><button className='bluelineBtn' onClick={editBtn}>수정</button></li>
                    <li><button className='bluelineBtn' onClick={removeDetail}>삭제</button></li>
                  </ul>
                  <button className='bgblueBtn' onClick={listBtn}>목록</button>
                </div>
              </div>
              :
              <div className='editWrap'>
                <div className='TitWrap'>
                    <select className='Titbox' name="category" value={editAskItem.category} onChange={editChange}>
                        <option value={'일반문의'}>일반문의</option>
                        <option value={'오답신고'}>오답신고</option>
                        <option value={'학습질문'}>학습질문</option>
                    </select>        
                    <input className='Titbox' type="text"name="tit" value={editAskItem.tit} onChange={editChange} placeholder="제목을 입력하세요."></input>
                </div>
                <div className='TitWrap'>
                    <textarea className='Titbox' name="content" value={editAskItem.content} onChange={editChange} placeholder="내용을 입력하세요."></textarea>            
                </div>
                <div className='flex editTwoBtn'>
                  <button className="bluelineBtn" onClick={cancleBtn}>취소</button>
                  <button className="bgblueBtn" onClick={saveDetail}>저장</button>
                </div>
              </div>
            }
        </div>
        </section>
        </>
    )
}

export default AskDetail;