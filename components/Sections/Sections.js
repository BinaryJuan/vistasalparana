import './Sections.css';
import Section from '../Section/Section';

const Sections = () => {
    return (
        <div className='sectionsContainer'>
            <h3>Lo que hace diferente a nuestro servicio</h3>
            <div className='sections'>
                <Section img='/base.PNG' titulo='El problema' desc='Lorem ipsum odor amet, consectetuer adipiscing elit. Dolor consectetur suspendisse a dolor aptent non. Fringilla cubili.' />
                <Section reverse={'reverseSection'} img='/base.PNG' titulo='El problema' desc='Lorem ipsum odor amet, consectetuer adipiscing elit. Dolor consectetur suspendisse a dolor aptent non. Fringilla cubili.' />
                <Section img='/base.PNG' titulo='El problema' desc='Lorem ipsum odor amet, consectetuer adipiscing elit. Dolor consectetur suspendisse a dolor aptent non. Fringilla cubili.' />
            </div>
        </div>
    );
}

export default Sections;