import styled from 'styled-components';

export const Wrap = styled.div`
  position: relative;

  ${({ disabled }) => disabled && 'opacity: 0.2'};

  input {
    display: none;
  }
`;

export const IconWrap = styled.div`
  align-items: center;
  border: 1px solid ${({ checked }) => checked
    ? '#FF2D23'
    : 'rgba(143, 149, 172, 0.3)'};
  border-radius: 2px;
  background: ${({ theme, checked }) => checked
    ? '#FF2D23'
    : 'transparent'};
  box-sizing: border-box;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  width: 18px;
  height: 18px;
`;

export const Label = styled.div`
  color: #8F95AC;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  user-select: none;
  padding-left: 18px;
`;

export const LabelWrap = styled.label`
  display: flex;
`;
