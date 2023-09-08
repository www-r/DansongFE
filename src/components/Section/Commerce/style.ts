import styled from '@emotion/styled';

export const Section = styled.section`
  background-color: ${({ theme }) => theme.backgroundColor.white};
`;
export const LogoSection = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 100vh;
`;
export const LogoContainer = styled.div`
  margin: 10rem 0 0;
  height: fit-content;
  &.sticky {
    position: sticky;
    top: 25rem;
  }
`;

export const ProductsSection = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ScrollProductContainer = styled.div`
  padding: 10rem 0;
  height: 150vh;
  display: flex;
  justify-content: center;
`;
export const ScrollProductItem = styled.div`
  position: sticky;
  top: 9rem;
  height: 80vh;
  opacity: ${({ opacity }) => opacity};
`;
export const SwiperContainer = styled.div`
  width: 100vw;
  padding: 0 5rem;
  display: flex;
  justify-content: center;
`;
export const CoBrandsContainer = styled.div`
  bottom: 10vh;
  padding: 2vw;
  width: 100%;
  border-top: 0.2rem solid ${({ theme }) => theme.colors.border};
  border-bottom: 0.2rem solid ${({ theme }) => theme.colors.border};
`;

export const BrandsContainerTitle = styled.h3`
  margin: 3rem 0;
  font-size: 2.5rem;
  font-weight: 700;
  @media (min-width: ${({ theme }) => theme.viewport.desktop}) {
    margin: 6.15rem 0;
  }
`;
export const BrandLogosContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: ${props => props.theme.viewport.desktop}) {
    padding: 1rem 6rem;
  }
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
