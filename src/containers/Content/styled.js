import styled from 'styled-components';
import ProgressBar from '../../components/ProgressBar';
import H1 from '../../components/Typography/H1';
import TextBig from '../../components/Typography/TextBig';

export const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  width: 1200px;
`

export const StyledH1 = styled(H1)`
  flex-basis: 100%;
  margin: 80px auto 50px;
  text-align: center;
`;

export const AccordeonWrapper = styled.div`
  flex-basis: 50%;
  width: 600px;
`;

export const StyledProgressBar = styled(ProgressBar)`
  flex-basis: 50%;
`;

export const StyledTextBig = styled(TextBig)`
  display: block;
  margin-bottom: 40px;
`;

export const YaMap = styled.div`
  margin-top: 100px;
`;
