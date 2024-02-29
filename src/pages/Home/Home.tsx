import { FC } from 'react';

import HeroSection from '../../components/Section/HeroSection/HeroSection';
import PopularPosts from '../../components/Section/PopularPosts/PopularPosts';
import LatestPosts from '../../components/Section/LatestPosts/LatestPosts';

const Home: FC = () => {
  return (
    <>
      <HeroSection />
      <PopularPosts />
      <LatestPosts />
    </>
  );
};

export default Home;
