import './TitleButton.css';

const TitleButton = () => {
    return (
        <div className='titleButonContainer'>
            <h3>Beneficio para el usuario</h3>
            <div className='titleButtons'>
                <a className='linkTypeOne' href='#servicios'>
                    Conocé nuestros servicios
                </a>
                <a className='linkTypeTwo' href='#servicios'>
                    Ver más
                </a>
            </div>
        </div>
    );
}

export default TitleButton;