import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarouselComponent.css"; // custom CSS
import {SliderData} from '../../public/products.jsx'


// const slides = [
//   {
//     title: "50% Off For Your First Shopping",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
//     cta: "Visit Collections",
//     image:hero, // Put your image path here
//   },
//   {
//     title: "50% Off For Your First Shopping",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
//     cta: "Visit Collections",
//     image: phone,
//   },
//   {
//     title:"50% Off For Your First Shopping",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
//     cta: "Visit Collections",
//     image: watch,
//   },
//   {
//     title: "50% Off For Your First Shopping",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
//     cta: "Visit Collections",
//     image: wireless,
//   }
// ];

const CarouselComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div className="carousel-wrapper">
      <Slider {...settings}>
        {SliderData.map((slide, index) => (
          <div className="carousel-slide" key={index}>
            <div className="slide-content">
              <div className="text-section">
                <h2>{slide.title}</h2>
                <p>{slide.desc}</p>
                <h6>Visit Collections</h6>
              </div>
              <div className="image-section">
                <img src={slide.cover} alt="image" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselComponent;