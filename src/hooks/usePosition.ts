import { useEffect, useState } from 'react';

export const usePosition = () => {
  const [position, setPosition] = useState(0);
  const [isScrollDown, setIsScrollDown] = useState(false);
  useEffect(() => {
    const handleMove = () => {
      setPosition(window.scrollY);
      const top = window.scrollY;
      if (position > top) {
        setTimeout(() => {
          setIsScrollDown(false);
        }, 200);
      } else if (position < top && position > 400) {
        setTimeout(() => {
          setIsScrollDown(true);
        }, 200);
      }
    };

    window.addEventListener('scroll', handleMove);
    return () => {
      window.removeEventListener('scroll', handleMove);
    };
  }, [position]);

  return { position, isScrollDown };
};
