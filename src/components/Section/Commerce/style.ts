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
export const BrandsSection = styled.div``;
export const BrandLogosContainer = styled.div`
  padding: 1rem 0;
  display: flex;
  gap: 15rem;
  margin-bottom: 15rem;
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
