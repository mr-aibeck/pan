import React from 'react';

import {
  ProgressBarWrapper,
  ProgressOuter,
  ProgressInner,
  ProgressControls,
  Note,
  Percent,
  StyledButton
} from './styled';

class ProgressBar extends React.Component {
  state = {
    percent: 5,
  };

  increase = () => {
    let percent = this.state.percent + 25;
    if (percent > 100) {
      percent = 100;
    }
    this.setState({ percent });
  };


  render() {
    const { percent } = this.state

    return (
      <ProgressBarWrapper>
        <ProgressOuter>
          <ProgressInner percent={percent}>
            <Percent>{percent}%</Percent>
          </ProgressInner>
        </ProgressOuter>

        <ProgressControls>
          <StyledButton onClick={this.increase}>25%</StyledButton>

          <Note>
            При нажатии на кнопку прогрессбар заполняется на столько процентов, сколько указано на кнопке
          </Note>
        </ProgressControls>
      </ProgressBarWrapper>
    );
  }
}

export default ProgressBar;
