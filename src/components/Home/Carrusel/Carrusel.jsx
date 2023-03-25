import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { Pagination } from "swiper";
import SlideCarrusel from "./SlideCarrusel/SlideCarrusel";
import logo from "../../../../public/Watches.png";
import logo2 from "../../../../public/Galaxy_m33.png";
export default function Carrusel() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="swiperCarousel"
      >
        <SwiperSlide>
          <SlideCarrusel
            descripcion="Best Deal Online on smartwatches"
            name="SMART WEARABLE"
            desc={80}
            imagenS={logo}
            color="blueSlide"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideCarrusel
            descripcion="Best Deal Online on smartphone"
            name="SMART MODEL"
            desc={80}
            imagenS={logo2}
            ancho={100}
            alto={100}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export async function getServerSideProps(ctx) {
  return {
    props: {
      data: null,
    },
  };
}
