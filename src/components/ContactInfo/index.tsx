import * as S from './style';
import Map from '../Map';
import Button from '../Button';
import Textline from '../Textline';
import { isMobile } from 'react-device-detect';
export default function ContactInfo() {
  return (
    <S.Wrapper>
      <S.TextContainer>
        <h3>
          <Textline fontSize={3} isFontBold marginBottom="2rem">
            CONTACT INFO
          </Textline>
        </h3>
        <table>
          <S.TableRow isMobile={isMobile ? true : false}>
            <S.TableHeader>
              <S.Label htmlFor="contact--mobile">전화</S.Label>
            </S.TableHeader>
            <td>
              <a href="tel:070-7799-0703" id="contact--mobile">
                070 7799 0703
              </a>
              <Button className="contactPage">복사하기</Button>
            </td>
          </S.TableRow>
          <S.TableRow isMobile={isMobile ? true : false}>
            <S.Label htmlFor="contact--email">이메일</S.Label>
            <td>
              <a href="mailto:official@dansong.kr" id="contact--email">
                official@dansong.kr
              </a>
              <Button className="contactPage">복사하기</Button>
            </td>
          </S.TableRow>
          <S.TableRow isMobile={isMobile ? true : false}>
            <S.Label htmlFor="contact--address">주소</S.Label>
            <td>
              <S.Info>
                <a className="address" href="javascript:void(0)">
                  212, Hakdong-ro, Gangnam-gu, Postville 703
                </a>
                <Button className="contactPage">복사하기</Button>
              </S.Info>
              <S.Info>
                <a className="address" href="javascript:void(0)" id="contact--address">
                  서울 강남구 학동로 212 포스트빌 703
                </a>
                <Button className="contactPage">복사하기</Button>
              </S.Info>
            </td>
          </S.TableRow>
        </table>
      </S.TextContainer>

      <Map />
    </S.Wrapper>
  );
}
