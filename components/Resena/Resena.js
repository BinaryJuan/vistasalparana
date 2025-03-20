import './Resena.css';

const Resena = ({img, nombre, desc}) => {
    return (
        <div className='resenaContainer'>
            <div className='title'>
                <img src={img} alt={nombre} />
                <h5>{nombre}</h5>
            </div>
            <p>
                {desc}
            </p>
        </div>
    );
}

export default Resena;