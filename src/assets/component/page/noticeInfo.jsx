import { createContext, useCallback, useMemo, useReducer, useRef } from "react";
import { Contents, notiReducer } from "./noitce/noticeData";

import NoticeList from "./noitce/noticeList";
import NoticeDetail from "./noitce/noticeDetail";
import NoticeWrite from "./noitce/noitceWrite";

export const notiContext = createContext();
export const editContext = createContext();

export default function NoticeInfo() {
  const [state, dispatch] = useReducer(notiReducer, Contents);
  const { datas } = state;
  const { type, name, text } = state.inputs;
  const notiId = useRef(12);

  const createNoti = useCallback(
    (type, name, text) => {
      const today = new Date();
      const year = today.getFullYear();
      const month = (today.getMonth() + 1).toString().padStart(2, "0");
      const day = today.getDate().toString().padStart(2, "0");
      const createDate = `${year}-${month}-${day}`;

      dispatch({
        type: "create",
        data: {
          type,
          name,
          text,
          id: notiId.current,
          createDate,
        },
      });
      notiId.current++;
    },
    [type, name, text]
  );

  const editNoti = (id, type, name, text) => {
    dispatch({
      type: "edit",
      id,
      type,
      name,
      text,
    });
  };

  const removeNoti = (id) => {
    dispatch({
      type: "remove",
      id,
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

  return (
    <>
      <notiContext.Provider value={datas}>
        <editContext.Provider value={memoNoti}>
          <NoticeList />
          <NoticeDetail />
          <NoticeWrite />
        </editContext.Provider>
      </notiContext.Provider>
    </>
  );
}
