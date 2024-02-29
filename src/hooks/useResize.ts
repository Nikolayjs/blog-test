import { useEffect, useState } from 'react';
import { SCREEN_LG, SCREEN_MD, SCREEN_SM, SCREEN_XL, SCREEN_XXL } from '../utils/breakpoints';

export const useResize = () => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [width]);
  return {
    width,
    isScreenSm: width >= SCREEN_SM || width < 500,
    isScreenMd: width >= SCREEN_MD,
    isScreenLg: width >= SCREEN_LG,
    isScreenXl: width >= SCREEN_XL,
    isScreenXxl: width >= SCREEN_XXL,
  };
};
