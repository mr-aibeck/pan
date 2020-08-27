import React, { useState } from 'react';
import Text from '../Typography/Text';

import {
  SelectWrapper,
  SelectContainer,
  SelectHeader,
  SelectListContainer,
  SelectList,
  ListItem,
  Label,
  StyledIcon
} from './styled';

const Select = ({ options, label, placeholder, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <SelectWrapper {...props}>
      {label &&
        <Label>
          <Text>{label}</Text>
        </Label>
      }
      <SelectContainer isOpen={isOpen}>
        <SelectHeader onClick={toggling}>
          <Text>{selectedOption || placeholder}</Text>
          <StyledIcon
            height="6px"
            isOpen={isOpen}
            name="arrow"
            width="10px"
          />
        </SelectHeader>
        {isOpen && (
          <SelectListContainer>
            <SelectList>
              {options.map(option => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                  <Text>{option}</Text>
                </ListItem>
              ))}
            </SelectList>
          </SelectListContainer>
        )}
      </SelectContainer>
    </SelectWrapper>
  );
}

export default Select;
