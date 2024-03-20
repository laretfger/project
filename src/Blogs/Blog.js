
import './Blogs.css';

function Blog() {
    return(
        <li className='BlogLi'>
            <div className='blog'>
                <a href='#' className='images'></a>
                <section className='group'>
                    <section className='avtor'>
                    <span className='title'>запись со стрима</span>
                    <a href='#' className='content-maker'>
                        <span>гокаоdffefee</span>
                    </a>
                    </section>
                    <span className='refBlogSpan'><a href='#' className='refBlog'><h3>Последние новостиuhy iefiefiefifie feuuuuuuuuuuu</h3></a></span>
                    <span className='date'>22-01-24</span>
                </section>
            </div>       
        </li>
    )
};

export default Blog;