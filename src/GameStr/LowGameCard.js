import { Link } from'react-router-dom';
import './LowGameCard.css';

function LowGameCard() {
    return (
    <>
        <Link to="/" className='LowGameCard'>
            <div className='LowGameCardImg'></div>
            <span className='spanLowGameCard'>20 марта</span>
        </Link>
    </>
  );
}

export default LowGameCard;