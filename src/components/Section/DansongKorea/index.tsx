import Button from '../../Button';
import * as S from './style';

export default function DansongKorea() {
  return (
    <S.Section>
      <S.Wrapper>
        <S.VideoContainer>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/H6jx_By_dKg"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/H6jx_By_dKg"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </S.VideoContainer>
      </S.Wrapper>
      {/* <Button text="sss" type="link" onClick={() => {}} /> */}
    </S.Section>
  );
}
