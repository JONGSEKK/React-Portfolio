import React, { useEffect, useState } from 'react';
import img1 from '../assets/pngwing.com.png';
import img2 from '../assets/pngwing.com1.png';
import img3 from '../assets/pngwing.com2.png';
import img4 from '../assets/pngwing.com3.png';
import img5 from '../assets/pngwing.com4.png';
import img6 from '../assets/pngwing.com5.png';
import img7 from '../assets/pngwing.com6.png';
import img8 from '../assets/pngwing.com7.png';

function Mousemove() {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    // Create an array of random positions for the images
    const generateRandomPositions = () => {
      const positions = [];

      for (let i = 0; i < 8; i++) { // assuming you have 8 images
        positions.push({
          x: Math.random() * (window.innerWidth - 100), // subtracting 100 assuming each image has a width of 100px
          y: Math.random() * (window.innerHeight - 100) // subtracting 100 assuming each image has a height of 100px
        });
      }

      return positions;
    };

    setPositions(generateRandomPositions());
  }, []);

  const handleMouseMove = (e) => {
    const containerRect = e.currentTarget.getBoundingClientRect();
    const centerX = containerRect.left + containerRect.width / 2;
    const centerY = containerRect.top + containerRect.height / 2;

    const deltaX = (e.clientX - centerX) / 20; // Adjust the divisor for more/less movement
    const deltaY = (e.clientY - centerY) / 20; // Adjust the divisor for more/less movement

    const images = e.currentTarget.querySelectorAll('img');
    images.forEach(img => { 
      img.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    });
  };

  return (
    <div onMouseMove={handleMouseMove} style={{ height: '100vh', position: 'relative' }}>
      <div>Programming language</div>
      <img src={img1} style={{ position: 'absolute', top: positions[0]?.y, left: positions[0]?.x }} className='w-[100px]' />
      <img src={img2} style={{ position: 'absolute', top: positions[1]?.y, left: positions[1]?.x }} className='w-[100px]' />
      <img src={img3} style={{ position: 'absolute', top: positions[2]?.y, left: positions[2]?.x }} className='w-[100px]' />
      <img src={img4} style={{ position: 'absolute', top: positions[3]?.y, left: positions[3]?.x }} className='w-[100px]' />
      <img src={img5} style={{ position: 'absolute', top: positions[4]?.y, left: positions[4]?.x }} className='w-[100px]' />
      <img src={img6} style={{ position: 'absolute', top: positions[5]?.y, left: positions[5]?.x }} className='w-[100px]' />
      <img src={img7} style={{ position: 'absolute', top: positions[6]?.y, left: positions[6]?.x }} className='w-[100px]' />
      <img src={img8} style={{ position: 'absolute', top: positions[7]?.y, left: positions[7]?.x }} className='w-[100px]' />
    </div>
  );
}

export default Mousemove;
