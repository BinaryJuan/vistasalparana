import './Banner.css';
const Banner = () => {
    return (
        <div className='bannerContainer' data-aos="fade-in" data-aos-duration="1500" data-aos-once="true">
            <h2 className='medium'>Bienvenido a</h2>
            <h2 className='bold'>MKT <span className='semibold'>INMOBILIARIO</span></h2>
            <p>
                ¡Estamos aquí para impulsar tu éxito<br />
                empresarial con nuestras habilidades digitales!
            </p>
        </div>
    )
};

export default Banner;