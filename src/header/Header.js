import { Link } from'react-router-dom';
import './Header.css';
import Auth from'../Auth/Auth';
import {useRef, useState, useEffect} from 'react';

function Header() {
  const [showModal, setShowModal] = useState(false);
  return (
    <header>
      <Link to='/' className='logo'></Link>
      <nav className='ref'>
        <ul>
          <li><Link to='/newsStr'>Новости</Link></li>
          <li><Link to='/blogStr'>Блоги</Link></li>
          <li><Link to='/gameStr'>Игры</Link></li>
          <li><Link to='/'>Помощь</Link></li>
        </ul>
      </nav>
      <div className='img'>
        <button className='search'></button>
        <button className='comment'></button>
        <button className='profile' onClick={() => setShowModal(true)}></button>
      </div>
      { showModal && <Auth setShowModal={setShowModal}/> }
    </header>
  );
}

export default Header;