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
                </ul>
            </nav>
            <h1>Welcome To Little Lemon</h1>
        </>
    );
}

export default Header;
