import { Route, Routes, Link } from 'react-router-dom';
import { eduContents, qDatas } from './assets/component/page/edu/eduData.js';
import { useState, useEffect, createContext } from 'react'

import Header from './assets/component/header/Header'
import Main from './assets/component/page/main/Main'
import Login from './assets/component/page/login/Login'
import Join from './assets/component/page/login/Join'

import Footer from './assets/component/footer/footer'
import Profile from './assets/component/page/mypage/profile'

import EduMain from './assets/component/page/edu/EduMain.jsx';
import EduToday from './assets/component/page/edu/EduToday.jsx';
import EduTodayCont from './assets/component/page/edu/EduTodayCont.jsx';
import EduMathQ1 from './assets/component/page/edu/EduMath/EduMathQ1.jsx';
import EduMathQ2 from './assets/component/page/edu/EduMath/EduMathQ2.jsx';
import EduMathQ3 from './assets/component/page/edu/EduMath/EduMathQ3.jsx';

import './reset.css'
import './App.css'

function App() {
  const [page, setPage] = useState(true);
  
  
  return (
    <>

    {page == true ?
    <>
      <Header setPage={setPage}/>
      {console.log(page)}
        <Routes>
          <Route path="/TeamMMs/" element={<Main />}/>
          <Route path="/TeamMMs/login" element={<Login />}/>
          <Route path="/TeamMMs/join" element={<Join />}/>
          <Route path="/TeamMMs/mypage" element={<Profile />}/>
        </Routes>
      <Footer />
    </>
    :
    <>
      <Routes>
          <Route path='/education' element={<EduMain />} />
          <Route path='/education/today' element={<EduToday />} />
          <Route path='/education/today/:unitId' element={<EduTodayCont data={eduContents} qDatas={qDatas} />} />
          <Route path='/education/today/:unitId/1' element={<EduMathQ1 />} />
          <Route path='/education/today/:unitId/2' element={<EduMathQ2 />} />
          <Route path='/education/today/:unitId/3' element={<EduMathQ3 />} />
      </Routes>
    </>
    }
    </>
  )
}

export default App;