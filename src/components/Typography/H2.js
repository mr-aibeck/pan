import styled from 'styled-components';
import { media } from '../utils/media';

const H2 = styled.h2`
  font-family: Formular;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 40px;

  @media ${media.laptop} {
    font-size: 30px;
    line-height: 35px;
  }

  @media ${media.tablet} {
    font-size: 26px;
    line-height: 33px;
  }

  @media ${media.mobile} {
    font-size: 20px;
    line-height: 24px;
  }
`;

export default H2;
