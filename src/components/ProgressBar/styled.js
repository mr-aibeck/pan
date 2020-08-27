import styled from 'styled-components';
import Button from '../../components/Button';
import H4 from '../../components/Typography/H4';
import Text from '../../components/Typography/Text';
import { media } from '../../components/utils/media';

export const ProgressBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 470px;

  @media ${media.laptop} {
    width: 385px;
  }

  @media ${media.tablet} {
    width: 295px;
  }
`;

export const ProgressOuter = styled.div`
  height: 40px;
  background: rgba(143, 149, 172, 0.1);
  border-radius: 100px;
  margin-bottom: 40px;
`

export const ProgressInner = styled.div`
  align-items: center;
  background: #2C2E3E;
  border-radius: 100px;
  height: 100%;
  display: flex;
  justify-content: center;
  transition: 0.2s;
  width: ${({ percent }) => percent > 5 ? `${percent}%` : '95px'};

  @media ${media.tablet} {
    width: ${({ percent }) => percent > 5 ? `${percent}%` : '68px'}
  }

  @media ${media.mobile} {
    width: ${({ percent }) => percent > 5 ? `${percent}%` : '55px'}
  }
`;

export const Note = styled(Text)`
  flex-basis: 55%;
  margin-left: 30px;

  @media ${media.laptop} {
    margin-left: 24px;
  }

  @media ${media.tablet} {
    margin-left: 16px;
  }
`;

export const Percent = styled(H4)`
  color: #FFFFFF;
`;

export const StyledButton = styled(Button)`
  width: 180px;

  @media ${media.laptop} {
    min-width: 180px;
  }

  @media ${media.tablet} {
    min-width: 108px;
    width: 108px;
  }
`;

export const ProgressControls = styled.div`
  display: flex;
`;
