import Textline from '../../Textline';
import * as S from './style';
import VideoList from '../../VideoList';
import Studio from '../../Studio';

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
          <Textline fontSize="2.4rem" animation="top" isFontBold={true}>
            생각이 실현되는 곳
          </Textline>
        </S.TextContainer>
      </S.TextSection>

      <S.LogoSection>
        <Studio />
      </S.LogoSection>
    </S.Section>
  );
}
