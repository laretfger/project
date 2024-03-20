import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


function ControlledCarousel(props) {
  
  const children = React.Children.toArray(props.children);
  return (
    <>
        <Carousel controls={false} activeIndex={props.index} onSelect={props.handleSelect} interval={2000} indicators={false}>
        <Carousel.Item>
            {children[0]}
        </Carousel.Item>
        <Carousel.Item>
            {children[0]}
        </Carousel.Item>
        <Carousel.Item>
            {children[0]}
        </Carousel.Item>
        </Carousel>
        {children[1]}
    </>
  );
}

export default ControlledCarousel;