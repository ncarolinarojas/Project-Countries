import { Link } from "react-router-dom";
import style from '../../../styles/Home.module.css';

const Home = () => {
    return (
        <div>
            <nav className={style.navbar}>
                <ul>
                    <li>
                        <Link to={'/home'}>Home Page</Link>
                    </li>
                    <li>
                        <Link to={'/countries'}>Countries</Link>
                    </li>
                    <li>
                        <Link to={'/createActivity'}>Create Activity</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Home;