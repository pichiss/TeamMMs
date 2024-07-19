
import './reset.css'
import './App.css'
import { Contents, notiReducer } from './assets/component/page/noitce/noticeData';
import {Route, Routes, Link} from 'react-router-dom';
import { useReducer } from 'react';

import NoticeList from './assets/component/page/noitce/noticeList';
import NoticeDetail from './assets/component/page/noitce/noticeDetail';
import Footer from './assets/component/footer/footer';

function App() {

  const [state, dispatch] = useReducer(notiReducer, Contents);
  const { notis } = state;

  return (
    <>
    <NoticeList><Link to='/noticeList'></Link></NoticeList>
    <Footer />
    <Routes>
      <Route path='/noticeList/:id' element={<NoticeDetail id={notis.id}/>}/>
    </Routes>
    </>
  )
}

export default App
