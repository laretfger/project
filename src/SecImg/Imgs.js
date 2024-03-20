import as from './images/assas.jpg';
import './Imgs.css';

function Imgs() {
  
  return (
    <>
    <div className='mainImgs'>
      <div className='imgs'>
          <a href='#'>
            <section>
              <img src={as} className='svg'/>
              <span className ='spanHight'>Игра</span>
            </section>
            <section className='sceLow'>
              <h3>Assasins creed: the best</h3>
              <span className='spanLow'>Ubisoft</span>
            </section>
          </a>
          <a href='#'>
          <section>
              <img src={as} className='svg'/>
              <span className ='spanHight'>Игра</span>
            </section>
            <section className='sceLow'>
              <h3>Assasins creed: the best</h3>
              <span className='spanLow'>Ubisoft</span>
            </section>
          </a>
          <a href='#'>
            <section className='sceHight2'>
              <img src={as} className='svg'/>
              <span className ='spanHight'>Игра</span>
            </section>
            <section className='sceLow2'>
              <h3>Assasins creed: the best</h3>
              <span className='spanLow'>Ubisoft</span>
            </section>
          </a>
          <a href='#'>
          <section className='sceHight2'>
              <img src={as} className='svg'/>
              <span className ='spanHight'>Игра</span>
            </section>
            <section className='sceLow2'>
              <h3>Assasins creed: the best</h3>
              <span className='spanLow'>Ubisoft</span>
            </section>
          </a>
          <a href='#'>
          <section className='sceHight2'>
              <img src={as} className='svg'/>
              <span className ='spanHight'>Игра</span>
            </section>
            <section className='sceLow2'>
              <h3>Assasins creed: the best</h3>
              <span className='spanLow'>Ubisoft</span>
            </section>
          </a>
        </div>
      </div>
      
      </>
  );
}

export default Imgs;