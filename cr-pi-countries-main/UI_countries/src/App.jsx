import './App.css';
import { Routes, Route, useLocation} from 'react-router-dom';
import LandingPage from './components/Views/LandingPage/LandingPage';
import CreateActivity from './components/CreateActivity/CreateActivity';
import Home from './components/Views/Home/Home';
import Details from './components/Views/Details/Details';
import NavBar from './components/NavBar/NavBar';

function App() {

  const location = useLocation()

  return (
    <>

    {(location.pathname !== '/' && <NavBar/>)}

    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/createActivity' element={<CreateActivity/>}/>
      <Route path='/country/:id' element={<Details/>}></Route>
    </Routes>
    </>
  )
}

export default App
