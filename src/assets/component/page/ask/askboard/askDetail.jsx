import { itemContext, editAskContext } from '../../../../../App'
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useReducer, useState } from "react";

function AskDetail({id,category,tit,content,createDate}){
    const navigate = useNavigate();
    const { id } = useParams();
    const items = useContext(itemContext).reverse()
    const { editAsk, removeAsk } = useContext(editAskContext);
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
  // 수정취소
  function listBtn() {
    history.back();
  }

  function editChange(e) {
    const { tit, value } = e.target;

    setEditAskItem({
      ...editAskItem,
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
      types = "일반문의" ;
    } else{
      types = editNotis.notiType;
    }
    editAsk(editNotis.id, types, editNotis.tit, editNotis.text);
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
              <p><span>등록일</span>date</p>
              <pre>cont</pre>
              <div className='flex'>
                <ul className='flex'>
                  <li><button>수정</button></li>
                  <li><button>삭제</button></li>
                </ul>
                <button onClick={listBtn}>목록</button>
              </div>
            </div>
        </div>
        </section>
    )
}

export default AskDetail;