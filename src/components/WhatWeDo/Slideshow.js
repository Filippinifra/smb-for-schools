import React from "react";
import { Slide } from "react-slideshow-image";

import "./styles.css";

import "react-slideshow-image/dist/styles.css";

import Slide1 from "images/slideshow/1.PNG";
import Slide2 from "images/slideshow/2.PNG";
import Slide3 from "images/slideshow/3.PNG";
import Slide4 from "images/slideshow/4.PNG";
import Slide5 from "images/slideshow/5.PNG";
import Slide6 from "images/slideshow/6.PNG";

const slideImages = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6];

export const Slideshow = () => {
  return (
    <div>
      <Slide easing="ease" autoplay={false}>
        {slideImages.map((image) => (
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${image})` }} />
          </div>
        ))}
      </Slide>
    </div>
  );
};
