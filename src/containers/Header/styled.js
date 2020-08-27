import styled from 'styled-components';
import Icon from '../../components/Icon';
import H4 from '../../components/Typography/H4';
import Text from '../../components/Typography/Text';

export const HeaderWrap = styled.header`
  align-items: center;
  background: #2C2E3E;
  display: flex;
  justify-content: space-between;
  height: 80px;
  padding: 0 65px;
`;

export const Menu = styled.ul`
  color: #FFFFFF;
  display: flex;
  flex-grow: 1;
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
