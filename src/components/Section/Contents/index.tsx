import { useState, useRef } from 'react';
import * as S from './style';
import { Center } from '../../../styles/global';
import { CenterContainer } from '../../../styles/global';

import Textline from '../../Textline';
import Button from '../../Button';
import Logo from '../../Logo';
import { Theme } from '@emotion/react';

export default function Contents() {
  const [width, setWidth] = useState(window.innerWidth);
  const videoRef = useRef();
  window.addEventListener('resize', () => {
    setWidth(window.innerWidth);
  });
  window.addEventListener('scroll', () => {
    console.log(scrollY);
    if (scrollY > 4100) {
      videoRef.current.style.transform = 'scale(' + 0.8 + ')';
    }
  });
  return (
    <S.Section>
      <CenterContainer>
        <S.TextSection className="text-section">
          <Textline
            fontSize={2.4}
            isFontBold={true}
            color={({ theme }: { theme: Theme }) => theme.textColor.white}
            textAlign="center"
          >
            컨텐츠 기획, 게스트 섭외부터 촬영과 편집까지
          </Textline>
          <h2>
            <Textline
              fontSize={7}
              isFontBold={true}
              color={({ theme }: { theme: Theme }) => theme.textColor.white}
              textAlign="center"
            >
              다양한 미디어 컨텐츠
            </Textline>
            <Textline
              fontSize={7}
              isFontBold={true}
              color={({ theme }: { theme: Theme }) => theme.textColor.white}
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
                color={({ theme }: { theme: Theme }) => theme.textColor.white}
                marginBottom="1.2em"
                textAlign="center"
              >
                유튜브
              </Textline>
            </h3>
            <h4>
              <Textline
                fontSize={3}
                color={({ theme }: { theme: Theme }) => theme.textColor.white}
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
                <Textline
                  fontSize={2.1}
                  color={({ theme }: { theme: Theme }) => theme.textColor.white}
                  textAlign="center"
                >
                  FASHION
                </Textline>
                <Textline
                  fontSize={4}
                  isFontBold={true}
                  color={({ theme }: { theme: Theme }) => theme.textColor.white}
                  textAlign="center"
                >
                  패션
                </Textline>
              </S.CategoryListItemTitle>
              <S.CoBrandLogosContainer>
                <Logo size="small" logo="mlb" src="/logos/mlb.png" />
                <Logo logo="off white" src="/logos/offWhite.svg" />
                <Logo logo="kolon sports" src="/logos/kolonsport.png" />
              </S.CoBrandLogosContainer>
            </S.CoBrandCategoryList>
            <S.CoBrandCategoryList>
              <S.CategoryListItemTitle>
                <Textline
                  fontSize={2.1}
                  color={({ theme }: { theme: Theme }) => theme.textColor.white}
                  textAlign="center"
                >
                  BEAUTY
                </Textline>
                <Textline
                  fontSize={4}
                  isFontBold={true}
                  color={({ theme }: { theme: Theme }) => theme.textColor.white}
                  textAlign="center"
                >
                  뷰티
                </Textline>
              </S.CategoryListItemTitle>
              <S.CoBrandLogosContainer>
                <Logo
                  logo="fruit of the earth"
                  size="medium"
                  src="/logos/fruitoftheearth.jpeg"
                  border="circle"
                />
              </S.CoBrandLogosContainer>
            </S.CoBrandCategoryList>
            <S.CoBrandCategoryList>
              <S.CategoryListItemTitle>
                <Textline
                  fontSize={2.1}
                  color={({ theme }: { theme: Theme }) => theme.textColor.white}
                  textAlign="center"
                >
                  FOOD
                </Textline>
                <Textline
                  fontSize={4}
                  isFontBold={true}
                  color={({ theme }: { theme: Theme }) => theme.textColor.white}
                  textAlign="center"
                >
                  푸드
                </Textline>
              </S.CategoryListItemTitle>
              <S.CoBrandLogosContainer>
                <Logo logo="푸디베어" src="/logos/foodybear.png" />
                <Logo logo="하이트 진로" src="/logos/hitejinro.png" />
                <Logo logo="오리온" src="/logos/orion.png" />
                <Logo logo="더 글레리벳 위스키" src="/logos/glenlivet.png" />
                <Logo logo="역전할머니맥주" src="/logos/beer.png" border="circle" />
                <Logo logo="일일향" src="/logos/ililhyang.png" />
                <Logo logo="문헌 전통 한우 곱창 전골" src="/logos/meat.png" border="circle" />
              </S.CoBrandLogosContainer>
            </S.CoBrandCategoryList>
          </S.CoBrandCategoryListWrapper>
        </CenterContainer>
      </S.YoutubeSection>

      <S.AdvertiseSection>
        <h4>
          <CenterContainer>
            <Textline fontSize={2.4} color={({ theme }: { theme: Theme }) => theme.textColor.white}>
              제품 사진부터 광고 영상까지
            </Textline>
          </CenterContainer>
        </h4>
        <h3>
          <CenterContainer>
            <Textline
              fontSize={4}
              isFontBold={true}
              color={({ theme }: { theme: Theme }) => theme.textColor.white}
              marginBottom="5rem"
            >
              광고 / 바이럴
            </Textline>
          </CenterContainer>
        </h3>
        <S.AdvertiseVideoContainer>
          <S.AdvertiseVideo
           src={`${import.meta.env.VITE_BASE_URL}/videos/advertiseVideo.mp4`}
            autoPlay
            controls
            loop
            muted
            width={width}
            ref={videoRef}
       
          >
            팝꽃 광고 영상
          </S.AdvertiseVideo>
        </S.AdvertiseVideoContainer>
        <S.AdvertisePicsContainer>
          <img
            src="https://dansong-s3.s3.ap-northeast-2.amazonaws.com/images/thumbnail1.jpg"
            alt="thumbnail"
            height={180}
          />
          <img
            src="https://dansong-s3.s3.ap-northeast-2.amazonaws.com/images/thumbnail1.jpg"
            alt="thumbnail"
            height={180}
          />
          <img
            src="https://dansong-s3.s3.ap-northeast-2.amazonaws.com/images/thumbnail1.jpg"
            alt="thumbnail"
            height={180}
          />
          <img
            src="https://dansong-s3.s3.ap-northeast-2.amazonaws.com/images/thumbnail1.jpg"
            alt="thumbnail"
            height={180}
          />
          <img
            src="https://dansong-s3.s3.ap-northeast-2.amazonaws.com/images/thumbnail1.jpg"
            alt="thumbnail"
            height={180}
          />
          <img
            src="https://dansong-s3.s3.ap-northeast-2.amazonaws.com/images/thumbnail1.jpg"
            alt="thumbnail"
            height={180}
          />
          <img
            src="https://dansong-s3.s3.ap-northeast-2.amazonaws.com/images/thumbnail1.jpg"
            alt="thumbnail"
            height={180}
          />
          <img
            src="https://dansong-s3.s3.ap-northeast-2.amazonaws.com/images/thumbnail1.jpg"
            alt="thumbnail"
            height={180}
          />
        </S.AdvertisePicsContainer>
      </S.AdvertiseSection>
    </S.Section>
  );
}
