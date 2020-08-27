import styled from 'styled-components';

export const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Content = styled.div`
  height: ${({ isOpen }) => isOpen ? '100%' : 0};
  margin-top: 10px;
  position: absolute
`;

export const Label = styled.div`
  align-items: center;
  display: flex;
`;
