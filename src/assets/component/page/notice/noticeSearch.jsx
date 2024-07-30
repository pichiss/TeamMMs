import Btn from "./btn";

export default function NoticeSearch() {

    // 버튼
    const searchBtns = {
        tit : '검색',
        link :'',
        Bclass :''
    }

    return (
        <div>
        <div></div>
        <div>
            <select name="notiType">
                <option value="공지사항">공지사항</option>
                <option value="이벤트">이벤트</option>
            </select>
            <input type="text" name="name" value={name}/>
            <Btn {...searchBtns}/>
        </div>
        </div>
    )
}