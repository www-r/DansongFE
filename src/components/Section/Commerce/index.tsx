import * as S from './style';
import { CenterContainer } from '../../../styles/global';
import Textline from '../../Textline';
import Logo from '../../Logo';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
export default function Commerce() {
  return (
    <S.Section>

      <S.LogoSection>
        <S.LogoContainer id="commerce">
          <Logo logo="itreamingB" size="fullLogo" src="/logos/itreaming1.png" />

        </S.LogoContainer>
      </S.LogoSection>

      <S.ProductsSection>
        <S.SwiperContainer>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={3}
            spaceBetween={0}
            onSlideChange={() => console.log('slide change')}
            autoplay
          >
            <SwiperSlide>
              <img
                src="images/caramel.png"
                alt="popcorn caramel image"
                style={{ width: '25vw', margin: 'auto' }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/onion.png"
                alt="popcorn onion image"
                style={{ width: '25vw', margin: 'auto' }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/bbq.png"
                alt="popcorn bbq image"
                style={{ width: '25vw', margin: 'auto' }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/butter.png"
                alt="popcorn butter image"
                style={{ width: '25vw', margin: 'auto' }}
              />
            </SwiperSlide>
          </Swiper>
        </S.SwiperContainer>
        <S.TextContainer>
          <Textline
            fontSize={2.4}
            textAlign="center"
            // isFontBold={true}
            // color={({ theme }) => theme.textColor.footer}
          >
            NON GMO 찰옥수수를 사용
          </Textline>
          <Textline fontSize={2.4} textAlign="center">
            버터에 두번 구워 더 바삭한 꽃모양 팝콘
          </Textline>
        </S.TextContainer>
        <S.ImageContainer>
          <img src="/images/popcorn.png" alt="popcorn image" style={{ width: '70vw' }} />
          <img src="/images/popcornCommercial.gif" alt="" style={{ width: '60rem' }} />
        </S.ImageContainer>

        <S.CoBrandsContainer>
          <CenterContainer>
            <S.BrandsContainerTitle>COWORKERS</S.BrandsContainerTitle>
            <S.BrandLogosContainer>
              <Logo logo="생활맥주" size="brandLogo" src="/logos/beer.png" />
              <Logo logo="코드야드바이메리어트" size="brandLogo" src="/logos/marriot.png" />
            </S.BrandLogosContainer>
          </CenterContainer>
        </S.CoBrandsContainer>
      </S.ProductsSection>

      <S.CommerceAdvertisementSection>
        <CenterContainer direction="column">
          <S.TextContainer>
            <Textline fontSize={2.4} textAlign="center">
              유통 중간마진을 최소화 하여
            </Textline>
            <Textline fontSize={2.4} textAlign="center">
              제조사와 소비자들을
            </Textline>
            <Textline fontSize={4} textAlign="center" isFontBold={true}>
              바로 연결
            </Textline>
          </S.TextContainer>
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
              <img
                src="/images/smartstore.png"
                alt="smartstore"
                style={{ width: '40vw', minWidth: '40rem' }}
              />
              <S.BtnsContainer>
                <a href="https://smartstore.naver.com/eatreaming" target="blank"></a>
              </S.BtnsContainer>
            </S.CommercePic>
            <S.CommercePic>
              <img src="/images/sns.png" alt="sns" style={{ width: '40vw', minWidth: '50rem' }} />
            </S.CommercePic>
          </S.PicsContainer>
          <S.BtnsContainer>
            <a href="https://smartstore.naver.com/eatreaming" target="blank">
              <S.CommerceBtn>스마트스토어 바로가기</S.CommerceBtn>
            </a>
            <a href="https://youtube.com/@user-pf6hz4yw2g?si=QStqYwy1bB5c12N6">
              <S.CommerceBtn>유튜브 바로가기</S.CommerceBtn>
            </a>
            <a href="https://www.instagram.com/eatreaming/" target="blank">
              <S.CommerceBtn>인스타그램 바로가기</S.CommerceBtn>
            </a>
          </S.BtnsContainer>
        </CenterContainer>
      </S.CommerceAdvertisementSection>
    </S.Section>
  );
}
