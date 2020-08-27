import styled from 'styled-components';
import Icon from '../../components/Icon';

export const CarouselWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 340px;
  position: relative;

  & .alice-carousel__wrapper {
    transform: translate3d(1410px, 0px, 0px);
    overflow: visible;
  }

  & .alice-carousel__stage {
    transform: none;
  }

  & .alice-carousel__stage-item {
    margin-right: 30px;
  }
`

export const CarouselButton = styled.button`
  background: #FFFFFF;
  border: none;
  align-items: center;
  display: flex;
  box-shadow: 0px 4px 20px rgba(143, 149, 172, 0.2);
  border-radius: 30px;
  cursor: pointer;
  flex-shrink: 0;
  justify-content: center;
  height: 50px;
  position: absolute;
  left: ${({ isRight }) => !isRight && '-25px' };
  right: ${({ isRight }) => isRight && '-25px' };
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  z-index: 1;
`;

export const CarouselWidth = styled.div`
  top: 0;
  position: absolute;
  width: 1410px;
`;

export const RotatedIcon = styled(Icon)`
  transform: rotate(180deg);
`;

export const ImageWrapper = styled.div`
  width: 470px;
`;
