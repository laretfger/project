
import './News.css';
import NewsBlog from './newsBlock';

function News() {
  return (
    <div className='news'>
        <h3>Последние новости</h3>
        <ul className='Ul_grid'>
            <NewsBlog/>
            <NewsBlog/>
            <NewsBlog/>
            <NewsBlog/>
            <NewsBlog/>
            <NewsBlog/>
        </ul>
    </div>
  );
}

export default News;