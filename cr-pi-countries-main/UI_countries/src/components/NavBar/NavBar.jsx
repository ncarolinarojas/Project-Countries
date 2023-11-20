import {NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='navbar'>
        <NavLink to={'/home'}> Home </NavLink>
        <NavLink to={'/createActivity'}> Create Activity</NavLink>
    </nav>
  )
}

export default NavBar