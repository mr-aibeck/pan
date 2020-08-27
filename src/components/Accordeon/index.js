import React, { useState } from 'react';
import Text from '../Typography/Text';

import {
  AccordeonWrapper,
  Content,
  StyledIcon,
  Label
} from './styled';

const Accordeon = ({ children, label, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);

  return (
    <AccordeonWrapper {...props}>
      <Label onClick={toggling}>
        <Text>{label}</Text>
        <StyledIcon name="arrowTop" fill="#000000" height="10px" width="14px" />
      </Label>

      {isOpen && (
        <Content isOpen>
          {children}
        </Content>
      )}
    </AccordeonWrapper>
  );
}

export default Accordeon;
