import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import Icon from '../../components/Icon';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from '../../images/1.jpg';
import image2 from '../../images/2.jpg';

import {
  CarouselWrapper,
  CarouselButton,
  CarouselWidth,
  RotatedIcon,
  ImageWrapper
} from './styled';

const responsive = {
  0: {
    items: 1
  },
  1024: {
    items: 3
  },
}

class Carousel extends React.Component {
  items = [image1, image2, image1, image2]

  state = {
    galleryItems: this.items.map(
      (i) => {
        return (
          <ImageWrapper key={i}>
            <img src={i} alt="img" className="sliderimg"/>
          </ImageWrapper>
        )
      }
    ),
  }

  render() {

    return (
      <CarouselWrapper>
        <CarouselButton onClick={() => this.Carousel.slidePrev()}>
          <Icon name="arrowRight" height="12px" width="7px" />
        </CarouselButton>

        <CarouselWidth>
          <AliceCarousel
            // autoPlay
            // autoPlayInterval="3000"
            items={this.state.galleryItems}
            responsive={responsive}
            ref={(el) => (this.Carousel = el)}
            buttonsDisabled
          />
        </CarouselWidth>

        <CarouselButton isRight onClick={() => this.Carousel.slideNext()}>
          <RotatedIcon name="arrowRight" height="12px" width="7px" />
        </CarouselButton>
      </CarouselWrapper>
    );
  }
}

export default Carousel;
