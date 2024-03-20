import Blog from '../Blogs/Blog';
import NewsGames from './NewsGames';
import './NewsStr.css';

function NewsStr() {
    let resultArticles = [];
    let resultGameNews = [];
    for(let i = 0, j = 0; i < 9; i++, j+=2){
        resultArticles.push(<Blog key={i}/>);
        resultGameNews.push(<NewsGames key={j-1}/>)
        resultGameNews.push(<NewsGames key={j}/>)
    }
    return (
    <>
        <main className='mainGameNews'>
            <div className='layout'>
                <section className='gameNews'>
                    <h1>Игровые новости</h1>
                    {resultGameNews}
                </section>
                <section className='articles'>
                    <h1>Все обсуждают</h1>
                    <ul className='discussing'>
                        {resultArticles}
                    </ul>
                </section>
            </div>
        </main>
    </>
  );
}

export default NewsStr;