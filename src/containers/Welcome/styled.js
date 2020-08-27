import styled from 'styled-components';
import welcome from '../../images/welcome.png';
import H1 from '../../components/Typography/H1';
import Select from '../../components/Select';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Checkbox from '../../components/Checkbox';

export const Title = styled(H1)`
  color: #FFFFFF;
  flex-grow: 1;
  margin-bottom: 47px;
  width: 560px;
`;

export const WelcomeBlockWrapper = styled.div`
  background: #1E2030;
`;

export const WelcomeBlock = styled.div`
  background: url(${welcome}) no-repeat;
  background-size: auto auto;
  background-position: right 120px;
  padding: 150px 0 176px;
  margin: 0 auto;
  width: 1200px;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 720px;
`;

export const CustomOption = styled.div`
  padding: 0 19px;

  &:hover {
    background: rgba(#8F95AC, 0.1);
    border-radius: 3px;
    cursor: pointer;
  }
`;

export const StyledSelect = styled(Select)`
  flex-basis: 50%;
  max-width: 345px;
`;

export const StyledInput = styled(Input)`
  flex-basis: 50%;
  max-width: 345px;
`;

export const StyledButton = styled(Button)`
  margin-top: 40px;
`;

export const Link = styled.a`
  color: #FF2D23;
  text-decoration: none;
`;

export const CheckboxWrap = styled.div`
  flex-basis: 100%;
  margin-top: 40px;
`;

export const StyledCheckbox = styled(Checkbox)`
  width: 385px;
`;

export const CheckboxNote = styled.span`
  display: inline-flex;
  margin-right: 4px;
`;
