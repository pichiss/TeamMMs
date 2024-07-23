export default function NoticeFunc() {

    function createBtn(){
        let cate = notiType;
        createNoti(notiName, notiText, cate)
        reset()
        history.back()
      }

    
    return[createBtn]
}
