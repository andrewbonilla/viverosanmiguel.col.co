"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function HeroCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroImages = ['/presentation_1.png', '/presentation_2.png', '/presentation_3.png'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="hero-image-container" style={{ position: 'relative', width: '450px', height: '550px', overflow: 'hidden', borderRadius: '20px' }}>
      {heroImages.map((src, index) => (
        <Image
          key={src}
          src={src}
          priority={index === 0}
          alt={`Presentación ${index + 1}`}
          fill
          className="hero-image"
          style={{
            objectFit: 'cover',
            opacity: currentImageIndex === index ? 1 : 0,
            transition: 'opacity 0.8s ease-in-out',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            transform: 'none'
          }}
        />
      ))}
    </div>
  );
}
