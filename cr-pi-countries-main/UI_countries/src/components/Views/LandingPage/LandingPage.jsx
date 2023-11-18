import { Link } from 'react-router-dom'
import '../../../styles/LandingPage.css'

function LandingPage() {
    return (
        <div className='landing'>
            <div className='messageBox'>
                <h1>Welcome!!</h1>
                <p>Organize your tourist activities with the Countries App</p>
                <Link to={'/home'}>
                    <button>
                        START
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default LandingPage;