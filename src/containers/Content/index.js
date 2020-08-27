import React from 'react';
// import Carousel from '../../components/Carousel';
import Text from '../../components/Typography/Text';
import Accordeon from '../../components/Accordeon';

import {
  ContentWrapper,
  AccordeonWrapper,
  StyledProgressBar,
  StyledTextBig,
  StyledH1,
  YaMap,
  YaMapLaptop,
  YaMapTablet,
  YaMapMobile
} from './styled';

function Content() {
  return (
    <ContentWrapper>
      <StyledH1>Обычный слайдер</StyledH1>

      <StyledProgressBar />

      <AccordeonWrapper>
        <StyledTextBig>
          Большинство онкологических пациентов испытывают страх перед неизвестностью того, что их ожидает в процессе лечения рака.
        </StyledTextBig>
        <Accordeon label="Подробнее">
          <Text>
            Большинство онкологических пациентов испытывают страх перед неизвестностью того, что их ожидает в процессе лечения рака.
          </Text>
        </Accordeon>
      </AccordeonWrapper>

      <YaMap>
        <iframe title="yamap" src="https://yandex.ru/map-widget/v1/?um=constructor%3A545a1087cecaca477857b8c0217858f1023af28e705d57662c0cbac9dc0b2624&amp;source=constructor" width="1200" height="500" frameBorder="0"></iframe>
      </YaMap>

      <YaMapLaptop>
        <iframe title="yamapLaptop" src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae300d3bc267122073f0646ce985dd90ed0d697b22d349c8cb5424247283e83c4&amp;source=constructor" width="990" height="400" frameborder="0"></iframe>
      </YaMapLaptop>

      <YaMapTablet>
        <iframe title="yamapTablet" src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae300d3bc267122073f0646ce985dd90ed0d697b22d349c8cb5424247283e83c4&amp;source=constructor" width="610" height="250" frameborder="0"></iframe>
      </YaMapTablet>

      <YaMapMobile>
        <iframe title="yamapMobile" src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae300d3bc267122073f0646ce985dd90ed0d697b22d349c8cb5424247283e83c4&amp;source=constructor" width="320" height="250" frameborder="0"></iframe>
      </YaMapMobile>
    </ContentWrapper>
  );
}

export default Content;
