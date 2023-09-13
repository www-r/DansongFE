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
      <S.LogoSection id="commerce">
        <S.LogoContainer>
          <Logo logo="itreamingB" size="large" src="/logos/itreaming1.png" />
        </S.LogoContainer>
      </S.LogoSection>

      <div id="scroll-scene-7">
        <S.ProductsSection>
          <S.ScrollProductContainer>
            {/* <S.ScrollProductItem opacity={1}>
              <img src="images/butter.png" alt="popcorn butter image" height={700} />
            </S.ScrollProductItem> */}
            {/* <img src="images/eatreaming.png" alt="" /> */}
          </S.ScrollProductContainer>
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
      </div>

      <div id="scroll-scene-8">
        <S.CommerceAdvertisementSection>
          <CenterContainer direction="column">
            <S.TextContainer>
              <Textline fontSize={2.4} isFontBold={true} textAlign="center">
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
      </div>
    </S.Section>
  );
}
