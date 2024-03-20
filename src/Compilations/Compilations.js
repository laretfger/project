import { Link } from'react-router-dom';
import './Compilations.css';

function Compilations({ setIsNews }) {
  return (
    <aside className='Compilations'>
        <h3>Подборки</h3>
        <ul className='Compilations_ul'>
            <li><Link to='/' onClick={() => setIsNews(true)}>Свежее</Link></li>   
            <li><Link to='/' onClick={() => setIsNews(false)}>Интересные блоги</Link></li>
            <li><Link to='/' onClick={() => setIsNews(false)}>Свежие статьи</Link></li>
            <li><Link to='/' onClick={() => setIsNews(false)}>Инфакт</Link></li>
            <li><Link to='/' onClick={() => setIsNews(false)}>Записи стримов</Link></li>
            <li><Link to='/' onClick={() => setIsNews(false)}>Настройка ленты</Link></li>  
        </ul>
    </aside>
  );
}

export default Compilations;