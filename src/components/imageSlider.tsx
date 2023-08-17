import React, { useState, useEffect } from 'react';
import './Section2'
import '../styles/Section2.scss'

const ImageSlider: React.FC = () => {
  const [idx, setIdx] = useState(0);
  const imgRefs = React.useRef<HTMLDivElement | null>(null);
  const imgElements = React.useRef<NodeListOf<HTMLImageElement> | null>(null);
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    imgElements.current = document.querySelectorAll('#imgs img');
    imgRefs.current = document.getElementById('imgs') as HTMLDivElement | null;
    
    if (imgRefs.current && imgElements.current) {
      intervalRef.current = setInterval(() => {
        run();
        changeImage();
      }, 2000);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  },);
    
    const run = () => {
      setIdx(prevIdx => (prevIdx + 1) % (imgElements.current?.length || 1));
      changeImage();
    };
    
    const changeImage = () => {
      if (imgRefs.current && imgElements.current) {
        const imgWidth = 500;
        imgRefs.current.style.transform = `translateX(${-idx * imgWidth}px)`;
      }
    };
    
    const resetInterval = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(run, 2000);
      }
    };

    const handleRightClick = () => {
      setIdx(prevIdx => (prevIdx + 1) % (imgElements.current?.length || 1));
      changeImage();
      resetInterval();
    };
    
    const handleLeftClick = () => {
      setIdx(prevIdx =>
        prevIdx === 0 ? imgElements.current?.length ? prevIdx - 1 : 0 : prevIdx - 1
        );
        changeImage();
        resetInterval();
      };

  return (
    <div>
      <div id="#imgs">
        {Array.from(imgElements.current || []).map((imgElement, index) => (
          <img key={index} src={imgElement.src} alt={`Slide ${index}`} />
        ))}
      </div>     
        <button id="left" onClick={handleLeftClick}>Esquerda</button>
        <button id="right" onClick={handleRightClick}>Direita</button>
    </div>
  );
};

export default ImageSlider;
