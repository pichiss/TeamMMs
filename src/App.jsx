import { Route, Routes, Link } from 'react-router-dom';
import EduMain from './assets/component/page/edu/EduMain.jsx';
import EduToday from './assets/component/page/edu/EduToday.jsx';
import './reset.css';
import './App.css';

function App() {

  return (
    <>
    <Routes>
      <Route path='/education' element={<EduMain />} />
      <Route path='/education/today' element={<EduToday />} />
    </Routes>
    </>
  )
}

export default App;