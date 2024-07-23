import { Route, Routes, Link } from 'react-router-dom';
import { eduContents, qDatas } from './assets/component/page/edu/eduData.js';
import EduMain from './assets/component/page/edu/EduMain.jsx';
import EduToday from './assets/component/page/edu/EduToday.jsx';
import EduTodayCont from './assets/component/page/edu/EduTodayCont.jsx';
import EduMathQ1 from './assets/component/page/edu/EduMath/EduMathQ1.jsx';
import './reset.css';
import './App.css';

function App() {

  return (
    <Routes>
      <Route path='/education' element={<EduMain />} />
      <Route path='/education/today' element={<EduToday />} />
      <Route path='/education/today/:unitId' element={<EduTodayCont data={eduContents} qDatas={qDatas} />} />
      <Route path='/education/today/:unitId/1' element={<EduMathQ1 />} />
    </Routes>
  )
}

export default App;