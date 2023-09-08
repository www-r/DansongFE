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
      <div id="scroll-scene-6">
        <S.LogoSection>
          <S.LogoContainer className="sticky" id="commerce">
            <Logo logo="itreamingB" size="fullLogo" src="/logos/itreaming1.png" />
          </S.LogoContainer>
        </S.LogoSection>
      </div>

      <div id="scroll-scene-7">
        <S.ProductsSection>
          <S.ScrollProductContainer>
            <S.ScrollProductItem opacity={1}>
              <img src="images/butter.png" alt="popcorn butter image" height={700} />
            </S.ScrollProductItem>
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
                <img src="images/caramel.png" alt="popcorn caramel image" height={500} />
              </SwiperSlide>
              <SwiperSlide>
                <img src="images/onion.png" alt="popcorn onion image" height={500} />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/bbq.png" alt="popcorn bbq image" height={500} />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/butter.png" alt="popcorn butter image" height={500} />
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
                <img src="/images/smartstore.png" alt="smartstore" />
              </S.CommercePic>
              <S.CommercePic>
                <img src="/images/sns.png" alt="sns" />
              </S.CommercePic>
            </S.PicsContainer>
          </CenterContainer>
        </S.CommerceAdvertisementSection>
      </div>
    </S.Section>
  );
}
