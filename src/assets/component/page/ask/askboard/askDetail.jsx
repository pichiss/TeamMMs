import { itemContext, editAskContext } from '../../../../../App'
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useCallback, useState } from "react";
import Subnav from '../../../common/Subnav';

function AskDetail(){
    const navigate = useNavigate();
    const { id } = useParams();
    const items = useContext(itemContext).reverse();
    const { editItem, removeItem } = useContext(editAskContext);
    const [askUpdate, setaskUpdate] = useState(true);
    const [editAskItem, setEditAskItem] = useState({
      id: items[id].id,
      category: items[id].category,
      tit: items[id].tit,
      content: items[id].content,
    });

    // 수정
  function editBtn() {
    setaskUpdate(!askUpdate);
  }
  // 취소
  function cancleBtn() {
    if (window.confirm(`수정을 취소 하시겠습니까?`)) {
        setaskUpdate(!askUpdate);
    }
  }
  // 목록으로
  function listBtn() {
    history.back();
  }

  function editChange(e) {
    const { name, value } = e.target;

    setEditAskItem({
      ...editAskItem,
      [name]: value,
    });
    console.log(editAskItem)
  }
  //삭제
  function removeDetail() {
    removeItem(items[id].id);
    setEditAskItem({
      id: "",
      category: "",
      tit: "",
      content: "",
    });
    navigate("/mypage/ask");
  }

  //저장
  function saveDetail() {
    // let category
    // if (editAskItem.category === null || editAskItem.category === ''|| editAskItem.category === undefined ) {
    //   category = "일반문의" ;
    // } else{
    //   category = editAskItem.category;
    // }
    editItem(editAskItem.id, editAskItem.tit, editAskItem.content);
    // console.log(category)
    navigate("/mypage/ask");
  }


    return(
        <section className='w1440 pa55 flex'>
        <Subnav tit={'학부모 코너'}/>
        <div className='askWrap'>
            <h2 className='subtit'>1:1 문의</h2>
            {askUpdate ? 
              <div>
                <h3>[{items[id].category}] {items[id].tit}</h3>
                <p><span>등록일</span>{items[id].createDate}</p>
                <pre>{items[id].content}</pre>
                <div className='flex'>
                  <ul className='flex'>
                    <li><button onClick={editBtn}>수정</button></li>
                    <li><button onClick={removeDetail}>삭제</button></li>
                  </ul>
                  <button onClick={listBtn}>목록</button>
                </div>
              </div>
              :
              <div>
                <div>
                    <select name="category" value={editAskItem.category} onChange={editChange}>
                        <option value={'일반문의'}>일반문의</option>
                        <option value={'오답신고'}>오답신고</option>
                        <option value={'학습질문'}>학습질문</option>
                    </select>        
                </div>
                <div>
                    <input type="text"name="tit" value={editAskItem.tit} onChange={editChange} placeholder="제목을 입력하세요."></input>
                </div>
                <div>
                    <textarea name="content" value={editAskItem.content} onChange={editChange} placeholder="내용을 입력하세요."></textarea>            
                </div>
                <button className="btn" onClick={cancleBtn}>취소</button>
                <button className="btn" onClick={saveDetail}>저장</button>
              </div>
            }
        </div>
        </section>
    )
}

export default AskDetail;