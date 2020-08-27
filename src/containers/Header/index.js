import React, { useState } from 'react';
import Button from '../../components/Button';
import Dropdown from '../../components/Dropdown';
import H4 from '../../components/Typography/H4';
import Icon from '../../components/Icon';

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
            <H4>Пункт 1</H4>
            <MenuIcon name="arrow" height="6px" width="10px" isOpen={isOpen} />
          </Dropdown>
        </MenuItem>
        <MenuItem><H4>Пункт 2</H4></MenuItem>
        <MenuItem><H4>Пункт 3</H4></MenuItem>
        <MenuItem><H4>Пункт 4</H4></MenuItem>
        <MenuItem><H4>Пункт 5</H4></MenuItem>
      </Menu>

      <Button size="normal">Кнопка</Button>
    </HeaderWrap>
  );
}

export default Header;
