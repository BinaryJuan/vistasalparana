import './ServiceInfo.css';

const ServiceInfo = () => {
    return (
        <div className='serviceInfoContainer'>
            <div className='serviceBox'>
                <h4>14.6k</h4>
                <p>Clientes satisfechos</p>
            </div>
            <div className='serviceBox'>
                <h4>24hs</h4>
                <p>De protección</p>
            </div>
            <div className='serviceBox'>
                <h4>4.8/5</h4>
                <p>Reseñas en Google</p>
            </div>
        </div>
    );
}

export default ServiceInfo;