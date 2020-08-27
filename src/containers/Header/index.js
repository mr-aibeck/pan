import React, { useState } from 'react';
import Button from '../../components/Button';
import Dropdown from '../../components/Dropdown';
import Icon from '../../components/Icon';
import H4 from '../../components/Typography/H4';

import {
  HeaderWrap,
  Menu,
  MenuItem,
  MenuIcon,
  LogoIcon,
  MenuList,
  MenuListItem,
  Title,
  Note,
  StyledH4,
  MenuDropdown,
  MenuDropdownWrapper,
} from './styled';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);

  const content = (
        [1, 2, 3, 4].map((i) => (
          <MenuListItem key={i}>
            <Icon name="menu" height="14px" width="21px" />
            <Title>Меню {i}</Title>
            <Note>Покупайте и продавайте</Note>
          </MenuListItem>
        ))
      )

  return (
    <HeaderWrap>
      <LogoIcon name="logo" width="76px" height="42px" />

      <Menu>
        <MenuItem onClick={toggling} isOpen={isOpen}>
          <Dropdown
            content={<MenuList>{content}</MenuList>}
          >
            <StyledH4>Пункт 1</StyledH4>
            <MenuIcon name="arrow" height="6px" width="10px" isOpen={isOpen} />
          </Dropdown>
        </MenuItem>
        <MenuItem><StyledH4>Пункт 2</StyledH4></MenuItem>
        <MenuItem><StyledH4>Пункт 3</StyledH4></MenuItem>
        <MenuItem><StyledH4>Пункт 4</StyledH4></MenuItem>
        <MenuItem><StyledH4>Пункт 5</StyledH4></MenuItem>
      </Menu>

      <MenuDropdownWrapper
        content={
          <MenuDropdown>
            <MenuItem><StyledH4>Пункт 1</StyledH4></MenuItem>
            <MenuItem><StyledH4>Пункт 2</StyledH4></MenuItem>
            <MenuItem><StyledH4>Пункт 3</StyledH4></MenuItem>
            <MenuItem><StyledH4>Пункт 4</StyledH4></MenuItem>
            <MenuItem><StyledH4>Пункт 5</StyledH4></MenuItem>
          </MenuDropdown>
        }
      >
        <H4>Меню</H4>
      </MenuDropdownWrapper>

      <Button size="normal">Кнопка</Button>
    </HeaderWrap>
  );
}

export default Header;
