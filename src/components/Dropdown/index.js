import React, { useState } from 'react';

import {
  DropdownWrapper,
  Content,
  Label
} from './styled';

const Dropdown = ({ content, children, label, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);

  return (
    <DropdownWrapper {...props}>
      <Label isOpen={isOpen} onClick={toggling}>{children}</Label>

      {isOpen && (
        <Content isOpen>
          {content}
        </Content>
      )}
    </DropdownWrapper>
  );
}

export default Dropdown;
