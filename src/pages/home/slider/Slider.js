import { Component } from "react";
import "./Slider.css";

import Slider from "react-slick";

import img1 from "./assets/1.JPG";
import img2 from "./assets/2.jpg";
import img3 from "./assets/3.jpg";
import img4 from "./assets/4.jpg";

const images = [
  {
    id: "1",
    alt: "",
    url: img1
  },
  {
    id: "2",
    alt: "",
    url: img2
  },
  {
    id: "3",
    alt: "",
    url: img3
  },
  {
    id: "4",
    alt: "",
    url: img4
  }
];

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: "slides",
      autoplay: true
    };

    return (
      <Slider {...settings}>
        {images.map((image) => {
          return (
            <div className="wrapper" key={image.id}>
              <img className="sliderImg" src={image.url} alt={image.alt} />
              <p className="imgTitle">{image.name}</p>
            </div>
          );
        })}
      </Slider>
    );
  }
}
