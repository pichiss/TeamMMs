import { useCallback, useReducer, useRef } from "react";
import { Contents, notiReducer } from './noticeData';

import NoticeList from "./noticeList";
import NoticeDetail from "./noticeDetail";
import NoticeWrite from "./noitceWrite";

export default function NoticeInfo() {

    const [state, dispatch] = useReducer(notiReducer, Contents);
    const { notis } = state;
    const { notiType, notiName, notiText } = state.inputs;
    const notiId = useRef(12);

    const createNoti = useCallback((notiType, notiName, notiText) => {
        const today = new Date();
        const year = today.getFullYear();
        const month = (today.getMonth() + 1).toString().padStart(2, '0');
        const day = today.getDate().toString().padStart(2, '0');
        const createDate = `${year}-${month}-${day}`;

        dispatch({
            type: 'create',
            noti: {
                notiType, notiName, notiText,
                id: notiId.current,
                createDate
            }
        })
        notiId.current++
    }, [notiType, notiName, notiText]);

    const editNoti = (id, notiType, notiName, notiText) => {
        dispatch({
            type: 'edit',
            id, notiType, notiName, notiText
        })
    }

    const removeNoti = (id) => {
        dispatch({
            type: 'remove',
            id
        })
    }

    const searchNoti = (notiName, notiText) => {
        dispatch({
            type: 'search',
            notiName, notiText
        })
    }


    return (
        <>
            <NoticeList />
            <NoticeDetail />
            <NoticeWrite />
        </>
    );
}