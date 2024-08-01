import { useState,useReducer,useRef,useMemo,useCallback,useEffect,createContext } from 'react';
import Subnav from '../../component/common/Subnav';
import {Contents, reducer} from './askboard/askData';
import './ask.css'
export const itemContext = createContext();
export const editContext = createContext();

function Ask(){
    const [state,dispatch] = useReducer(reducer, Contents);
    const {item} = state;
    const {tit,content, category} = state.inputs;
    const userId = useRef(7);

    const CreateItem = useCallback((tit, content, category)=>{
        const createDate = new Date().toLocaleDateString();
      dispatch({
        type : 'create',
        dic : {
            tit,content, category, 
          id:userId.current,
          createDate
        }
      })
      userId.current += 1
      },[tit,content, category])
    
      const editItem = (id,content)=>{
        dispatch({
          type : 'edit',
          id,content
        })
      }
      const removeItem = (id)=>{
        dispatch({
          type : 'remove',
          id
        })
      }
      const searchItem = (text)=>{
        dispatch({
          type : 'search',
          text
        })
      }
      const memoWord= useMemo(()=>{
        return{CreateItem,editItem,removeItem,searchItem}
      },[])

    return(
        <section className='w1440 pa55 flex'>
        <Subnav tit={'학부모 코너'}/>
        <div className='askWrap'>
            <h2 className='subtit'>1:1 문의</h2>
            <table>
                <thead>
                <tr>
                    <td>번호</td>
                    <td>답변내역</td>
                    <td>제목</td>
                    <td>등록일</td>
                </tr>
                </thead>
                <tbody>
                <itemContext.Provider value={item}>
                <editContext.Provider value={memoWord}>
                {item.map((item)=>
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        {item.ansur === false? <td><span className='ansYet'>답변대기</span></td> : <td><span className='ansEnd'>답변완료</span></td>}
                        <td className='askTit'> <span>[{item.category}]</span> {item.tit}</td>
                        <td>{item.createDate}</td>
                    </tr>
                )}
                </editContext.Provider>
                </itemContext.Provider>
                </tbody>

            </table>
                {/* <Link to='/mypage/askNew'><button>문의</button></Link> */}
        </div>
        </section>
    )
}

export default Ask;