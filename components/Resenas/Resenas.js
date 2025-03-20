import './Resenas.css';
import Resena from '../Resena/Resena';

const Resenas = () => {
    return (
        <div className='resenasContainer'>
            <h3>Personas que nos recomiendan</h3>
            <div className='resenas'>
                <Resena img='/base.PNG' nombre='CLIENTE1' desc='Lorem ipsum odor amet, consectetuer adipiscing elit. Dolor consectetur suspendisse a dolor aptent non. Fringilla cubili.' />
                <Resena img='/base.PNG' nombre='CLIENTE2' desc='Lorem ipsum odor amet, consectetuer adipiscing elit. Dolor consectetur suspendisse a dolor aptent non. Fringilla cubili.' />
                <Resena img='/base.PNG' nombre='CLIENTE3' desc='Lorem ipsum odor amet, consectetuer adipiscing elit. Dolor consectetur suspendisse a dolor aptent non. Fringilla cubili.' />
            </div>
        </div>
    );
}

export default Resenas;