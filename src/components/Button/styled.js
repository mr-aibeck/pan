import styled from 'styled-components';
import H4 from '../Typography/H4';

const BUTTON_HEIGHT = {
  large: '60px',
  normal: '50px',
};

export const Text = styled(H4)`
  color: #FFFFFF;
  flex-grow: 1;
`;

export const Button = styled.button`
  display: flex;
  justify-content: space-between;
  background: #FF0C00;
  border: none;
  border-radius: ${({ size }) => size === 'large' ? '30px' : '25px'};
  cursor: pointer;
  height: ${({ size }) => BUTTON_HEIGHT[size]};
  justify-content: center;
  outline: none;

  font-family: Formular;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;

  align-items: center;
  display: flex;
  box-sizing: border-box;
  text-align: center;
  padding: 0 40px;

  &:hover {
    box-shadow: 0px 10px 20px rgba(255, 45, 35, 0.3);
  }

  &:active {
    box-shadow: none;
  }
`;
