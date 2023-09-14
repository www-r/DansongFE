import { useState } from 'react';
import * as S from './style';
// import { useScroll, useTransform, motion } from 'framer-motion';
import { CenterContainer } from '../../../styles/global';
import Textline from '../../Textline';
import Logo from '../../Logo';
import { Theme } from '@emotion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { theme } from '../../../styles/theme';
export default function Contents() {
  const [, setWidth] = useState(window.innerWidth);

  window.addEventListener('resize', () => {
    setWidth(window.innerWidth);
  });

  return (
    <S.Section id="contents">
      <CenterContainer>
        <S.TextSection className="text-section" id="contents">
          <Textline
            fontSize={2.4}
            isFontBold={true}
            color={theme.textColor.white}
            textAlign="center"
          >
            컨텐츠 기획, 게스트 섭외부터 촬영과 편집까지
          </Textline>
          <h2>
            <Textline
              fontSize={7}
              isFontBold={true}
              color={theme.textColor.white}
              textAlign="center"
            >
              다양한 미디어 컨텐츠
            </Textline>
            <Textline
              fontSize={7}
              isFontBold={true}
              color={theme.textColor.white}
              textAlign="center"
            >
              직접 제작
            </Textline>
          </h2>
        </S.TextSection>
      </CenterContainer>

      <S.YoutubeSection>
        <CenterContainer direction="column">
          <S.CoBrandsIntro>
            <h3>
              <Textline
                fontSize={4}
                isFontBold={true}
                color={theme.textColor.white}
                marginBottom="1.2em"
                textAlign="center"
              >
                유튜브
              </Textline>
            </h3>
            <h4>
              <Textline
                fontSize={3}
                color={theme.textColor.white}
                textAlign="center"
                marginBottom="2em"
              >
                구.안.지. X 브랜드
                <br />
                협업 현황
              </Textline>
            </h4>
          </S.CoBrandsIntro>
          <S.CoBrandCategoryListWrapper>
            <S.CoBrandCategoryList>
              <S.CategoryListItemTitle>
                <Textline fontSize={2.1} color={theme.textColor.white} textAlign="center">
                  FOOD
                </Textline>
                <Textline
                  fontSize={4}
                  isFontBold={true}
                  color={theme.textColor.white}
                  textAlign="center"
                >
                  푸드
                </Textline>
              </S.CategoryListItemTitle>
              <S.CoBrandLogosContainer>
                <a href="https://youtu.be/OsCz6FrfXAI?si=qcfwO3bYjuCR_y5-" target="blank">
                  <Logo logo="푸디베어" src="/logos/foodybear.png" size="brandLogo" />
                </a>
                <a href="https://youtu.be/h8NKkKZcko0?si=Z5lZGJXyn4Ei5qaa" target="blank">
                  <Logo logo="맵데이" src="/logos/mapday.jpeg" border="circle" size="brandLogo" />
                </a>
                <a href="https://youtu.be/YFoKSMItdmA?si=t17svg4FQ-LxQcSL" target="blank">
                  <Logo logo="하이트 진로" src="/logos/hitejinro.png" size="brandLogo" />
                </a>
                <a href="https://youtu.be/YFoKSMItdmA?si=t17svg4FQ-LxQcSL" target="blank">
                  <Logo logo="오리온" src="/logos/orion.png" size="brandLogo" />
                </a>
                <a href="https://youtu.be/SvkCEeosqT0?si=cdzpdh_CPAYNZMB0" target="blank">
                  <Logo logo="더 글레리벳 위스키" src="/logos/glenlivet.png" size="brandLogo" />
                </a>
                <a href="https://youtu.be/Z12AZhTe0HM?si=6bAppNRmbKZ2x-st" target="blank">
                  <Logo
                    logo="역전할머니맥주"
                    src="/logos/beer.png"
                    border="circle"
                    size="brandLogo"
                  />
                </a>
                <a href="https://youtu.be/wcWc75IdR9E?si=SOC7wzXlYj813NzE" target="blank">
                  <Logo logo="일일향" src="/logos/ililhyang.png" size="brandLogo" />
                </a>
                <a
                  href="https://www.youtube.com/live/aCPIsPdx-w4?si=OPuFrfLqBAPbMBMN"
                  target="blank"
                >
                  <Logo
                    logo="문헌 전통 한우 곱창 전골"
                    src="/logos/meat.png"
                    border="circle"
                    size="brandLogo"
                  />
                </a>
              </S.CoBrandLogosContainer>
            </S.CoBrandCategoryList>
            <S.CoBrandCategoryList>
              <S.CategoryListItemTitle>

                <Textline
                  fontSize={2.1}
                  color={({ theme }: { theme: Theme }) => theme.textColor.white}
                  textAlign="center"
                >
                  FASHION/
                  <br />
                  BEAUTY

                </Textline>
                <Textline
                  fontSize={4}
                  isFontBold={true}
                  color={theme.textColor.white}
                  textAlign="center"
                >
                  패션/
                  <br />
                  뷰티
                </Textline>
              </S.CategoryListItemTitle>
              <S.CoBrandLogosContainer>
                <a href="https://youtu.be/zl-1GtXMBr4?si=CkAp2PTe3OGb0sHJ" target="blank">
                  <Logo logo="mlb" src="/logos/mlb.png" size="brandLogo" />
                </a>
                <a href="https://youtu.be/WoLBJV1Yibc?si=7EePWAVJ-7SN4KLU" target="blank">
                  <Logo logo="off white" src="/logos/offWhite.svg" size="brandLogo" />
                </a>
                <a href="https://youtu.be/65u25SUq9pw?si=Lq9Yo4eq5lYjI7qM" target="blank">
                  <Logo logo="kolon sports" src="/logos/kolonsport.png" size="brandLogo" />
                </a>
                <a href="https://youtu.be/XlCWDHCoLdU?si=Y2tQJeqJIiQk8hCu" target="blank">
                  <Logo
                    logo="fruit of the earth"
                    src="/logos/fruitoftheearth.jpeg"
                    border="circle"
                    size="brandLogo"
                  />
                </a>
              </S.CoBrandLogosContainer>
            </S.CoBrandCategoryList>
          </S.CoBrandCategoryListWrapper>
        </CenterContainer>
      </S.YoutubeSection>

      <S.AdvertiseSection>
        <h4>
          <CenterContainer>
            <Textline fontSize={2.4} color={theme.textColor.white}>
              제품 사진부터 광고 영상까지
            </Textline>
          </CenterContainer>
        </h4>
        <h3>
          <CenterContainer>
            <Textline
              fontSize={4}
              isFontBold={true}
              color={theme.textColor.white}
              marginBottom="5rem"
            >
              광고 / 바이럴
            </Textline>
          </CenterContainer>
        </h3>
        <CenterContainer>
          <S.AdvertiseVideo
            src={`${import.meta.env.VITE_BASE_URL}/videos/advertiseVideo.mp4`}
            autoPlay
            controls
            loop
            muted
            style={{ width: '80vw' }}
          >
            팝꽃 광고 영상
          </S.AdvertiseVideo>
        </CenterContainer>
        <S.AdvertisePicsContainer>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={3.5}
            spaceBetween={50}
            // onSlideChange={() => console.log('slide change')}
            autoplay
          >
            <SwiperSlide>
              <img src="/images/A6.jpg" alt="commercial image" style={{ height: '20vw' }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/A13.jpg" alt="commercial image" style={{ height: '20vw' }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/A14.jpg" alt="commercial image" style={{ height: '20vw' }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/A29.jpg" alt="commercial image" style={{ height: '20vw' }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/A42.jpg" alt="commercial image" style={{ height: '20vw' }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/A45.jpg" alt="commercial image" style={{ height: '20vw' }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/A50.jpg" alt="commercial image" style={{ height: '20vw' }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/A64.jpg" alt="commercial image" style={{ height: '20vw' }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/A67.jpg" alt="commercial image" style={{ height: '20vw' }} />
            </SwiperSlide>
          </Swiper>
        </S.AdvertisePicsContainer>
      </S.AdvertiseSection>
    </S.Section>
  );
}
