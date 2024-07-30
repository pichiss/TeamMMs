import { itemContext, editAskContext } from '../../../../../App'
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useReducer, useState } from "react";

function AskDetail(){
    const navigate = useNavigate();
    const { id } = useParams();
    const items = useContext(itemContext).reverse()
    const { editAsk, removeAsk } = useContext(editAskContext);
    const [askUpdate, setaskUpdate] = useState(true);
    const [editNotis, setEditNotis] = useState({
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
  // 수정취소
  function listBtn() {
    history.back();
  }

  function editChange(e) {
    const { tit, value } = e.target;

    setEditNotis({
      ...editNotis,
      [tit]: value,
    });
  }

  console.log(id)
  //삭제
  function removeDetail() {
    removeNoti(items[id].id);
    setEditNotis({
      id: "",
      category: "",
      tit: "",
      content: "",
    });
    navigate("/mypage/ask");
  }

  //저장
  function saveDetail() {
    let types
    if (editNotis.notiType === null || editNotis.notiType === ''|| editNotis.notiType === undefined ) {
      types = "공지사항" ;
    } else{
      types = editNotis.notiType;
    }
    editNoti(editNotis.id, types, editNotis.tit, editNotis.text);
    console.log(types);
    navigate("/noticeList");
  }


    return(
        <section className='w1440 pa55 flex'>
        <Subnav tit={'학부모 코너'}/>
        <div className='askWrap'>
            <h2 className='subtit'>1:1 문의</h2>
            <div>
                <h3>tit</h3>
                {askUpdate ? (
          <div>
            <h3>[{items[id].category}] {items[id].name}</h3>
            <ul className="flex">
              <li>등록일</li>
              <li>{items[id].createDate}</li>
              <li>조회수</li>
              <li>{items[id].views}</li>
            </ul>
            <p>{items[id].text}</p>
          </div>
        ) : (
          <div className="noticeWriteText">
            <div className="flex">
              <select
                name="notiType"
                value={editNotis.notiType}
                onChange={editChange}
              >
                <option value={"공지사항"}>공지사항</option>
                <option value={"이벤트"}>이벤트</option>
              </select>
              <input
                type="text"
                name="name"
                value={editNotis.name}
                onChange={editChange}
              />
            </div>
            <textarea
              name="text"
              value={editNotis.text}
              onChange={editChange}
            ></textarea>
          </div>
        )}
        {askUpdate ? (
          <div className="flex detailBtnWrap">
            <div className="flex">
              <Btn {...editbtns} func={editBtn} />
              <Btn {...removebtns} func={removeDetail} />
            </div>
            <Btn {...listbtns} func={listBtn} />
          </div>
        ) : (
          <div className="flex detailBtnWrap">
            <Btn {...canclebtns} func={cancleBtn} />
            <Btn {...savebtns} func={saveDetail} />
          </div>
        )}
                <pre></pre>
            </div>
        </div>
        </section>
    )
}

export default AskDetail;