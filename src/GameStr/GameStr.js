import './GameStr.css';
import Blog from'../Blogs/Blog';
import HightGameCard from'./HightGameCard';
import LowGameCard from'./LowGameCard';
import Carousel from 'react-bootstrap/Carousel';
import DivPagination from './DivPagination';
import DivSwiperPagination from './DivSwiperPagination';
import {useState} from 'react';

const content =[{title: "Игровые новости", podzag: "efrgtgrrgrg", desription: "Все обсуждают"}, 
  {title: "Новая игра", podzag: "новая", desription: "Обсуждают"},
  {title: "Игровые движки", podzag: "Как делаютстся игры", desription: "Lorem ipsum"}
]

function GamesStr({reliz, attention1, attention2}) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
    return (
    <>
        <main className='mainGameStr'>
          <Carousel controls={false} activeIndex={index} onSelect={handleSelect} interval={2000} indicators={false}>
            <Carousel.Item>
              <DivPagination content={content[0]}/>
            </Carousel.Item>
            <Carousel.Item>
              <DivPagination content={content[1]}/>
            </Carousel.Item>
            <Carousel.Item>
              <DivPagination content={content[2]}/>
            </Carousel.Item>
          </Carousel>
            <DivSwiperPagination index={index} handleSelect={handleSelect}/>
            
            <h1 className='reliz'>Ожидаемые релизы</h1>
            <section className='secGameCardHight'>
                <HightGameCard/>
                <HightGameCard/>
                <HightGameCard/>
                <HightGameCard/>
            </section>
            <h1 className='attention'>В центре внимания</h1>
            <section className='secGameCardLow'>
                <LowGameCard/>
                <LowGameCard/>
                <LowGameCard/>
                <LowGameCard/>
                <LowGameCard/>
            </section>
            <h1 className='attention'>Во что поиграть</h1>
            <ul className='gameStrBlogs'>
                <Blog/>
                <Blog/>
                <Blog/>
            </ul>
        </main>
    </>
  );
}

export default GamesStr;