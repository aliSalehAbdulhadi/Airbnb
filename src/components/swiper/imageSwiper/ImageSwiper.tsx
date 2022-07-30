/* eslint-disable @next/next/no-img-element */
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../../../styles/swiper.module.scss";
import "swiper/css";
import "swiper/css/navigation";

const ImageSwiper = ({ url }: { url: string[] }) => {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      className={styles.swiperImages}
      watchOverflow={true}
    >
      {url.map((url) => (
        <SwiperSlide key={url}>
          <div className="h-[290px] border rounded-xl overflow-hidden">
            <img
              className="select-none h-[100%] w-[100%] object-cover"
              src={url}
              alt="image"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSwiper;
