import styled from 'styled-components';
import Icon from '../../components/Icon';
import Text from '../../components/Typography/Text';
import H3 from '../../components/Typography/H3';
import { media } from '../../components/utils/media';

export const FooterWrap = styled.div`
  margin: 80px auto 90px;
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
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media ${media.tablet} {
    flex-wrap: wrap;

    &::after {
      content: '';
      flex-grow: 1;
    }
  }

  @media ${media.mobile} {
    flex-wrap: wrap;
  }
`;

export const MenuItem = styled.li`
  background: #FFFFFF;
  box-shadow: 0px 0px 15px rgba(143, 149, 172, 0.15);
  border-radius: 5px;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 150px;
  padding-left: 36px;
  width: 220px;

  &:hover {
    background: #FFFFFF;
    box-shadow: 0px 0px 20px rgba(143, 149, 172, 0.4);
    border-radius: 5px;
  }

  @media ${media.laptop} {
    height: 124px;
    width: 180px;
  }

  @media ${media.tablet} {
    height: 110px;
    margin-bottom: 20px;
    padding-left: 21px;
    width: 188px;

    &:last-child {
      margin-left: 22px;
    }
  }

  @media ${media.mobile} {
    flex-basis: 50%;
    height: 70px;
    padding-left: 18px;
    margin-bottom: 20px;
    max-width: 150px;
  }
`;

export const UpButtonWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  margin: 65px 0 20px;
`;

export const UpButton = styled.button`
  align-items: center;
  border: none;
  background: #2C2E3E;
  border-radius: 15px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin-left: 10px;
  outline: none;
  height: 30px;
  width: 30px;
`

export const StyledIcon = styled(Icon)`
  transform: rotate(180deg);
`;

export const Contacts = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(143, 149, 172, 0.1);
  padding-top: 40px;

  & * {
    flex-basis: 33.3%;
  }

  @media ${media.mobile} {
    flex-direction: column;

    & * {
      flex-basis: 100%;
    }
  }
`;

export const MailTo = styled(Text)`
  color: #FF2D23;
  cursor: pointer;
  text-align: right;
  text-decoration: underline;
`

export const StyledText = styled(Text)`
  display: block;
  max-width: 300px;
`;

export const StyledH3 = styled(H3)`
  text-align: center;

  @media ${media.mobile} {
    margin: 20px 0;
  }
`;
