import styled from '@emotion/styled';

export const Section = styled.section`
  background-color: ${({ theme }) => theme.backgroundColor.white};
`;
export const LogoSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const LogoContainer = styled.div`
  margin: 10rem auto;
  /* display: flex;
  align-items: center; */
`;

export const ProductsSection = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto 10rem;
`;
export const ScrollProductContainer = styled.div`
  padding: 10rem 0;
  height: 150vh;
  display: flex;
  justify-content: center;
`;

export const SwiperContainer = styled.div`
  width: 100%;
  padding: 5rem;
  display: flex;
  justify-content: center;
`;
export const CoBrandsContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 2vw 10vw; */
  width: 100%;
  border-top: 0.1rem solid ${({ theme }) => theme.colors.border};
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.backgroundColor.white};
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
export const CommerceAdvertisementSection = styled.div`
  padding-bottom: 10rem;
`;
export const TextContainer = styled.div`
  margin: 10rem 0;
  padding: 10rem 0;
  /* display: flex;
  flex-direction: column;
  gap: 1rem; */
`;
export const PicsContainer = styled.ul`
  margin: auto;
  width: 100%;
  display: flex;
  @media (max-width: ${({ theme }) => theme.viewport.tablet}) {
    flex-direction: column;
  }
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
  @media (max-width: ${({ theme }) => theme.viewport.tablet}) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-top: 3rem;
  }
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
  }
`;
