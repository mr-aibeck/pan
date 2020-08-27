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
  YaMap
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
    </ContentWrapper>
  );
}

export default Content;
