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
      <Center>
        <S.TextSection className="text-section">
          <p>
            <CenterContainer>
              <Textline
                fontSize={2.4}
                isFontBold={true}
                color={({ theme }: { theme: Theme }) => theme.textColor.white}
              >
                컨텐츠 기획, 게스트 섭외부터 촬영과 편집까지
              </Textline>
            </CenterContainer>
          </p>
          <h2>
            <CenterContainer direction="column">
              <Textline
                fontSize={8}
                isFontBold={true}
                color={({ theme }: { theme: Theme }) => theme.textColor.white}
              >
                다양한 미디어 컨텐츠
              </Textline>
              <Textline
                fontSize={8}
                isFontBold={true}
                color={({ theme }: { theme: Theme }) => theme.textColor.white}
              >
                직접 제작
              </Textline>
            </CenterContainer>
          </h2>
        </S.TextSection>
        <S.YoutubeSection>
          <S.CoBrandsIntro>
            <h3>
              <CenterContainer>
                <Textline
                  fontSize={4}
                  isFontBold={true}
                  color={({ theme }: { theme: Theme }) => theme.textColor.white}
                >
                  유튜브
                </Textline>
              </CenterContainer>
            </h3>
            <h4>
              <CenterContainer>
                <Textline
                  fontSize={4}
                  isFontBold={true}
                  color={({ theme }: { theme: Theme }) => theme.textColor.white}
                >
                  브랜드 협업 현황
                </Textline>
              </CenterContainer>
              {/* <CenterContainer>
                <Textline
                  fontSize={4}
                  isFontBold={true}
                  color={({ theme }: { theme: Theme }) => theme.textColor.white}
                  marginBottom="15rem"
                >
                  구.안.지. X 브랜드
                </Textline>
              </CenterContainer> */}
            </h4>
            <CenterContainer>
              <S.CoBrandCategoryListWrapper>
                <S.CoBrandCategoryList>
                  <S.CoBrandCategoryListTitle>
                    <h4>
                      <Textline
                        fontSize={2.1}
                        color={({ theme }: { theme: Theme }) => theme.textColor.white}
                        marginBottom="1.6rem"
                      >
                        FASHION
                      </Textline>
                    </h4>
                    <h3>
                      <Textline
                        fontSize={4}
                        isFontBold={true}
                        color={({ theme }: { theme: Theme }) => theme.textColor.white}
                      >
                        패션
                      </Textline>
                    </h3>
                  </S.CoBrandCategoryListTitle>
                  <S.CoBrandLogosContainer>
                    <Logo
                      size="small"
                      logo="mlb"
                      src="https://dansong-s3.s3.ap-northeast-2.amazonaws.com/logos/mlb.png"
                    />
                    <Logo
                      logo="off white"
                      src="https://dansong-s3.s3.ap-northeast-2.amazonaws.com/logos/offWhite.svg"
                    />
                    <Logo
                      logo="kolon sports"
                      src="https://dansong-s3.s3.ap-northeast-2.amazonaws.com/logos/kolonsport.png"
                    />
                  </S.CoBrandLogosContainer>
                </S.CoBrandCategoryList>
                <S.CoBrandCategoryList>
                  <S.CoBrandCategoryListTitle>
                    <h4>
                      <Textline
                        fontSize={2.1}
                        color={({ theme }: { theme: Theme }) => theme.textColor.white}
                        marginBottom="1.6rem"
                      >
                        BEAUTY
                      </Textline>
                    </h4>
                    <h3>
                      <Textline
                        fontSize={4}
                        isFontBold={true}
                        color={({ theme }: { theme: Theme }) => theme.textColor.white}
                      >
                        뷰티
                      </Textline>
                    </h3>
                  </S.CoBrandCategoryListTitle>
                  <S.CoBrandLogosContainer>
                    <Logo
                      logo="fruit of the earth"
                      size="medium"
                      src="https://dansong-s3.s3.ap-northeast-2.amazonaws.com/logos/fruitoftheearth.jpeg"
                      border="circle"
                    />
                  </S.CoBrandLogosContainer>
                </S.CoBrandCategoryList>
                <S.CoBrandCategoryList>
                  <S.CoBrandCategoryListTitle>
                    <h4>
                      <Textline
                        fontSize={2.1}
                        color={({ theme }: { theme: Theme }) => theme.textColor.white}
                        marginBottom="1.6rem"
                      >
                        FOOD
                      </Textline>
                    </h4>
                    <h3>
                      <Textline
                        fontSize={4}
                        isFontBold={true}
                        color={({ theme }: { theme: Theme }) => theme.textColor.white}
                      >
                        푸드
                      </Textline>
                    </h3>
                  </S.CoBrandCategoryListTitle>
                  <S.CoBrandLogosContainer>
                    <Logo
                      logo="FOODYBEAR"
                      src="https://dansong-s3.s3.ap-northeast-2.amazonaws.com/logos/foodybear.png"
                    />
                    <Logo
                      src="https://dansong-s3.s3.ap-northeast-2.amazonaws.com/logos/hitejinro.png"
                      logo="HITE JINRO"
                    />
                    <Logo
                      logo="Orion"
                      src="https://dansong-s3.s3.ap-northeast-2.amazonaws.com/logos/orion.png"
                    />
                    <Logo
                      logo="더 글레리벳 위스키"
                      src="https://dansong-s3.s3.ap-northeast-2.amazonaws.com/logos/glenlivet.png"
                    />
                    <Logo
                      logo="역전할머니맥주"
                      src="https://dansong-s3.s3.ap-northeast-2.amazonaws.com/logos/1982.jpeg"
                      border="circle"
                    />
                    <Logo
                      logo="일일향"
                      src="https://dansong-s3.s3.ap-northeast-2.amazonaws.com/logos/ililhyang.png"
                    />
                    <Logo
                      logo="문헌 전통 한우 곱창 전골"
                      src="https://dansong-s3.s3.ap-northeast-2.amazonaws.com/logos/meat.png"
                      border="circle"
                    />
                  </S.CoBrandLogosContainer>
                </S.CoBrandCategoryList>
              </S.CoBrandCategoryListWrapper>
            </CenterContainer>
          </S.CoBrandsIntro>
        </S.YoutubeSection>
        <S.AdvertiseSection>
          <h4>
            <CenterContainer>
              <Textline
                fontSize={2.4}
                color={({ theme }: { theme: Theme }) => theme.textColor.white}
              >
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
              src="https://dansong-s3.s3.ap-northeast-2.amazonaws.com/videos/advertiseVideo.mp4"
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
      </Center>
    </S.Section>
  );
}
