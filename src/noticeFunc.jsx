

import { useReducer, useRef, useMemo, useCallback } from 'react'
import { Contents, notiReducer } from "./assets/component/page/notice/noticeData";
const Notifunc = () => {
    const [state, dispatch] = useReducer(notiReducer, Contents);
    const { datas } = state;
    const { notiType, name, text } = state.inputs;
    const notiId = useRef(12);

    const createNoti = useCallback((notiType, name, text)=>{
        const today = new Date();
        const year = today.getFullYear();
        const month = (today.getMonth() + 1).toString().padStart(2, "0");
        const day = today.getDate().toString().padStart(2, "0");
        const createDate = `${year}-${month}-${day}`;

        dispatch({
            type: "create",
            data: {
                notiType,
                name,
                text,
                id: notiId.current,
                createDate,
                views:1,
            }
        })
        notiId.current++;
    },[notiType, name, text])


    const editNoti = (id, notiType, name, text) => {

        dispatch({
            type: "edit",
            id,
            notiType,
            name,
            text,
        });
    };

    const removeNoti = (id) => {
        dispatch({
            type: "remove",
            id
        });
    };

    const searchNoti = (name, text) => {
        dispatch({
            type: "search",
            name,
            text,
        });
    };


    const memoNoti = useMemo(() => {
        return { createNoti, editNoti, removeNoti, searchNoti };
    }, []);
    return [memoNoti, datas]
}
export default Notifunc