import { Route, Routes, Link } from 'react-router-dom';
import eduContents from './assets/component/page/edu/eduData.js';
import EduMain from './assets/component/page/edu/EduMain.jsx';
import EduToday from './assets/component/page/edu/EduToday.jsx';
import EduTodayCont from './assets/component/page/edu/EduTodayCont.jsx';
import './reset.css';
import './App.css';

function App() {

  return (
    <Routes>
      <Route path='/education' element={<EduMain />} />
      <Route path='/education/today' element={<EduToday />} />
      <Route path='/education/today/:unitId' element={<EduTodayCont data={eduContents} />} />
    </Routes>
  )
}

export default App;