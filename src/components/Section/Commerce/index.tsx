import * as S from './style';
import { CenterContainer } from '../../../styles/global';
import Textline from '../../Textline';
import { theme } from '../../../styles/theme';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import Logo from '../../Logo';
import FlipCard from '../../FlipCard';
import FlipCardBack from '../../FlipCard/Back';
import FlipCardFront from '../../FlipCard/Front';
import Button from '../../Button';


export default function Commerce() {
  
  return (
    <S.Section>
      <S.SwiperContainer>
        <Swiper
          slidesPerView={4}
          spaceBetween={0}
          // grabCursor={true}
          // modules={[Autoplay, Navigation]}
          // autoplay
          // loop={true}
          // navigation={true}
        >
          <SwiperSlide>
            <S.SwiperSlide>
              <img
                src="/images/butter.png"
                alt="popcorn butter image"
                style={{ width: '80%', margin: 'auto' }}
              />
              <S.NameTag>
                <Textline fontSize={2}># 바삭버터맛</Textline>
              </S.NameTag>
            </S.SwiperSlide>
          </SwiperSlide>
          <SwiperSlide>
            <S.SwiperSlide>
              <img
                src="images/caramel.png"
                alt="popcorn caramel image"
                style={{ width: '80%', margin: 'auto' }}
              />
              <S.NameTag>
                <Textline fontSize={2}># 바삭카라멜맛</Textline>
              </S.NameTag>
            </S.SwiperSlide>
          </SwiperSlide>
          <SwiperSlide>
            <S.SwiperSlide>
              <img
                src="images/onion.png"
                alt="popcorn onion image"
                style={{ width: '80%', margin: 'auto' }}
              />
              <S.NameTag>
                <Textline fontSize={2}># 바삭어니언맛</Textline>
              </S.NameTag>
            </S.SwiperSlide>
          </SwiperSlide>
          <SwiperSlide>
            <S.SwiperSlide>
              <img
                src="/images/bbq.png"
                alt="popcorn bbq image"
                style={{ width: '80%', margin: 'auto' }}
              />
              <S.NameTag>
                <Textline fontSize={2}># 바삭바베큐맛</Textline>
              </S.NameTag>
            </S.SwiperSlide>
          </SwiperSlide>
        </Swiper>
      </S.SwiperContainer>

      <S.SwiperNamesContainer></S.SwiperNamesContainer>

      <S.TextContainer>
        <CenterContainer direction="column">
          <Textline fontSize={3}>'팝꽃'은 개봉하자마자 내용물이 알알이 꽃처럼</Textline>
          <Textline fontSize={3} marginBottom="2rem">
            예쁘게 피어난 것과 같아 붙여진 이름입니다.
          </Textline>
        </CenterContainer>
      </S.TextContainer>

      <S.CoBrandsContainer>
        <CenterContainer direction="column">
          <S.BrandsContainerTitle>COWORKERS</S.BrandsContainerTitle>
          <S.LogosContainer>
            <Logo logo="생활맥주 logo" src="/logos/beer.png" size="brandLogo"></Logo>

            <Logo logo="감성커피 logo" src="/logos/coffee.png" size="brandLogo"></Logo>

            <Logo logo="cu logo" src="/logos/cu.png" size="brandLogo"></Logo>

            <Logo logo="thebornkorea logo" src="/logos/theborn.jpeg" size="brandLogo"></Logo>

            <Logo logo="marriot logo" src="/logos/marriot.png" size="brandLogo"></Logo>
          </S.LogosContainer>
        </CenterContainer>
      </S.CoBrandsContainer>
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
                      color={theme.textColor.black}
                      textAlign="center"
                    >
                      버터풍미
                    </Textline>

                    <p>
                      <Textline fontSize={2.1} color={theme.textColor.black} textAlign="center">
                        입안 가득 퍼지는
                      </Textline>
                      <Textline
                        fontSize={2.1}
                        color={theme.textColor.black}
                        textAlign="center"
                        marginBottom="1.6rem"
                      >
                        고소한 버터의 풍미!
                      </Textline>
                    </p>
                    <img src="/images/srcButter.png" alt="" style={{ width: '100%' }} />
                    <p>
                      <Textline fontSize={2.1} color={theme.textColor.grey} textAlign="center">
                        씹는 순간 입안 가득 퍼지는
                      </Textline>
                      <Textline
                        fontSize={2.1}
                        color={theme.textColor.grey}
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
                      color={theme.textColor.black}
                      textAlign="center"
                    >
                      바삭바삭
                    </Textline>

                    <p>
                      <Textline fontSize={2.1} color={theme.textColor.black} textAlign="center">
                        두 번 구워
                      </Textline>
                      <Textline
                        fontSize={2.1}
                        color={theme.textColor.black}
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
                      <Textline fontSize={2.1} color={theme.textColor.grey} textAlign="center">
                        고온과 저온에 한 번씩
                      </Textline>
                      <Textline fontSize={2.1} color={theme.textColor.grey} textAlign="center">
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
                      color={theme.textColor.black}
                      textAlign="center"
                    >
                      단짠단짠
                    </Textline>
                    <p>
                      <Textline fontSize={2.1} color={theme.textColor.black} textAlign="center">
                        손이 계속 가는
                      </Textline>
                      <Textline
                        fontSize={2.1}
                        color={theme.textColor.black}
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
                      <Textline fontSize={2.1} color={theme.textColor.grey} textAlign="center">
                        안 먹어본 사람은 있어도
                      </Textline>
                      <Textline
                        fontSize={2.1}
                        color={theme.textColor.grey}
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
        <S.LogosContainer>
          <Logo logo="nongmo logo" src="/logos/nongmo.png" size="brandLogo"></Logo>
          <Logo logo="haccp logo" src="/logos/haccp.png" size="brandLogo"></Logo>
          <Logo logo="iso logo" src="/logos/iso.png" size="brandLogo"></Logo>
          <Logo logo="iso22000 logo" src="/logos/iso22000.png" size="brandLogo"></Logo>
        </S.LogosContainer>
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
            <Textline fontSize={2.4} textAlign="center">
              유통 중간마진을 최소화 하여
            </Textline>
            <Textline fontSize={2.4} textAlign="center" marginBottom="2rem">
              제조사와 소비자들을 바로 연결
            </Textline>
          </S.TextContainer>

          <S.PicsContainer>
            <S.CommerceItem>
              <img
                src="/images/smartstore.png"
                alt="smartstore"
                style={true ? { width: '90%' } : { width: '40vw' }}
              />
              <S.BtnsContainer>
                <a href="https://smartstore.naver.com/eatreaming" target="blank">
                  <Button>
                    <Textline fontSize={3} isFontBold textAlign="center">
                      스마트스토어 바로가기
                    </Textline>
                  </Button>
                </a>
              </S.BtnsContainer>
            </S.CommerceItem>
            <S.CommerceItem>
              <img
                src="/images/sns.png"
                alt="sns"
                style={true ? { width: '100%' } : { width: '40vw' }}
              />
              <S.BtnsContainer>
                <a href="https://youtube.com/@user-pf6hz4yw2g?si=QStqYwy1bB5c12N6" target="blank">
                  <Button>
                    <Textline fontSize={3} isFontBold textAlign="center">
                      유튜브 바로가기
                    </Textline>
                  </Button>
                </a>
                <a href="https://www.instagram.com/eatreaming/" target="blank">
                  <Button>
                    <Textline fontSize={3} isFontBold textAlign="center">
                      인스타그램 바로가기
                    </Textline>
                  </Button>
                </a>
              </S.BtnsContainer>
            </S.CommerceItem>
          </S.PicsContainer>
        </CenterContainer>
      </S.AdvertisementSection>
    </S.Section>
  );
}
