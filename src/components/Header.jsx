import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';

function Header() {
    return (
        <>
            <header>
                <img src={logo} alt='LittleLemon Logo'/>
            </header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/book">Book</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default Header;
