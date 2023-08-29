import Textline from '../../Textline';
import * as S from './style';
import VideoList from '../../VideoList';
import Studio from '../../Studio';
import ServiceIntro from '../../ServiceIntro';
import { CenterContainer } from '../../../styles/global';

export default function DansongKorea() {
  return (
    <>
      <S.VideoSection>
        <VideoList />
      </S.VideoSection>

      <S.TextSection>
        <CenterContainer direction="column">
          <Textline fontSize={4.8} animation="top" isFontBold={true}>
            Think Make Change
          </Textline>
          <Textline fontSize={2.4} animation="top" isFontBold={true}>
            생각이 실현되는 곳
          </Textline>
        </CenterContainer>
      </S.TextSection>
      <S.LogoSection>
        <ServiceIntro />
      </S.LogoSection>

      <S.StudioSection>
        <Studio />
      </S.StudioSection>
    </>
  );
}
