import styled from 'styled-components';
import Icon from '../../components/Icon';
import Text from '../../components/Typography/Text';
import H3 from '../../components/Typography/H3';

export const FooterWrap = styled.div`
  margin: 80px auto 90px;
  width: 1200px;
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
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
`;
