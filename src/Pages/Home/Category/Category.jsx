import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
      subHeading={"Form 11.00am to 10.00pm"}
      heading={'ORDER ONLINE'}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-20 mt-10 mx-72"
      >
        <SwiperSlide>
          <img src={img1} />
          <p className="-mt-16 text-center uppercase text-3xl text-white">
            Salad
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} />
          <p className="-mt-16 text-center uppercase text-3xl text-white">
            Salad
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} />
          <p className="-mt-16 text-center uppercase text-3xl text-white">
            Salad
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} />
          <p className="-mt-16 text-center uppercase text-3xl text-white">
            Salad
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} />
          <p className="-mt-16 text-center uppercase text-3xl text-white">
            Salad
          </p>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
