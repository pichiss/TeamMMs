
const EventList =({list,deleteBtn})=>{
    function onDeleteBtn(){
        let id= list.id
        deleteBtn(id)
    };
    return(
        <li className="ansurItemBox flex">
            <p className="ansurItem"><div key={list.id} id={list.id}>{list.ansure}</div></p>
            <button className="askEditBtn" onClick={onDeleteBtn}>삭제</button>            
        </li>
    )
}
const AskAnsureList = ({ansureList,deleteBtn})=>{

    return(
        <>
            <ul> 
                {ansureList.map((list)=> <EventList key={list.id} list={list} deleteBtn={deleteBtn}/>)}
            </ul>
        </>
    )
}

export default AskAnsureList;