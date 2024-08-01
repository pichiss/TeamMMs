import { useState, useRef } from 'react';
import AskAnsureList from './askAnsureList';

function AskAnsure(){
    const [ansure, setAnsure] = useState('');
  const [ansureList, setAnsureList]=useState( []);
  const ansurchange= (e)=>{
    setAnsure(e.target.value)
  };

  let addId = useRef(2)

  function addAnsur(){
    let anslist = {
      id : addId.current,
      ansure
    }
    setAnsureList([...ansureList,anslist])
    setAnsure('')
    addId.current++;
  }
  const deleteBtn = (targetId)=>{
  setAnsureList(
    ansureList.filter((list)=>list.id !== targetId))
  }

    return(
        <>
        <div className='ansur'>
            <h4>답변</h4>
            <AskAnsureList addAnsur={addAnsur} ansureList={ansureList} deleteBtn={deleteBtn} />
            <div className='flex ansurAddBox'>
                <input className='ansPlus' type='text' name={ansure} value={ansure} onChange={ansurchange} placeholder='답변을 달아주세요.'></input>
                <button className='askEditBtn' onClick={addAnsur}>추가</button>
            </div>
        </div>
        </>
    )
}

export default AskAnsure;


  