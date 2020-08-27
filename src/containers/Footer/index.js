import React, { useState } from 'react';
import H2 from '../../components/Typography/H2';
import Text from '../../components/Typography/Text';
import TextBig from '../../components/Typography/TextBig';

import {
  FooterWrap,
  Menu,
  MenuItem,
  UpButtonWrapper,
  UpButton,
  StyledIcon,
  Contacts,
  StyledText,
  StyledH3,
  MailTo
} from './styled';


const Footer = () => {
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
    <FooterWrap>
      <Menu>
        <MenuItem>
          <H2>3,000</H2>
          <TextBig>Агенств</TextBig>
        </MenuItem>

        <MenuItem>
          <H2>10,000</H2>
          <TextBig>Партнеров</TextBig>
        </MenuItem>

        <MenuItem>
          <H2>80,000</H2>
          <TextBig>Квартир в базе</TextBig>
        </MenuItem>

        <MenuItem>
          <H2>100+</H2>
          <TextBig>Застройщиков</TextBig>
        </MenuItem>

        <MenuItem>
          <H2>200</H2>
          <TextBig>Сотрудников</TextBig>
        </MenuItem>
      </Menu>

      <UpButtonWrapper>
        <Text onClick={scrollTop}>Наверх</Text>
        <UpButton onClick={scrollTop}>
          <StyledIcon name="arrow" height="6px" width="10px" />
        </UpButton>
      </UpButtonWrapper>

      <Contacts>
        <div>
          <StyledText>Санкт-Петербург, Владимирский пр., д. 3 лит. А, офис 701</StyledText>
        </div>

        <StyledH3>
          <a href="tel:+ 7 (812) 445-68-09">+ 7 (812) 445-68-09</a>
        </StyledH3>

        <MailTo>
          <a href="mailto:test@gmail.com">Напишите нам</a>
        </MailTo>
      </Contacts>

    </FooterWrap>
  );
}

export default Footer;
