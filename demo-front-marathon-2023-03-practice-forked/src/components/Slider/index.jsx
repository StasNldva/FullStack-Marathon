import { useEffect, useState } from 'react';
import './Slider.css';
import axios from 'axios';

const defaultSlides = [
  'https://images.pexels.com/photos/5926238/pexels-photo-5926238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=600',
];

function Slider() {
  const [slides, setSlides] = useState(defaultSlides);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(nextSlide, 3000);
    return () => {
      clearTimeout(timer);
    };
  });

  useEffect(() => {
    // DOWNLOAD PLACE
    axios('https://q1mngq.sse.codesandbox.io/slides').
    then(data=>setSlides(data.data));
  }, []);

  function prevSlide() {
    if (currentSlide === 0) {
      setCurrentSlide(slides.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  }

  function nextSlide() {
    if (currentSlide === slides.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }

  function firstSlide(){
    if(currentSlide !== 0){
      setCurrentSlide(0);
    }
  }

  return (
    <div className="sliderContainer">
      <img src={slides[currentSlide]} alt="slide" />
      <button onClick={prevSlide}>Previous</button>
      <button onClick={nextSlide}>Next</button>
      <button onClick={firstSlide}></button>
    </div>
  );
}

export default Slider;
