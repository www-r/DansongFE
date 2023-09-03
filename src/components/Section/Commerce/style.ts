import styled from '@emotion/styled';

export const Section = styled.section`
  background-color: ${({ theme }) => theme.backgroundColor.white};
`;
export const LogoSection = styled.div`
  height: 150vh;
`;
export const LogoContainer = styled.div`
  margin: 10rem 0 0;
  height: min-content;
  position: sticky;
  top: 25rem;
`;
export const ProductsSection = styled.div`
  height: 200vh;
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
  gap: 15rem;
`;
export const CommerceAdvertisementSection = styled.div``;
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
