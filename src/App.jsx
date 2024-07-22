
import './reset.css'
import './App.css'
import {Route, Routes, Link} from 'react-router-dom';


import NoticeList from './assets/component/page/noitce/noticeList';
import NoticeDetail from './assets/component/page/noitce/noticeDetail';
import Footer from './assets/component/footer/footer';
import NoticeMain from './assets/component/page/noitce/noticeMain';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<NoticeMain/>}/>
      <Route path='/TeamMMs/noticeList/' element={<NoticeList/>}/>
      <Route path='/TeamMMs/detail/:id' element={<NoticeDetail />}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App
