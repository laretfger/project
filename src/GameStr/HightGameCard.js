import { Link } from'react-router-dom';
import './HightGameCard.css';

function HightGameCard() {
    return (
    <>
        <Link to="/" className='HightGameCard'>
            <div className='HightGameCardImg'></div>
            <span className='spanHightGameCard'>20 марта</span>
        </Link>
    </>
  );
}

export default HightGameCard;