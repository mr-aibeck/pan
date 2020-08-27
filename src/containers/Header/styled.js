import styled from 'styled-components';
import Icon from '../../components/Icon';
import Dropdown from '../../components/Dropdown';
import H4 from '../../components/Typography/H4';
import Text from '../../components/Typography/Text';
import { media } from '../../components/utils/media';

export const HeaderWrap = styled.header`
  align-items: center;
  background: #2C2E3E;
  display: flex;
  justify-content: space-between;
  height: 80px;
  padding: 0 65px;

  @media ${media.laptop} {
    padding: 0 40px;
  }

  @media ${media.tablet} {
    padding: 0 20px;
  }

  @media ${media.mobile} {
    padding: 0 20px;
  }
`;

export const Menu = styled.ul`
  color: #FFFFFF;
  display: flex;
  flex-grow: 1;

  @media ${media.mobile} {
    display: none;
  }
`;

export const MenuItem = styled.li`
  align-items: center;
  cursor: pointer;
  font-family: Formular;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  display: flex;
  height: 40px;
  line-height: 20px;
  margin-right: 68px;
  padding: 0 20px;

  @media ${media.tablet} {
    margin-right: 0;
  }

  &:hover {
    background: rgba(143, 149, 172, 0.2);
    border-radius: 100px;
  }

  ${({ isOpen }) => isOpen && `
    background: #FF2D23;
    border-radius: 100px;

    &:hover {
      background: #FF2D23;
    }
  `}
`;

export const MenuIcon = styled(Icon)`
  margin-left: 15px;
  transition: 0.2s;

  ${({ isOpen }) => isOpen && `transform: rotate(180deg)`};
`;

export const LogoIcon = styled(Icon)`
  cursor: pointer;
  border-radius: 5px;
  margin-right: 175px;

  @media ${media.laptop} {
    margin-right: 80px;
  }

  @media ${media.tablet} {
    margin-right: 20px;
  }

  @media ${media.mobile} {
    margin-right: 10px;
  }
`;

export const MenuList = styled.ul`
  background: #2C2E3E;
  border-radius: 9px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  padding: 0px 30px 24px;
  position: absolute;
  left: -50px;
  top: 45px;
  transition: 0.2s;
  width: 535px;
`;

export const MenuListItem = styled.li`
  flex-basis: 50%;
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;

  &:first-child {
    border-bottom: 1px solid rgba(143, 149, 172, 0.5);
    padding-bottom: 24px;
  }

  &:nth-child(2) {
    border-bottom: 1px solid rgba(143, 149, 172, 0.5);
    padding-bottom: 24px;
  }
`;

export const Title = styled(H4)`
  color: #FFFFFF;
  margin-left: 15px;
`;

export const Note = styled(Text)`
  color: #8F95AC;
  flex-basis: 100%;
  margin: 6px 0 0 36px;
`;

export const StyledH4 = styled(H4)`
  white-space: nowrap;
`;

export const MenuDropdownWrapper = styled(Dropdown)`
  display: none;
  color: #FFFFFF;
  cursor: pointer;

  @media ${media.mobile} {
    display: block;
  }
`;

export const MenuDropdown = styled.ul`
  background: #2C2E3E;
  border-radius: 9px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  padding: 10px 20px 10px 20px;
  position: absolute;
  left: -50px;
  top: 25px;
  transition: 0.2s;

  ${MenuItem} {
    margin-right: 0;
  }
`;
