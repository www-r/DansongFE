import styled from '@emotion/styled';

export const Section = styled.section`
  background-color: ${({ theme }) => theme.backgroundColor.white};
`;
export const LogoSection = styled.div`
  padding: 50vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LogoContainer = styled.div`
  margin: 10rem 0 0;
  height: fit-content;
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
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ScrollProductItem = styled.div`
  position: sticky;
  top: 6rem;
`;
export const CarouselContainer = styled.div`
  position: absolute;
  overflow: hidden;
`;
export const CoBrandsContainer = styled.div`
  position: absolute;
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
  @media (min-width: ${props => props.theme.viewport.desktop}) {
    margin: 6.15rem 0;
  }
`;
export const BrandLogosContainer = styled.div`
  display: flex;
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
