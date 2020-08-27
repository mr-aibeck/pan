import styled from 'styled-components';
import { media } from '../utils/media';

const H3 = styled.h3`
  font-family: Formular;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 30px;

  @media ${media.laptop} {
    font-size: 20px;
    line-height: 26px;
  }

  @media ${media.tablet} {
    font-size: 18px;
    line-height: 22px;
  }

  @media ${media.mobile} {
    font-size: 16px;
    line-height: 18px;
  }
`;

export default H3;
