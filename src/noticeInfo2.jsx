import { useCallback, useReducer, useRef, useMemo, createContext } from "react";
import { Contents, notiReducer } from './assets/component/page/noitce/noticeData';

import NoticeList from "./assets/component/page/noitce/noticeList";
import NoticeDetail from "./assets/component/page/noitce/noticeDetail";
import NoticeWrite from "./assets/component/page/noitce/noitceWrite";

export const NotiContext = createContext();
export const editContext = createContext();

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

    const memoNoti = useMemo(() => { //필요한것만 저장
        return { createNoti, editNoti, removeNoti, searchNoti }
    }, [createNoti, editNoti, removeNoti, searchNoti]);

    return (
        <>
            <NotiContext.Provider value={notis}>
                <editContext.Provider value={memoNoti}>
                    <NoticeList />
                    <NoticeDetail />
                    <NoticeWrite />
                </editContext.Provider>
            </NotiContext.Provider>
        </>
    );
}