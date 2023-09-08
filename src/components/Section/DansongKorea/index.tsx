import * as S from './style';
import Studio from '../../Studio';
import ServiceIntro from '../../ServiceIntro';
import VideoList from '../../VideoList';
export default function DansongKorea() {
  return (
    <S.Section>
      <div id="scroll-scene-0">
        <S.VideoSection>
          <VideoList />
        </S.VideoSection>
      </div>

      <div id="scroll-scene-1">
        <S.LogoSection id="DANSONGKOREA">
          <ServiceIntro />
        </S.LogoSection>
      </div>

      <div id="scroll-scene-2">
        <S.StudioSection>
          <Studio />
        </S.StudioSection>
      </div>
    </S.Section>
  );
}
