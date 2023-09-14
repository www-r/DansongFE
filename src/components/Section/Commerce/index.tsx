import * as S from './style';
import { CenterContainer } from '../../../styles/global';
import Textline from '../../Textline';
// import Logo from '../../Logo';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
export default function Commerce() {
  return (
    <S.Section>
      <img src="/images/commerce1.png" alt="" style={{ width: '100vw', marginBottom: '-10px' }} />
      <img src="/images/commerce2.png" alt="" style={{ width: '100vw', marginBottom: '-10px' }} />
      <img src="/images/commerce3.png" alt="" style={{ width: '100vw', marginBottom: '-10px' }} />
      <img src="/images/commerce4.png" alt="" style={{ width: '100vw', marginBottom: '-10px' }} />

      {/* <S.ImageContainer>
        <img src="/images/popcorn.png" alt="popcorn image" style={{ width: '70vw' }} />
      </S.ImageContainer> */}

      <S.CommerceAdvertisementSection>
        <CenterContainer direction="column">
          {/* <S.TextContainer>
            <Textline fontSize={2.4} textAlign="center">
              유통 중간마진을 최소화 하여
            </Textline>
            <Textline fontSize={2.4} textAlign="center">
              제조사와 소비자들을
            </Textline>
            <Textline fontSize={4} textAlign="center" isFontBold={true}>
              바로 연결
            </Textline>
          </S.TextContainer> */}
          <S.TextContainer>
            <Textline fontSize={2.4} textAlign="center">
              네이버 스마트 스토어부터, 인스타그램, 유튜브, 틱톡까지
            </Textline>
            <h2>
              <Textline fontSize={8} isFontBold={true} textAlign="center">
                제품 홍보부터,
              </Textline>
              <Textline fontSize={8} isFontBold={true} textAlign="center">
                판매까지
              </Textline>
            </h2>
          </S.TextContainer>
          <S.PicsContainer>
            <S.CommercePic>
              <img src="/images/smartstore.png" alt="smartstore" style={{ width: '40vw' }} />
              <S.BtnsContainer>
                <a href="https://smartstore.naver.com/eatreaming" target="blank">
                  <S.CommerceBtn>스마트스토어 바로가기</S.CommerceBtn>
                </a>
              </S.BtnsContainer>
            </S.CommercePic>
            <S.CommercePic>
              <img src="/images/sns.png" alt="sns" style={{ width: '40vw' }} />
              <S.BtnsContainer>
                <a href="https://youtube.com/@user-pf6hz4yw2g?si=QStqYwy1bB5c12N6" target="blank">
                  <S.CommerceBtn>유튜브 바로가기</S.CommerceBtn>
                </a>
                <a href="https://www.instagram.com/eatreaming/" target="blank">
                  <S.CommerceBtn>인스타그램 바로가기</S.CommerceBtn>
                </a>
              </S.BtnsContainer>
            </S.CommercePic>
          </S.PicsContainer>
        </CenterContainer>
      </S.CommerceAdvertisementSection>
    </S.Section>
  );
}
