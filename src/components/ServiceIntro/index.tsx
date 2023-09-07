import Circle from '../Circle';
import Logo from '../Logo';
import * as S from './style';
import Textline from '../Textline';
import DivisionLine from '../DivisionLine';
import { CenterContainer } from '../../styles/global';
import { theme } from '../../styles/theme';

export default function ServiceIntro() {
  return (
    <>
      <CenterContainer>
        <S.MiddleContainer direction="column">
          <Circle size="large" bgColor="#fff" isBoxShadow={true}>
            <Logo logo="dansong" src="/logos/dansongB.png" />
          </Circle>
        </S.MiddleContainer>
      </CenterContainer>
      <S.LineContainer>
        <div></div>
        <div></div>
      </S.LineContainer>

      <CenterContainer style={{ gap: '10rem' }}>
        <CenterContainer direction="column" style={{ gap: '1rem' }}>
          <Circle size="large" bgColor="#fff" isBoxShadow={true}>
            <Logo logo="dansong" src="/images/DSS.png" />
          </Circle>
          <S.MiddleContainer direction="column">
            <Textline
              fontSize={2.4}
              animation="top"
              isFontBold={true}
              color={theme.textColor.white}
            >
              컨텐츠
            </Textline>
            <DivisionLine borderStyle="dashed" />
            <Textline
              fontSize={1.8}
              animation="bottom"
              isFontBold={true}
              color={theme.textColor.white}
            >
              단송코리아
            </Textline>
          </S.MiddleContainer>
        </CenterContainer>
        <CenterContainer direction="column" style={{ gap: '1rem' }}>
          <Circle size="large" bgColor="#fff" isBoxShadow={true}>
            <Logo logo="dansong" src="/logos/itreaming1.png" size="large" />
          </Circle>
          <S.MiddleContainer direction="column">
            <Textline
              fontSize={2.4}
              animation="top"
              isFontBold={true}
              color={theme.textColor.white}
            >
              커머스
            </Textline>
            <DivisionLine borderStyle="dashed" />
            <Textline
              fontSize={1.8}
              animation="bottom"
              isFontBold={true}
              color={theme.textColor.white}
            >
              잇트리밍
            </Textline>
          </S.MiddleContainer>
        </CenterContainer>
      </CenterContainer>
    </>
  );
}
