// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useContext } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import Card from "./Card";
import { TestimonialsContext, TestimonialsContextProvider } from "../contexts/testimonialsContext";


const Testimonials = () => {
  const data = useContext(TestimonialsContext);

  return (
    <section id="testimonials">
      <h2 className="header-land-title">Kind words <br/> <span className="header-title-grey">from our clients</span></h2>
      <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={30}
      centeredSlides={true}
      breakpoints={{
        // when window width is >= 320px
        0:{
          slidesPerView: 1
        },
        // when window width is >= 480px
        900:{
          slidesPerView: 2,
          spaceBetween: 30
        },
        // when window width is >= 640px
        1450:{
          slidesPerView: 3,
          spaceBetween: 40
        },
      }}
      className="mySwiper">
        {data.map((el, index) => {
          return (
            <SwiperSlide>
              {({ isActive }) => (
                <Card key={index+1} testimonial={el} active={isActive}/>
              )}
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  );
  };
  
  export default Testimonials;
  