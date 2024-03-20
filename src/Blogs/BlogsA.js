import Blog from './Blog';
import BlogHight from './BlogHight';
import BlogLow from './BlogLow';
import './Blogs.css';

function Blogs() {
  return (
    <ul className='blogs'>
      <Blog/>
      <Blog/>
      <Blog/>
      <Blog/>
      <BlogHight/>
    </ul>
  );
}

export default Blogs;