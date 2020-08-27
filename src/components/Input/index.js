import React from 'react';
import styled from 'styled-components';
import Text from '../Typography/Text';
import { Label } from '../Select/styled';

const InputWrapper = styled.div`
  display: block;
`;

const InnerInput = styled.input`
  align-items: center;
  background: none;
  border: 1px solid #8F95AC;
  box-sizing: border-box;
  border-radius: 4px;
  color: #FFFFFF;
  font: inherit;
  display: flex;
  height: 60px;
  outline: none;
  padding: 21px 27px;
  width: 100%;

  &::placeholder {
    color: #FFFFFF;
  }
`;

const Input = ({ label, type, placeholder, value, ...props }) => {
  return (
    <InputWrapper {...props}>
      {label &&
        <Label>
          <Text>{label}</Text>
        </Label>
      }
      <Text><InnerInput type={type} placeholder={placeholder} /></Text>
    </InputWrapper>
  );
}

export default Input;
