import Circle from '../Circle';
import Logo from '../Logo';
import * as S from './style';
import Textline from '../Textline';
import DivisionLine from '../DivisionLine';
import { CenterContainer } from '../../styles/global';

export default function ServiceIntro() {
  return (
    <S.Wrapper>
      <S.Container>
        <Circle size="large" bgColor="#fff" isBoxShadow={true}>
          <Logo
            logo="dansong"
            src="https://dansong-s3.s3.ap-northeast-2.amazonaws.com/logos/dansongB.png"
          />
        </Circle>
        <S.MiddleContainer direction="column">
          <Textline fontSize={2.4} animation="top" isFontBold={true}>
            컨텐츠
          </Textline>
          <DivisionLine borderStyle="dashed" />
          <Textline fontSize={2.4} animation="bottom" isFontBold={true}>
            단송코리아
          </Textline>
        </S.MiddleContainer>
        <CenterContainer>
          <CenterContainer direction="column">
            <Circle size="medium">
              <S.Text>
                구독
                <br />
                안하면
                <br />
                지상렬
              </S.Text>
            </Circle>
            <Circle size="medium">
              <S.Text>
                브랜드
                <br />
                컨텐츠
              </S.Text>
            </Circle>
          </CenterContainer>
          <Circle size="medium">
            <S.Text>얘기해봐</S.Text>
          </Circle>
        </CenterContainer>
      </S.Container>

      <S.Container>
        <Circle size="large" bgColor="#fff" isBoxShadow={true}>
          <Logo logo="itreaming1.png" />
        </Circle>
        <S.MiddleContainer direction="column">
          <Textline fontSize={2.4} animation="top" isFontBold={true}>
            커머스
          </Textline>
          <DivisionLine borderStyle="dashed" />
          <Textline fontSize={2.4} animation="bottom" isFontBold={true}>
            잇트리밍
          </Textline>
        </S.MiddleContainer>

        <CenterContainer direction="column">
          <CenterContainer style={{ marginBottom: '1rem' }}>
            <Circle size="medium" style={{ x: 10 }}>
              <S.Text>
                커머스
                <br />
                시스템
              </S.Text>
            </Circle>
            <Circle size="medium" style={{ x: -10 }}>
              <S.Text>제작</S.Text>
            </Circle>
          </CenterContainer>
          <DivisionLine borderStyle="dashed" />
          <CenterContainer style={{ marginTop: '1rem' }}>
            <Circle size="small" style={{ x: 10 }}>
              <S.Text>틱톡</S.Text>
            </Circle>
            <Circle size="small">
              <S.Text>
                인스타
                <br />
                그램
              </S.Text>
            </Circle>
            <Circle size="small" style={{ x: -10 }}>
              <S.Text>틱톡</S.Text>
            </Circle>
          </CenterContainer>
        </CenterContainer>
      </S.Container>
    </S.Wrapper>
  );
}
