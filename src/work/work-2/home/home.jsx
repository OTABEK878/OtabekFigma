import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./home.css";

const images = [
  "./img/image (9).jpg",
  "https://s3-alpha-sig.figma.com/img/19b1/35fa/82247c3911d5e2ac653e18feef14c14c?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rJDPlD7I39HdKyXVHt2czTwdTNV34p3nUT3ypwI8QG8QA7irogAlbzjUcFlq-rYPDBCOiOEqNaEJZ0jGx-DGlL6-3-0BoeSgCl55AD3OXbhlldSlZkvegdU~j1Qhpd-3W9akHMHltfGnf5i8WgmvOswNFfZlwy6RF4BHw06Hb4~U4fFCz-MjyAnEnCqgD7lzVaa7Qg2-NOJziNUNAUAammCeznRIad8hpWZlaEd7MER6r6f1wUCXj7RSF6sUzrmmPrLskR7IO-Y-sCSH-AKhEQWrh4pMtNM~7-vSrRdvMMg1EAIhx-8tHaeU0sUZ1mGJ3MREc8MMf2Xp2EVDJjjQ~g__",
  "https://s3-alpha-sig.figma.com/img/b83e/5fdc/5ce40eac8703b8b19b8fab246ce618c3?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SiAONomwiHqpL9DHdLGLa7lGgkPFhMFPoZ7wqe0Jn1Das5pmP3FcSvNHhAZCsu4UlEwb3n3aHrKYf6BlffF3pw0utQgDl5E~~1kvSHXtL4HXeFQSSZaHfKCtutMlidOSRCTYvsGuOH1r2Z4~YsBW5PiGbS6R3fyf2YLgu27WHSKvGvqV167DJlBcK-1DotKZ6TosC7jsXpKyrLkPMiNVa6aigrBi970Wq4DNf3AYE6GCGVrRR2f3CTmnEs95nFJIU343RwPRXmBKmbcgcmm~q7w77Lf2fMJbPRl~X~zRVqpk6ITLgKH82jFEIYus1OJNgzl8~ELvOM99CgjHfS7Enw__",
  "https://s3-alpha-sig.figma.com/img/b78e/45fe/28dcc07b0c79ad2d76ef9b574223f1e4?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GDUmJOO-ZnKGhM~s3imu9~-WL1hC4ir1IwDlYNWMn91TSwSdnXbDKxePMMHO06wG2azdh4s8H8cZw7kP9ZLxwjoNZaIR827rWEL5qy1pNG-179cfd4-39Oss2V6nRED8OaPDKLsZNNKEELjlbiYslp79alGVZi~hQ0wZ3ITCpPzrbCnvmhxDJ3xkdPLNaSkwxUg7tSnO7snZ1hY-uTB0s0nSlaPbm6aERlka6~7EtB3bsZM~a0WZWRZvrwPTOnTfRousTODuQGiAjnP8oytjbeHXIaIn~6JHVo2qbUUSfL3LNFnK0Zo5NLoNmGX~P~byg-JNkds6nzILoJKj0SdPpw__",
];

const Home = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="home-container23">
      <div className="breadcrumb" data-aos="fade-up">
        <a href="/work">Homepage</a> / <a href="/work-2">Work</a> / <span>Modern Cottage</span>
      </div>

      <h1 className="title3" data-aos="fade-up">Modern Cottage</h1>

      <Swiper
        modules={[Navigation, Thumbs]}
        navigation
        loop={true}
        thumbs={{ swiper: thumbsSwiper }}
        className="main-slider"
        data-aos="zoom-in"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} data-aos="fade-up">
            <img src={img} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="thumbs-wrapper">
        <Swiper
          onSwiper={setThumbsSwiper}
          slidesPerView={4}
          watchSlidesProgress={true}
          watchSlidesVisibility={true}
          allowTouchMove={false}
          className="thumb-slider"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} className="thumb-slide" data-aos="zoom-in" data-aos-delay={index * 100}>
              <img src={img} alt={`Thumbnail ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
