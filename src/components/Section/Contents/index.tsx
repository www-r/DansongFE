import { useState } from 'react';
import * as S from './style';
import { Center } from '../../../styles/global';
import { CenterContainer } from '../../../styles/global';
import FlipCard from '../../FlipCard';
import FlipCardFront from '../../FlipCard/Front';
import FlipCardBack from '../../FlipCard/Back';
import Textline from '../../Textline';
import Button from '../../Button';
// import Logo from '../../Logo';

import { Theme } from '@emotion/react';

export default function Contents() {
  const [width, setWidth] = useState(window.innerWidth);
  // const videoRef = useRef();
  window.addEventListener('resize', () => {
    setWidth(window.innerWidth);
  });
  // window.addEventListener('scroll', () => {
  //   console.log(scrollY);
  //   if (scrollY > 4100) {
  //     videoRef.current.style.transform = 'scale(' + 0.8 + ')';
  //   }
  // });
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
            <S.CoBrandCategoryListWrapper>
              <S.CoBrandCategoryList>
                <FlipCard>
                  <FlipCardFront>
                    <div>
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
                      <S.CoBrandCategoryBrands>MLB,오프화이트,코오롱스포스</S.CoBrandCategoryBrands>
                    </div>
                    <Button
                      text="자세히알아보기"
                      type="scroll"
                      onClick={() => console.log('ddd')}
                    />
                  </FlipCardFront>
                  <FlipCardBack>
                    <div className="logosContainer"></div>
                  </FlipCardBack>
                </FlipCard>
              </S.CoBrandCategoryList>
              <S.CoBrandCategoryList>
                <FlipCard>
                  <FlipCardFront>
                    <div>
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
                      <S.CoBrandCategoryBrands>프룻오브디얼스</S.CoBrandCategoryBrands>
                    </div>
                    <Button
                      text="자세히알아보기"
                      type="scroll"
                      onClick={() => console.log('ddd')}
                    />
                  </FlipCardFront>
                  <FlipCardBack>
                    <div className="logosContainer"></div>
                  </FlipCardBack>
                </FlipCard>
              </S.CoBrandCategoryList>
              <S.CoBrandCategoryList>
                <FlipCard>
                  <FlipCardFront>
                    <div>
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
                      <S.CoBrandCategoryBrands>
                        푸디베어,하이트진로,오리온,더글레리벳위스키,역전할머니맥주,일일향,문현전통한우곱창전골
                      </S.CoBrandCategoryBrands>
                    </div>
                    <Button
                      text="자세히알아보기"
                      type="scroll"
                      onClick={() => console.log('ddd')}
                    />
                  </FlipCardFront>
                  <FlipCardBack>
                    <div className="logosContainer"></div>
                  </FlipCardBack>
                </FlipCard>
              </S.CoBrandCategoryList>
            </S.CoBrandCategoryListWrapper>
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
              // controls
              loop
              muted
              width={width}
              // ref={videoRef}
            >
              팝꽃 광고 영상
            </S.AdvertiseVideo>
          </S.AdvertiseVideoContainer>
          <S.AdvertisePicsContainer>
            <img src="../../public/images/thumbnail1.jpg" alt="" height={200} />
          </S.AdvertisePicsContainer>
        </S.AdvertiseSection>
      </Center>
    </S.Section>
  );
}
