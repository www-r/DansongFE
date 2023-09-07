import Logo from '../Logo';
import * as S from './style';
import Textline from '../Textline';
import DivisionLine from '../DivisionLine';
import { CenterContainer } from '../../styles/global';

export default function ServiceIntro() {
  return (
    <>
      <CenterContainer>
        <S.MiddleContainer direction="column">
          <Logo logo="dansong" src="/logos/dansongB.png" />
        </S.MiddleContainer>
      </CenterContainer>
      <S.LineContainer>
        <div></div>
        <div></div>
      </S.LineContainer>
      <CenterContainer direction="column">
        <CenterContainer
          style={{ width: '90%', justifyContent: 'space-between', marginBottom: '1.5rem' }}
        >
          <Logo logo="dansong" src="/images/DSS.png" />
          <Logo logo="dansong" src="/logos/itreaming1.png" />
        </CenterContainer>

        <CenterContainer style={{ width: '90%', justifyContent: 'space-between' }}>
          <S.MiddleContainer direction="column">
            <Textline fontSize={2.4} animation="top" isFontBold={true}>
              컨텐츠
            </Textline>
            <DivisionLine borderStyle="dashed" />
            <Textline fontSize={1.8} animation="bottom" isFontBold={true}>
              단송코리아
            </Textline>
          </S.MiddleContainer>
          <S.MiddleContainer direction="column">
            <Textline fontSize={2.4} animation="top" isFontBold={true}>
              커머스
            </Textline>
            <DivisionLine borderStyle="dashed" />
            <Textline fontSize={1.8} animation="bottom" isFontBold={true}>
              잇트리밍
            </Textline>
          </S.MiddleContainer>
        </CenterContainer>
      </CenterContainer>
    </>
  );
}
