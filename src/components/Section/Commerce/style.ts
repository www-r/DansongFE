import styled from '@emotion/styled';

export const Section = styled.section`
  background-color: ${({ theme }) => theme.backgroundColor.white};
  /* position: relative; */
`;
export const ImageContainer = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
`;
export const SwiperContainer = styled.div`
  padding: 10rem 0;
  /* position: absolute;
  top: 250px; */
  position: relative;
`;
export const SwiperSlide = styled.div`
  background-color: ${props => props.backgroundColor};
  border-radius: 1rem;
  padding: 1rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProductsSection = styled.div`
  display: flex;
  flex-direction: column;
`;
export const OverlayScreen = styled.div`
  position: absolute;
  top: 0;
  padding: 10rem 0;
  background-color: rgba(255, 255, 255, 0.7);
  height: 100%;
  width: 100%;
  z-index: ${({ zIndex }) => zIndex};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TextContainer = styled.div`
  font-size: ${({ textSize }) => textSize};
  @media (max-width: ${props => props.theme.viewport.tablet}) {
    padding: 0 3.6rem;
  }
`;
export const CoBrandsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2vw 10vw;
  width: 100%;
  border-top: 0.1rem solid ${({ theme }) => theme.colors.border};
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.border};
`;
export const BrandsContainerTitle = styled.h3`
  margin: 3rem 0;
  font-size: 4vw;
  font-weight: 700;
  margin-right: 1rem;
  @media (min-width: ${({ theme }) => theme.viewport.desktop}) {
    margin: 6.15rem 0;
    font-size: 2.5rem;
  }
`;
export const BrandLogosContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (min-width: ${props => props.theme.viewport.desktop}) {
    padding: 1rem 6rem;
  }
`;
export const DeliciousSection = styled.div`
  margin-top: 20vh;
`;

export const FlipCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5rem;

  @media (max-width: ${props => props.theme.viewport.tablet}) {
    flex-direction: column;
    padding: 0 3.6rem;
  }
`;

export const CardGrid = styled.div`
  text-align: center;
  display: grid;
  grid-template-rows: 6rem 8rem 20rem 6.2rem;
  padding: 3rem;
  justify-items: center;
`;

export const SafeSection = styled.div`
  margin-top: 20vh;
`;
export const SafeLogosContainer = styled.div`
  background-color: #fff;
  padding: 5rem;
`;
export const AdvertisementSection = styled.div`
  margin-top: 20vh;
  padding-bottom: 2rem;
`;

export const PicsContainer = styled.ul`
  margin: auto;
  width: 100%;
  flex-direction: column;
`;
export const CommercePic = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
  }
`;
export const BtnsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
export const CommerceBtn = styled.button`
  margin: 0 1rem 0 0;
  padding: 1rem 3rem;
  border-radius: 8rem;
  font-size: 1.7rem;
  border: 0.2rem solid ${({ theme }) => theme.backgroundColor.black};
  background-color: transparent;
  color: ${({ theme }) => theme.textColor.black};
  &:hover {
    border: 0.2rem solid ${({ theme }) => theme.backgroundColor.black};
    background-color: ${({ theme }) => theme.backgroundColor.black};
    color: ${({ theme }) => theme.colors.white};
  }
  @media (max-width: ${({ theme }) => theme.viewport.mobile}) {
    padding: 1rem;
    border-radius: 2.2rem;
    font-size: 1rem;
  }
`;
