
import * as S from './style';
import Map from '../Map';


export default function ContactInfo() {
  return (
    <S.Wrapper>
      <S.TextContainer>
        <S.Title>CONTACT INFO</S.Title>
        <div>
          <S.Label htmlFor="contact--mobile">전화</S.Label>
          <a href="tel:070-7799-0703" id="contact--mobile">
            070 7799 0703
          </a>

          <S.Label htmlFor="contact--email">이메일</S.Label>
          <a href="mailto:official@dansong.kr" id="contact--email">
            official@dansong.kr
          </a>

          <S.Label htmlFor="contact--address">주소</S.Label>
          <a href="javascript:void(0)" id="contact--address">
            212, Hakdong-ro, Gangnam-gu, Postville 703
          </a>
        </div>
      </S.TextContainer>

      <Map />
    </S.Wrapper>
  );
}
