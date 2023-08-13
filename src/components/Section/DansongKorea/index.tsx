import * as S from './style';

export default function DansongKorea() {
  return (
    <S.Section>
      <S.Wrapper>
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/VIDEO_ID_HERE"
          ></iframe>
        </div>
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/VIDEO_ID_HERE"
          ></iframe>
        </div>
      </S.Wrapper>
    </S.Section>
  );
}
