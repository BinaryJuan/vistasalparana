"use client";
import './HamNav.css';
import { useState, useEffect } from 'react';

const HamNav = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(prevToggle => !prevToggle);
    };

    useEffect(() => {
        if (toggle) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }
        
        return () => {
            document.body.style.overflowY = 'auto';
        };
    }, [toggle]);

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth > 630 && toggle) {
              setToggle(false);
          }
        };
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [toggle]);

    return (
        <div>
            <div className='hamNavContainer' >
                <img className='ham' src='/ham.svg' alt='menu' onClick={handleToggle} />
                {toggle && (
                    <nav className='menu'>
                        <div className='miniNav'>
                            <img className='miniNavbarLogo' src='/logo.png' alt='logo' />
                            <img className='cross' src='/cross.svg' alt='cerrar' onClick={handleToggle}  />
                        </div>
                        <ul>
                        <li><a href='#inicio'>Inicio</a></li>
                        <li><a href='#servicios'>Servicios</a></li>
                        <li><a href='#nosotros'>Nosotros</a></li>
                        <li><a href='#proyectos'>Proyectos</a></li>
                        <li><a href='#contacto'>Contacto</a></li>
                        </ul>
                    </nav>
                )}
            </div>
        </div>
    );
};

export default HamNav;

