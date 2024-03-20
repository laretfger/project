import Blog from '../Blogs/Blog';
import './BlogsStr.css';

function BlogStr() {
    let result = [];
    for(let i = 0; i < 9; i++){
        result.push(<Blog key={i}/>);
    }
    return (
    <>
        <main className='blogStrMain'>
            <h1 className='blogStrH1'>Блоги</h1>
            <ul className='blogsStr'>
                {result}
            </ul>
        </main>
    </>
  );
}

export default BlogStr;