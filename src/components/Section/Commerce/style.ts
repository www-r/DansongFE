import styled from '@emotion/styled';

export const Section = styled.section`
  background-color: ${({ theme }) => theme.backgroundColor.white};
`;
export const LogoSection = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LogoContainer = styled.div`
  margin: 10rem 0 0;
  height: min-content;
  &.sticky {
    position: sticky;
    top: 25rem;
  }
  &.absolute {
    position: absolute;
    bottom: 0;
  }
`;

export const ProductsSection = styled.div`
  height: 200vh;
  padding: 10rem 0 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CarouselContainer = styled.div`
  position: absolute;
  bottom: 5rem;
  overflow: hidden;
`;
export const BrandsSection = styled.div`
  display: flex;
`;
export const BrandsSectionTitle = styled.h3`
  margin: 6.15rem;
  font-size: 2.5rem;
  font-weight: 700;
`;
export const BrandLogosContainer = styled.div`
  padding: 1rem 6rem;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 15rem;
`;
export const CommerceAdvertisementSection = styled.div``;
export const TextContainer = styled.div`
  margin: 10rem 0;
`;
export const PicsContainer = styled.ul`
  margin: auto;
  width: min-content;
  display: flex;
`;
export const CommercePic = styled.li`
  img {
    width: 60rem;
    object-fit: contain;
  }
`;
