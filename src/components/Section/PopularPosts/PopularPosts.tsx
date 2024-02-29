import { FC, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import styles from './PopularPosts.module.scss';
import SimpleCard from '../../Card/SimpleCard';
import { useResize } from '../../../hooks/useResize';
const PopularPosts: FC = () => {
  const size = useResize();
  const [slides, setSlides] = useState(4);

  useEffect(() => {
    if (size.isScreenXl) {
      setSlides(3.5);
    } else if (size.isScreenLg) {
      setSlides(3);
    } else if (size.isScreenMd) {
      setSlides(2.5);
    } else if (size.isScreenSm) {
      setSlides(1.5);
    }
  }, [size]);

  return (
    <div className={styles['popular-posts']}>
      <h2>Popular Posts</h2>
      <div className={styles['popular-posts-list']}>
        <Swiper slidesPerView={slides}>
          <SwiperSlide>
            <SimpleCard />
          </SwiperSlide>
          <SwiperSlide>
            <SimpleCard />
          </SwiperSlide>
          <SwiperSlide>
            <SimpleCard />
          </SwiperSlide>
          <SwiperSlide>
            <SimpleCard />
          </SwiperSlide>
          <SwiperSlide>
            <SimpleCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default PopularPosts;
