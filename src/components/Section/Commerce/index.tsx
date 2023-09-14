import * as S from './style';
import { CenterContainer } from '../../../styles/global';
import Textline from '../../Textline';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import Logo from '../../Logo';
import FlipCard from '../../FlipCard';
import FlipCardBack from '../../FlipCard/Back';
import FlipCardFront from '../../FlipCard/Front';

export default function Commerce() {
  return (
    <S.Section>
      <S.SwiperContainer>
        <Swiper
          slidesPerView={2}
          centeredSlides={true}
          spaceBetween={0}
          grabCursor={true}
          effect={'coverflow'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
          }}
          modules={[Autoplay, Navigation, EffectCoverflow]}
          autoplay
          loop={true}
          navigation={true}
        >
          <SwiperSlide>
            <S.SwiperSlide backgroundColor="rgb(247,237,229)">
              <CenterContainer>
                <img
                  src="/images/butter.png"
                  alt="popcorn butter image"
                  style={{ width: '25%', margin: 'auto' }}
                />
              </CenterContainer>
            </S.SwiperSlide>
          </SwiperSlide>

          <SwiperSlide>
            <S.SwiperSlide backgroundColor="rgb(196, 155, 109)">
              <CenterContainer>
                <img
                  src="images/caramel.png"
                  alt="popcorn caramel image"
                  style={{ width: '25%', margin: 'auto' }}
                />
              </CenterContainer>
            </S.SwiperSlide>
          </SwiperSlide>

          <SwiperSlide>
            <S.SwiperSlide backgroundColor="rgb(200,218,176)">
              <CenterContainer>
                <img
                  src="images/onion.png"
                  alt="popcorn onion image"
                  style={{ width: '25%', margin: 'auto' }}
                />
              </CenterContainer>
            </S.SwiperSlide>
          </SwiperSlide>

          <SwiperSlide>
            <S.SwiperSlide backgroundColor="rgb(196,155,154)">
              <CenterContainer>
                <img
                  src="/images/bbq.png"
                  alt="popcorn bbq image"
                  style={{ width: '25%', margin: 'auto' }}
                />
              </CenterContainer>
            </S.SwiperSlide>
          </SwiperSlide>
        </Swiper>

        <S.OverlayScreen zIndex="9">
          <S.TextContainer>
            <CenterContainer direction="column">
              <Textline fontSize={3}>'팝꽃'은 개봉하자마자 내용물이 알알이 꽃처럼</Textline>
              <Textline fontSize={3}>예쁘게 피어난 것과 같아 붙여진 이름입니다.</Textline>
            </CenterContainer>
          </S.TextContainer>
        </S.OverlayScreen>
        <S.OverlayScreen zIndex="19">
          <S.CoBrandsContainer>
            <CenterContainer direction="column">
              <S.BrandsContainerTitle>COWORKERS</S.BrandsContainerTitle>
              <S.BrandLogosContainer>
                <Logo>
                  <img src="/logos/beer.png" />
                </Logo>
              </S.BrandLogosContainer>
            </CenterContainer>
          </S.CoBrandsContainer>
        </S.OverlayScreen>
      </S.SwiperContainer>

      <S.DeliciousSection>
        <CenterContainer>
          <div>
            <Textline fontSize={4} isFontBold={true} marginBottom="5rem" textAlign="center">
              왜 가장 맛있는 팝콘일까?
            </Textline>
            <S.FlipCardsContainer>
              <FlipCard>
                <FlipCardFront>
                  <S.CardGrid>
                    <Textline
                      fontSize={4}
                      isFontBold={true}
                      color={({ theme }: { theme: Theme }) => theme.textColor.black}
                      textAlign="center"
                    >
                      버터풍미
                    </Textline>

                    <p>
                      <Textline
                        fontSize={2.1}
                        color={({ theme }: { theme: Theme }) => theme.textColor.black}
                        textAlign="center"
                      >
                        입안 가득 퍼지는
                      </Textline>
                      <Textline
                        fontSize={2.1}
                        color={({ theme }: { theme: Theme }) => theme.textColor.black}
                        textAlign="center"
                        marginBottom="1.6rem"
                      >
                        고소한 버터의 풍미!
                      </Textline>
                    </p>
                    <img src="/images/srcButter.png" alt="" style={{ width: '100%' }} />
                    <p>
                      <Textline
                        fontSize={2.1}
                        color={({ theme }: { theme: Theme }) => theme.textColor.grey}
                        textAlign="center"
                      >
                        씹는 순간 입안 가득 퍼지는
                      </Textline>
                      <Textline
                        fontSize={2.1}
                        color={({ theme }: { theme: Theme }) => theme.textColor.grey}
                        textAlign="center"
                        marginBottom="1.6rem"
                      >
                        고소하고 부드러운 버터의 풍미!
                      </Textline>
                    </p>
                  </S.CardGrid>
                </FlipCardFront>
                <FlipCardBack>
                  <S.ImageContainer>
                    <img src="/images/srcButter.png" alt="" style={{ width: '100%' }} />
                  </S.ImageContainer>
                </FlipCardBack>
              </FlipCard>
              <FlipCard>
                <FlipCardFront>
                  <S.CardGrid>
                    <Textline
                      fontSize={4}
                      isFontBold={true}
                      color={({ theme }: { theme: Theme }) => theme.textColor.black}
                      textAlign="center"
                    >
                      바삭바삭
                    </Textline>

                    <p>
                      <Textline
                        fontSize={2.1}
                        color={({ theme }: { theme: Theme }) => theme.textColor.black}
                        textAlign="center"
                      >
                        두 번 구워
                      </Textline>
                      <Textline
                        fontSize={2.1}
                        color={({ theme }: { theme: Theme }) => theme.textColor.black}
                        textAlign="center"
                        marginBottom="1.6rem"
                      >
                        더욱 바사삭한 식감!
                      </Textline>
                    </p>
                    <S.ImageContainer>
                      <img src="/images/srcCorns.png" alt="" style={{ width: '100%' }} />
                    </S.ImageContainer>
                    <p>
                      <Textline
                        fontSize={2.1}
                        color={({ theme }: { theme: Theme }) => theme.textColor.grey}
                        textAlign="center"
                      >
                        고온과 저온에 한 번씩
                      </Textline>
                      <Textline
                        fontSize={2.1}
                        color={({ theme }: { theme: Theme }) => theme.textColor.grey}
                        textAlign="center"
                      >
                        버터에 두 번 제대로 구워낸 바삭함!
                      </Textline>
                    </p>
                  </S.CardGrid>
                </FlipCardFront>
                <FlipCardBack>
                  <S.ImageContainer>
                    <img src="/images/srcCorns.png" alt="" style={{ width: '100%' }} />
                  </S.ImageContainer>
                </FlipCardBack>
              </FlipCard>
              <FlipCard>
                <FlipCardFront>
                  <S.CardGrid>
                    <Textline
                      fontSize={4}
                      isFontBold={true}
                      color={({ theme }: { theme: Theme }) => theme.textColor.black}
                      textAlign="center"
                    >
                      단짠단짠
                    </Textline>
                    <p>
                      <Textline
                        fontSize={2.1}
                        color={({ theme }: { theme: Theme }) => theme.textColor.black}
                        textAlign="center"
                      >
                        손이 계속 가는
                      </Textline>
                      <Textline
                        fontSize={2.1}
                        color={({ theme }: { theme: Theme }) => theme.textColor.black}
                        textAlign="center"
                        marginBottom="1.6rem"
                      >
                        마성의 중독성, 단짠단짠!
                      </Textline>
                    </p>
                    <S.ImageContainer>
                      <img src="/images/srcPopcorns.png" alt="" style={{ width: '100%' }} />
                    </S.ImageContainer>
                    <p>
                      <Textline
                        fontSize={2.1}
                        color={({ theme }: { theme: Theme }) => theme.textColor.grey}
                        textAlign="center"
                      >
                        안 먹어본 사람은 있어도
                      </Textline>
                      <Textline
                        fontSize={2.1}
                        color={({ theme }: { theme: Theme }) => theme.textColor.grey}
                        textAlign="center"
                        marginBottom="1.6rem"
                      >
                        한 번만 먹은 사람은 없는 최고의 맛!
                      </Textline>
                    </p>
                  </S.CardGrid>
                </FlipCardFront>
                <FlipCardBack>
                  <S.ImageContainer>
                    <img src="/images/srcPopcorns.png" alt="" style={{ width: '100%' }} />
                  </S.ImageContainer>
                </FlipCardBack>
              </FlipCard>
            </S.FlipCardsContainer>
          </div>
        </CenterContainer>
      </S.DeliciousSection>

      <S.SafeSection>
        <Textline fontSize={4} isFontBold={true} marginBottom="5rem" textAlign="center">
          왜 안심일까?
        </Textline>
        <S.SafeLogosContainer>
          <S.ImageContainer>
            <img src="/logos/safeLogos.png" alt="" width="60%" />
          </S.ImageContainer>
        </S.SafeLogosContainer>
      </S.SafeSection>

      <S.AdvertisementSection>
        <CenterContainer direction="column">
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
          <S.TextContainer>
            <Textline fontSize={2.4} textAlign="center">
              유통 중간마진을 최소화 하여
            </Textline>
            <Textline fontSize={2.4} textAlign="center" marginBottom="2rem">
              제조사와 소비자들을 바로 연결
            </Textline>
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
      </S.AdvertisementSection>
    </S.Section>
  );
}
