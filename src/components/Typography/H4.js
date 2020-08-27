import styled from 'styled-components';
import { media } from '../utils/media';

const H4 = styled.h4`
  font-family: Formular;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;

  @media ${media.laptop} {
    font-size: 14px;
    line-height: 17px;
  }

  @media ${media.tablet} {
    font-size: 14px;
    line-height: 18px;
  }

  @media ${media.mobile} {
    font-size: 14px;
    line-height: 18px;
  }
`;

export default H4;
