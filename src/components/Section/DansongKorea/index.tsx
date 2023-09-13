import * as S from './style';
import Studio from '../../Studio';
import ServiceIntro from '../../ServiceIntro';
import VideoList from '../../VideoList';
export default function DansongKorea() {
  return (
    <S.Section id="dansongkorea">
      <S.VideoSection>
        <VideoList />
      </S.VideoSection>

      <S.LogoSection>
        <ServiceIntro />
      </S.LogoSection>

      <S.StudioSection>
        <Studio />
      </S.StudioSection>
    </S.Section>
  );
}
