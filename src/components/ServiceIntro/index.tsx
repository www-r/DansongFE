import Logo from '../Logo';
import * as S from './style';
import Textline from '../Textline';
import DivisionLine from '../DivisionLine';
import { CenterContainer } from '../../styles/global';
import { isMobile } from 'react-device-detect';
export default function ServiceIntro() {
  return (
    <S.Wrapper>
      <S.Container>
        <CenterContainer>
          <S.MiddleContainer direction="column">
            <Logo logo="dansong" src="/logos/dansongB.png" />
            <Textline fontSize={2.4} animation={isMobile ? 'none' : 'top'} isFontBold={true}>
              단송 코리아
            </Textline>
          </S.MiddleContainer>
        </CenterContainer>

        <S.LineContainer>
          <div></div>
          <div></div>
        </S.LineContainer>

        <CenterContainer style={{ justifyContent: 'space-between' }}>
          <CenterContainer direction="column" style={{ gap: '1rem' }}>
            <a href="/#contents">
              <Logo logo="dansong" src="/images/DSS.png" size="ml" />
            </a>
            <S.MiddleContainer direction="column">
              <Textline fontSize={2.4} animation={isMobile ? 'none' : 'top'} isFontBold={true}>
                컨텐츠
              </Textline>
              <DivisionLine borderStyle="dashed" />
              <Textline fontSize={1.8} animation={isMobile ? 'none' : 'bottom'} isFontBold={true}>
                DSS STUDIO
              </Textline>
            </S.MiddleContainer>
          </CenterContainer>
          <CenterContainer direction="column" style={{ gap: '1rem' }}>
            <a href="/#contents">
              <Logo logo="dansong" src="/logos/itreaming1.png" size="ml" />
            </a>
            <S.MiddleContainer direction="column">
              <Textline fontSize={2.4} animation={isMobile ? 'none' : 'top'} isFontBold={true}>
                커머스
              </Textline>
              <DivisionLine borderStyle="dashed" />
              <Textline fontSize={1.8} animation={isMobile ? 'none' : 'bottom'} isFontBold={true}>
                잇트리밍
              </Textline>
            </S.MiddleContainer>
          </CenterContainer>
        </CenterContainer>
      </S.Container>
    </S.Wrapper>
  );
}
