import styled from 'styled-components';
import { media } from '../utils/media';

const TextBig = styled.span`
  font-family: Formular;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 34px;

  @media ${media.laptop} {
    font-size: 18px;
    line-height: 26px;
  }

  @media ${media.laptop} {
    font-size: 15px;
    line-height: 22px;
  }

  @media ${media.mobile} {
    font-size: 14px;
    line-height: 16px;
  }
`;

export default TextBig;
