import { Link } from 'react-router-dom';
function NavBar() {
    return (
        <div className="navbar">
            <div className="navbar-brand">
                <Link to="/" >Movie App</Link>
            </div>
            <div className='navbar-links'>
                <Link to="/" className='nav-link'>Home</Link>
                <Link to="/favorities" className='nav-link'>Favorities</Link>
            </div>
        </div>
    );
}

export default NavBar;