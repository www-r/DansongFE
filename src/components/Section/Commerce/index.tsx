import { motion, useScroll } from "framer-motion"
import * as S from './style';
import { CenterContainer } from '../../../styles/global';
import Textline from '../../Textline';
import Logo from '../../Logo';
export default function Commerce() {
  const { scrollYProgress } = useScroll()
  return (
    <S.Section>
      <div id="scroll-scene-6">
        <S.LogoSection id='COMMERCE'>
          <S.LogoContainer>
            <Logo logo="itreamingB" size="large" src="/logos/itreaming1.png" />
          </S.LogoContainer>
        </S.LogoSection>
      </div>

      <div id="scroll-scene-7">
        <S.ProductsSection>
          <S.ScrollProductItem>
            <img src="images/butter.png" alt="popcorn butter image" />
          </S.ScrollProductItem>
          <S.CarouselContainer>
            <img src="images/caramel.png" alt="popcorn caramel image" height={450} />
            <img src="images/onion.png" alt="popcorn onion image" height={450} />
            <img src="/images/bbq.png" alt="popcorn bbq image" height={450} />
            {/* <img
                src="https://dansong-s3.s3.ap-northeast-2.amazonaws.com/images/bbq.png"
                alt=""
                height={500}
              /> */}
          </S.CarouselContainer>
          <S.CoBrandsContainer>
            <CenterContainer direction="column">
              <S.BrandsContainerTitle>COWORKERS</S.BrandsContainerTitle>
              <S.BrandLogosContainer>
                <CenterContainer>
                  <Logo logo="생활맥주" size="medium" src="/logos/beer.png" />
                  <Logo logo="코드야드바이메리어트" size="medium" src="/logos/marriot.png" />
                </CenterContainer>
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
