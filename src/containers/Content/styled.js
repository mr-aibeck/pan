import styled from 'styled-components';
import ProgressBar from '../../components/ProgressBar';
import H1 from '../../components/Typography/H1';
import TextBig from '../../components/Typography/TextBig';
import { media } from '../../components/utils/media';

export const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  width: 1200px;

  @media ${media.laptop} {
    padding: 0 140px;
    width: 990px;
  }

  @media ${media.tablet} {
    padding: 0 80px;
    width: 590px;
  }

  @media ${media.mobile} {
    padding: 0;
    width: 320px;
  }
`

export const StyledH1 = styled(H1)`
  flex-basis: 100%;
  margin: 80px auto 50px;
  text-align: center;
`;

export const AccordeonWrapper = styled.div`
  flex-basis: 50%;
  width: 600px;

  @media ${media.laptop} {
    width: 490px;
  }

  @media ${media.tablet} {
    flex-basis: auto;
    width: 250px;
  }

  @media ${media.mobile} {
    flex-basis: auto;
    margin-top: 30px;
    width: 100%;
  }
`;

export const StyledProgressBar = styled(ProgressBar)`
  flex-basis: 50%;
`;

export const StyledTextBig = styled(TextBig)`
  display: block;
  margin-bottom: 40px;
`;

export const YaMap = styled.div`
  margin-top: 100px;

  @media ${media.mobile} {
    display: none;
  }

  @media ${media.tablet} {
    display: none;
  }

  @media ${media.laptop} {
    display: none;
  }
`;

export const YaMapLaptop = styled.div`
  margin-top: 86px;

  @media ${media.mobile} {
    display: none;
  }

  @media ${media.tablet} {
    display: none;
  }

  @media ${media.desktop} {
    display: none;
  }
`;

export const YaMapTablet = styled.div`
  margin-top: 94px;

  @media ${media.mobile} {
    display: none;
  }

  @media ${media.laptop} {
    display: none;
  }

  @media ${media.desktop} {
    display: none;
  }
`;

export const YaMapMobile = styled.div`
  margin-top: 60px;

  @media ${media.tablet} {
    display: none;
  }

  @media ${media.laptop} {
    display: none;
  }

  @media ${media.desktop} {
    display: none;
  }
`;
