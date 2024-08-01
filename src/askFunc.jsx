import { useReducer, useRef, useMemo, useCallback } from 'react'
import {Contents, reducer} from './assets/page/ask/askboard/askData';

const AskFunc = () => {
    const [state,dispatch] = useReducer(reducer, Contents);
    const {items} = state;
    const {tit,content, category} = state.inputs;
    const userId = useRef(6);

    const CreateItem = useCallback((tit, content, category)=>{
        const createDate = new Date().toLocaleDateString();
      dispatch({
        type : 'create',
        item : {
            tit,content, category, 
            ansur : false,
          id:userId.current,
          createDate
        }
      })
      userId.current += 1
      },[tit,content, category])
    
      const editItem = (id,tit,content)=>{
        dispatch({
          type : 'edit',
          id,tit,content
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
      const memoAsk= useMemo(()=>{
        return {CreateItem,editItem,removeItem,searchItem}
      },[])
      

    return [memoAsk, items]
}
export default AskFunc