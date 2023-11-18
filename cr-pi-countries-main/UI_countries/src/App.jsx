import './App.css';
import { Routes, Route} from 'react-router-dom';
import LandingPage from './components/Views/LandingPage/LandingPage';
import CreateActivity from './components/CreateActivity/CreateActivity';
import Home from './components/Views/Home/Home';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/createActivity' element={<CreateActivity/>}/>
    </Routes>
    </>
  )
}

export default App
