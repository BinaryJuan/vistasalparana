import './Navbar.css';
import HamNav from '../HamNav/HamNav';

const Navbar = () => {
    return (
        <nav className='navbarContainer' data-aos="fade-in" data-aos-duration="1500" data-aos-once="true">
            <div className='hamNav'>
                <HamNav />
            </div>
            <a to='/mkt-digital'>
                <img className='navbarLogo' src='/logo.png' alt='logo' />
            </a>
            <ul>
                <li><a href='#inicio'>Inicio</a></li>
                <li><a href='#servicios'>Servicios</a></li>
                <li><a href='#nosotros'>Nosotros</a></li>
                <li><a href='#proyectos'>Proyectos</a></li>
                <li><a href='#contacto'>Contacto</a></li>
            </ul>
        </nav>
    )
};

export default Navbar;