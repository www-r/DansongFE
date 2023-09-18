import { useRef } from 'react';
import * as S from './style';
import Map from '../Map';
import Button from '../Button';
import Textline from '../Textline';
import { isMobile } from 'react-device-detect';
export default function ContactInfo() {
  const MobileContactRef = useRef<HTMLAnchorElement>(null);
  const EmailContactRef = useRef<HTMLAnchorElement>(null);
  const AddressKRContactRef = useRef<HTMLAnchorElement>(null);

  const copyContent = async (content: string) => {
    try {
      await navigator.clipboard.writeText(content);
      alert('Content copied to clipboard');
      /* Resolved - 클립보드에 복사 성공 */
    } catch (err) {
      alert('Failed to copy: ');
      /* Rejected - 클립보드에 복사 실패 */
    }
  };
  const clickHandler = (typeName: string) => {
    let content;
    switch (typeName) {
      case 'mobile':
        content = MobileContactRef.current?.innerText;

        //for content type undefined error
        content && copyContent(content);
        break;
      case 'email':
        content = EmailContactRef.current?.innerText;

        //for content type undefined error
        content && copyContent(content);
        break;
      case 'address':
        content = AddressKRContactRef.current?.innerText;

        //for content type undefined error
        content && copyContent(content);
        break;
    }
  };
  return (
    <S.Wrapper>
      <S.TextContainer>
        <h3>
          <Textline fontSize={3} isFontBold marginBottom="2rem">
            CONTACT INFO
          </Textline>
        </h3>
        <table>
          <tbody>
            <S.TableRow isMobile={isMobile ? true : false}>
              <S.TableHeader>
                <S.Label>전화</S.Label>
              </S.TableHeader>
              <td>
                <a href="tel:070-7799-0703" id="contact--mobile" ref={MobileContactRef}>
                  070 7799 0703
                </a>
                <Button
                  className="contactPage mobile"
                  onClick={() => {
                    clickHandler('mobile');
                  }}
                >
                  복사하기
                </Button>
              </td>
            </S.TableRow>
            <S.TableRow isMobile={isMobile ? true : false}>
              <S.Label>이메일</S.Label>
              <td>
                <a href="mailto:official@dansong.kr" id="contact--email" ref={EmailContactRef}>
                  official@dansong.kr
                </a>
                <Button
                  className="contactPage email"
                  onClick={() => {
                    clickHandler('email');
                  }}
                >
                  복사하기
                </Button>
              </td>
            </S.TableRow>
            <S.TableRow isMobile={isMobile ? true : false}>
              <S.Label>주소</S.Label>
              <td>
                <S.Info>
                  <a className="address" href="#" id="contact--address" ref={AddressKRContactRef}>
                    서울 강남구 학동로 212 포스트빌 703
                  </a>
                  <Button
                    className="contactPage address"
                    onClick={() => {
                      clickHandler('address');
                    }}
                  >
                    복사하기
                  </Button>
                </S.Info>
                {/* <S.Info>
                  <a
                    className="address"
                    href="javascript:void(0)"
                    ref={AddressENContactRef}
                  >
                    212, Hakdong-ro, Gangnam-gu, Postville 703
                  </a>
                  <Button className="contactPage address" onClick={copyInfo}>
                    복사하기
                  </Button>
                </S.Info> */}
              </td>
            </S.TableRow>
          </tbody>
        </table>
      </S.TextContainer>

      <Map />
    </S.Wrapper>
  );
}
