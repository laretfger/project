import './NewsGames.css';
import { Link } from'react-router-dom';

function NewsGames(){
    return(
            <div className='mainDivContentFlex'>
                <Link to='/articles' className='newsGameImg'></Link>
                <div className='newsDivContentFlex'>
                    <Link  to='/articles' className='newsGameLink'>jjieieifeoeekfkefkoefkoef4efdwwwwwdefgddffdeddfdddddddddddddd</Link>
                    <div className='infoRow'>
                        <span className='infoRow_date'>Сегодня, 22:00</span>
                    </div>
                </div>
            </div>
    )
};


export default NewsGames;