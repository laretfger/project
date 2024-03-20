import { Routes, Route } from'react-router-dom';
import Header from'./header/Header';
import Main from'./Main/Main';
import BlogStr from'./BlogsStr/BlogStr';
import NewsStr from'./NewsStr/NewsStr';
import GamesStr from'./GameStr/GameStr';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/blogStr" element={<BlogStr/>}/>
        <Route path="/newsStr" element={<NewsStr/>}/>
        <Route path="/gameStr" element={<GamesStr/>}/>
      </Routes>
    </>
  );
}

export default App;
