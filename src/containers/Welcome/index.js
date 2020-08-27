import React from 'react';

import {
  WelcomeBlockWrapper,
  WelcomeBlock,
  Title,
  Form,
  StyledSelect,
  StyledInput,
  StyledButton,
  StyledCheckbox,
  CheckboxWrap,
  CheckboxNote,
  Link
} from './styled';

const options = ['Москва', 'Санкт-Петербург', 'Владивосток', 'Оренбург']

function Welcome() {
  return (
    <WelcomeBlockWrapper>
      <WelcomeBlock>
        <Title>Недвижимость Санкт-Петербурга и Москвы</Title>
        <Form>
          <StyledSelect
            label="Выбрать город"
            placeholder="Выбрать город"
            options={options}
          />

          <StyledInput
            label="Выбрать город"
            placeholder="info@mail.ru"
          />

          <StyledButton>Кнопка действия</StyledButton>

          <CheckboxWrap>
            <StyledCheckbox>
              <CheckboxNote>Отправляя нам данную форму вы соглашаетесь с</CheckboxNote>
              <Link href="#" target="_blank">политикой конфиденциальности</Link>
            </StyledCheckbox>
          </CheckboxWrap>
        </Form>
      </WelcomeBlock>
    </WelcomeBlockWrapper>
  );
}

export default Welcome;
