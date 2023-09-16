import { theme } from '../../styles/theme';
import Textline from '../Textline';
import * as S from './style';

export default function Studio() {
  return (
    <>
      <S.Container>
        <S.TextContainer>
          <Textline
            fontSize={28}
            animation="top"
            isFontBold={true}
            color={theme.textColor.white}
            textAlign="center"
          >
            DSS
          </Textline>
          <Textline
            fontSize={8}
            animation="top"
            isFontBold={true}
            color={theme.textColor.white}
            textAlign="center"
          >
            DANSONG STUDIOS
          </Textline>
        </S.TextContainer>
        <S.Overlay>
          <S.TextBox className="textbox">
            <Textline
              fontSize={4}
              animation="top"
              color={theme.textColor.white}
              marginBottom="4rem"
            >
              단송 스튜디오는
              <br />
              (주)단송코리아의 자체적인 프로덕션 크루 입니다.
            </Textline>
            <Textline
              fontSize={4}
              animation="top"
              color={theme.textColor.white}
              marginBottom="4rem"
            >
              사물과 인물, 사진과 영상,
              <br />
              컨텐츠와 커머스 등<br />
              특정 분야에 구애받지 않는 창의적인 팀으로
            </Textline>
            <Textline
              fontSize={4}
              animation="top"
              marginBottom="4rem"
              color={theme.textColor.white}
            >
              (주)단송코리아를 포함한 다양한 클라이언트들의 아이디어를 실현시켜드립니다.
            </Textline>
          </S.TextBox>
        </S.Overlay>
      </S.Container>
    </>
  );
}
