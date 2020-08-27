import styled from 'styled-components';
import Icon from '../Icon';

export const SelectWrapper = styled.div`
  display: block;
  z-index: 1;
`;

export const SelectContainer = styled.div`
  align-items: center;
  border: 1px solid #8F95AC;
  box-sizing: border-box;
  border-radius: ${({ isOpen }) => isOpen ? '4px 4px 0 0' : '4px'};
  color: #FFFFFF;
  cursor: pointer;
  display: flex;
  position: relative;
  user-select: none;
  height: 60px;
`;

export const SelectHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 21px 27px;
  width: 100%;
`;

export const SelectListContainer = styled.div`
  background: #1E2030;
  border: 1px solid #8F95AC;
  border-radius: 0 0 4px 4px;
  left: -1px;
  top: 58px;
  position: absolute;
  width: 100%;
`;

export const SelectList = styled.ul`
  box-sizing: border-box;
  padding: 12px 8px;
`;

export const ListItem = styled.li`
  align-items: center;
  height: 35px;
  display: flex;
  padding: 0 18px;

  &:hover {
    background: rgba(143, 149, 172, 0.1);
    border-radius: 3px;
  }
`;

export const Label = styled.label`
  color: #8F95AC;
  display: block;
  margin-bottom: 6px;
`;

export const StyledIcon = styled(Icon)`
  transition: 0.2s;

  ${({ isOpen }) =>
    isOpen &&
    `
    transform: rotate(180deg);
  `}
`;
