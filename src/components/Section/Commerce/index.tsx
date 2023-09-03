import * as S from './style';
import { CenterContainer } from '../../../styles/global';
import Textline from '../../Textline';
import Logo from '../../Logo';
import DivisionLine from '../../DivisionLine';
export default function Commerce() {
  return (
    <S.Section>
      <S.LogoSection>
        <S.LogoContainer>
          <CenterContainer>
            <Logo
              logo="itreamingB"
              size="large"
              src="https://dansong-s3.s3.ap-northeast-2.amazonaws.com/logos/itreaming2.png"
            />
          </CenterContainer>
        </S.LogoContainer>
      </S.LogoSection>

      <S.ProductsSection></S.ProductsSection>
      <DivisionLine />

      <S.BrandsSection>
        <S.BrandsSectionTitle>COWORKERS</S.BrandsSectionTitle>
        <S.BrandLogosContainer>
          <Logo
            logo="생활맥주"
            size="medium"
            src="https://dansong-s3.s3.ap-northeast-2.amazonaws.com/logos/beer.png"
          />
          <Logo
            logo="코드야드바이메리어트"
            size="medium"
            src="https://dansong-s3.s3.ap-northeast-2.amazonaws.com/logos/marriot.png"
          />
        </S.BrandLogosContainer>
      </S.BrandsSection>
      <DivisionLine />
      <S.CommerceAdvertisementSection>
        <div>
          <h3>
            <CenterContainer>
              <Textline fontSize={2.4} isFontBold={true}>
                네이버 스마트 스토어부터, 인스타그램, 유튜브, 틱톡까지
              </Textline>
            </CenterContainer>
          </h3>
          <h2>
            <CenterContainer>
              <Textline fontSize={8} isFontBold={true}>
                제품 홍보부터,
              </Textline>
            </CenterContainer>
            <CenterContainer>
              <Textline fontSize={8} isFontBold={true}>
                판매까지
              </Textline>
            </CenterContainer>
          </h2>
        </div>
        <S.PicsContainer>
          <S.CommercePic>
            <img
              src="https://dansong-s3.s3.ap-northeast-2.amazonaws.com/images/commerce1.png"
              alt=""
            />
          </S.CommercePic>
          <S.CommercePic>
            <img
              src="https://dansong-s3.s3.ap-northeast-2.amazonaws.com/images/commerce2.png"
              alt=""
            />
          </S.CommercePic>
        </S.PicsContainer>
      </S.CommerceAdvertisementSection>
    </S.Section>
  );
}
