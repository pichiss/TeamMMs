import { useReducer, useRef, useMemo, useCallback } from 'react'
import {Contents, reducer} from './assets/component/page/ask/askboard/askData';

const AskFunc = () => {
    const [state,dispatch] = useReducer(reducer, Contents);
    const {item} = state;
    const {tit,content, category} = state.inputs;
    const userId = useRef(7);

    const CreateItem = useCallback((tit, content, category)=>{
        const createDate = new Date().toLocaleDateString();
      dispatch({
        type : 'create',
        item : {
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
      const memoAsk= useMemo(()=>{
        return {CreateItem,editItem,removeItem,searchItem}
      },[])
      

    return [memoAsk, item]
}
export default AskFunc