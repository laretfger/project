import './Pagination.css';
import {useRef, useState, useEffect} from 'react';

function Pagination(props){
    const circle1 = useRef();
    const circle2 = useRef();
    const circle3 = useRef();
    console.log(props)
        function smena(a){
            a == 0? circle1.current.style.fill = "white" : circle1.current.style.fill = "rgb(58, 57, 57)";
            a == 1? circle2.current.style.fill = "white" : circle2.current.style.fill = "rgb(58, 57, 57)";
            a == 2? circle3.current.style.fill = "white" : circle3.current.style.fill = "rgb(58, 57, 57)";
        }
        useEffect(() => {
            smena(props.index);
        }, [props.index]);
    return(
        <div className='pagination'>
        <span className='spanSvg'>
          <svg viewBox='0 0 30 30'>
            <circle r="11" cx="18" cy="18" fill="white" ref={circle1}></circle>
          </svg>
          <span className='swiper' onClick={() => props.handleSelect(0)}>1</span>
        </span>
        <span className='spanSvg'>
          <svg viewBox='0 0 30 30'>
          <circle r="11" cx="18" cy="18" fill="rgb(58, 57, 57)" ref={circle2}></circle>
          </svg>
          <span className='swiper' onClick={() => props.handleSelect(1)}>2</span>
        </span>
        <span className='spanSvg'>
          <svg viewBox='0 0 30 30'>
          <circle r="11" cx="18" cy="18" fill="rgb(58, 57, 57)" ref={circle3}></circle>
          </svg>
          <span className='swiper' onClick={() => props.handleSelect(2)}>3</span>
        </span>
      </div>
    );
}
    
export default Pagination;