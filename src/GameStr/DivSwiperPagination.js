import './DivPagination.css';
import {useRef, useEffect} from 'react';

function DivSwiperPagination({index, handleSelect}){    
    const circle1 = useRef();
    const circle2 = useRef();
    const circle3 = useRef();
    function smena(a){
        a == 0? circle1.current.style.fill = "white" : circle1.current.style.fill = "rgb(58, 57, 57)";
        a == 1? circle2.current.style.fill = "white" : circle2.current.style.fill = "rgb(58, 57, 57)";
        a == 2? circle3.current.style.fill = "white" : circle3.current.style.fill = "rgb(58, 57, 57)";
    }
    useEffect(() => {
        smena(index);
    }, [index]);
    return(        
            <div className='svgCircle'>
                        <span className='spanSvgGameStr'>
                            <svg viewBox='0 0 30 30'>
                                <circle r="13" cx="15" cy="15" fill="white" ref={circle1}></circle>
                            </svg>
                            <span className='swiperGameStr' onClick={() => handleSelect(0)}>1</span>
                        </span>
                        <span className='spanSvgGameStr'>
                            <svg viewBox='0 0 30 30'>
                                <circle r="13" cx="15" cy="15" fill="rgb(58, 57, 57)" ref={circle2}></circle>
                            </svg>
                            <span className='swiperGameStr' onClick={() => handleSelect(1)}>2</span>
                        </span>
                        <span className='spanSvgGameStr'>
                            <svg viewBox='0 0 30 30'>
                                <circle r="13" cx="15" cy="15" fill="rgb(58, 57, 57)" ref={circle3}></circle>
                            </svg>
                            <span className='swiperGameStr' onClick={() => handleSelect(2)}>3</span>
                        </span>
                    </div>
    );
}


export default DivSwiperPagination;