import Textline from '../../Textline';
import * as S from './style';
import Studio from '../../Studio';
import ServiceIntro from '../../ServiceIntro';
import { CenterContainer } from '../../../styles/global';
import Logo from '../../Logo';
import VideoList from '../../VideoList';
export default function DansongKorea() {
  return (
    <div id="dansongkorea">
      <S.VideoSection>
        <VideoList />
      </S.VideoSection>

      <S.TextSection>
        <CenterContainer direction="column">
          <Logo src="/logos/dansongB.png" logo="dansong" />
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
    </div>
  );
}
