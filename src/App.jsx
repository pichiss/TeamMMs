
import './reset.css'
import './App.css'
import {Route, Routes, Link} from 'react-router-dom';


import NoticeList from './assets/component/page/noitce/noticeList';
import NoticeDetail from './assets/component/page/noitce/noticeDetail';
import Footer from './assets/component/footer/footer';

function App() {

  return (
    <>
    <NoticeList></NoticeList>
    <Footer />
    <Routes>
      <Route path='/noticeList/' element={<NoticeList/>}/>
      <Route path='/noticeList/:id' element={<NoticeDetail />}/>
    </Routes>
    </>
  )
}

export default App
