import Slider from "react-slick";
import Image from "../types/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ReactNode } from "react";
type ImageSliderProps = {
  images: Image[] | undefined;
  children: ReactNode;
  isLoading: boolean;
  error: string;
};
const ImageSlider = ({
  images,
  children,
  isLoading,
  error,
}: ImageSliderProps) => {
  const settings = {
    dots: true,

    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {images?.map((image) => (
          <div key={image.id}>
            <img
              className="h-80 max-w-full w-full object-cover "
              src={image.urls.regular}
            />
          </div>
        ))}
      </Slider>
      {children}
    </div>
  );
};

export default ImageSlider;
