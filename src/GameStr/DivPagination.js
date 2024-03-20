import { Link } from'react-router-dom';
import './DivPagination.css';

function DivPagination({ content }){
    return(
        <div className='imgPagination'>
                <section className='titleGame'>
                    <h1>{content.title}</h1>
                    <span>{content.podzag}</span>
                </section>
                <section className='descriptionGame'>
                    <Link to='/'>{content.desription}</Link>
                    
                </section>
            </div>
    );
}

export default DivPagination;