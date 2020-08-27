import styled from 'styled-components';
import { media } from '../utils/media';

const H1 = styled.h1`
  font-family: Formular;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 55px;

  @media ${media.laptop} {
    font-size: 42px;
    line-height: 50px;
  }

  @media ${media.tablet} {
    font-size: 30px;
    line-height: 35px;
  }

  @media ${media.mobile} {
    font-size: 25px;
    line-height: 28px;
  }
`;

export default H1;
