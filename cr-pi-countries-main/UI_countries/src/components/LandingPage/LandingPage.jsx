import { Link } from 'react-router-dom'
import '../../styles/LandingPage.css'

function LandingPage () {
    return(
        <div className='landing'>
            <div className='messageBox'>
                <h1>Welcome!!</h1> 
            <p>Organiza tus actividades turisticas con Countries App</p>
            <button>
                <Link to={'/home'}>START</Link>
            </button>
            </div>
        </div>
    )
}

export default LandingPage;