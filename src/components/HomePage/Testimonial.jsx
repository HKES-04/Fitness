import testimonialData from "../../utils/testimonialData";
import TestimonialCard from "../../utils/TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Testimonial.css";

function Testimonial() {
  return (
    <section id="testimonial-section" className="review">
      <div className="section-container review-container">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {testimonialData.map((card, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <TestimonialCard
                key={index}
                name={card.name}
                job={card.job}
                description={card.description}
                img={card.img}
                stars={card.stars}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonial;
