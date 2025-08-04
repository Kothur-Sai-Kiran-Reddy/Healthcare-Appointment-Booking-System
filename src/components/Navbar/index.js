import {Link} from 'react-router-dom'
import './index.css'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <img src="https://i.pinimg.com/originals/4f/60/30/4f60305f48b01e05db6b53083abf71dd.png" className='nav-logo' alt = ""/>
            <ul className='nav-items-list'>
                <Link to="/" style = {{textDecoration : 'none', color : 'black'}}>
                    <li>Home</li>
                </Link>
                <Link to="/doctors" style={{ textDecoration: 'none', color: 'black' }}>
                    <li>Doctors</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar