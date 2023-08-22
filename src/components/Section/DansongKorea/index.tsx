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
      {/* <Button text="sss" type="link" onClick={() => {}} /> */}
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
      <div style={{ height: '1000px' }}></div>

      {/* <S.LogoSection>
        <S.LogoContainer>
          <div>ddd</div>
        </S.LogoContainer>
      </S.LogoSection> */}
    </S.Section>
  );
}
