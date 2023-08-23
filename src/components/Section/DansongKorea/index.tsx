import Textline from '../../Textline';
import * as S from './style';
import VideoList from '../../VideoList';

export default function DansongKorea() {
  return (
    <S.Section>
      <S.VideoSection>
        <S.VideoContainer>
          <VideoList />
        </S.VideoContainer>
      </S.VideoSection>

      <S.TextSection>
        <S.TextContainer>
          <Textline fontSize="4.8rem" animation="top" isFontBold={true}>
            Think Make Change
          </Textline>
          <Textline fontSize="2.4rem" animation="top">
            생각이 실현되는 곳
          </Textline>
        </S.TextContainer>
      </S.TextSection>

      <S.LogoSection>
        <S.TextContainer>
          <Textline fontSize="28rem" animation="top" isFontBold={true} color="#fff">
            DSS
          </Textline>
          <Textline fontSize="8rem" animation="top" isFontBold={true} color="#fff">
            DANSONG STUDIOS
          </Textline>
        </S.TextContainer>
      </S.LogoSection>
    </S.Section>
  );
}
