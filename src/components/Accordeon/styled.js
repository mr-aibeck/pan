import styled from 'styled-components';
import Text from '../../components/Typography/Text';
import Icon from '../Icon';

export const AccordeonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled(Text)`
  color: #8F95AC;
  cursor: pointer;
`;

export const Content = styled.div`
  height: ${({ isOpen }) => isOpen ? '100%' : 0};
  margin-top: 10px;
  transition: 0.2s;
`;

export const StyledIcon = styled(Icon)`
  transform: rotate(90deg);
  margin-left: 10px;
`;
