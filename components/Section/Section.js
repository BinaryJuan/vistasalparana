import './Section.css';

const Section = ({reverse, titulo, desc, img}) => {
    return (
        <section className={reverse}>
            <img src={img} alt='imagen' />
            <div className='info'>
                <h4>{titulo}</h4>
                <p>
                    {desc}
                </p>
                <a href='#servicios'>
                    ¡Te ayudamos!
                </a>
            </div>
        </section>
    );
}

export default Section;