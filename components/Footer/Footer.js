import './Footer.css';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer-distributed">
			<div className="footer-right">
				<NavLink to='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'><img src='/facebook.svg' alt='facebook' /></NavLink>
				<NavLink to='https://www.instagram.com/zn__agency/' target='_blank' rel='noopener noreferrer'><img src='/instagram.svg' alt='instagram' /></NavLink>
				<NavLink to='https://wa.link/3w5tox' target='_blank' rel='noopener noreferrer'><img src='/whatsapp.svg' alt='whatsapp' /></NavLink>
				<NavLink to='https://www.youtube.com/' target='_blank' rel='noopener noreferrer'><img src='/youtube.svg' alt='youtube' /></NavLink>
			</div>

			<div className="footer-left">
				<p className="footer-links">
					<NavLink className="link-1" to='/mkt-digital'>Home</NavLink>
					<NavLink to='/mkt-digital/servicios'>Servicios</NavLink>
					<NavLink to='/mkt-digital/nosotros'>Nosotros</NavLink>
					<NavLink to='/mkt-digital/proyectos'>Proyectos</NavLink>
					<NavLink to='/mkt-digital/contacto'>Contacto</NavLink>
				</p>
				<p>MKT Digital &copy; 2024</p>
			</div>

		</footer>
    )
};

export default Footer;