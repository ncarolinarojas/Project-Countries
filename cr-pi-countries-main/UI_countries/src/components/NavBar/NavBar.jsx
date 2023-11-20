import {NavLink} from 'react-router-dom'
import '../../styles/navBar.scss'
import logo from '../../assets/logo.svg'

const NavBar = () => {
  return (
    <nav className='navbar'>
        <div className='navbar__menu'>
        <img src={logo} alt="logo" style={{maxWidth: '200px'}}/>
        <NavLink to={'/home'}> Home </NavLink>
        <NavLink to={'/createActivity'}> Create Activity</NavLink>
        </div>
    </nav>
  )
}

export default NavBar