import styled from '@emotion/styled';

export const Section = styled.section`
  background-color: ${({ theme }) => theme.backgroundColor.white};
`;
export const ImageContainer = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
`;
export const LogosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4rem;
  align-items: center;
  padding: 2rem 6rem;
  background-color: #fff;
`;
export const SwiperSection = styled.div``;
export const SwiperContainer = styled.div`
  padding: 5rem 0%;
`;
export const SwiperSlide = styled.div`
  border-radius: 1rem;
  padding: 1rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
`;
export const NameTag = styled.p``;
export const TextContainer = styled.div`
  padding: 5rem 10vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  @media (max-width: 1400px) {
    height: fit-content;
    padding: 3rem 3.75rem;
  }
`;
export const TextImage = styled.img`
  width: 6rem;
  position: absolute;
  left: 0;
  top: 0;
  @media (min-width: 1400px) {
    left: 8vw;
    top: 2rem;
  }
  @media (max-width: ${({ theme }) => theme.viewport.mobile}) {
    display: none;
  }
`;

export const CoBrandsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 10vw;
  width: 100%;
  background-color: #fff;
  border-top: 0.1rem solid ${({ theme }) => theme.colors.border};
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.border};
  @media (max-width: 1400px) {
    height: fit-content;
  }
`;
export const BrandsContainerTitle = styled.h3`
  margin: 0 0 2rem;
  font-size: 4vw;
  font-weight: 700;

  @media (min-width: ${({ theme }) => theme.viewport.desktop}) {
    font-size: 2.5rem;
  }
`;

export const DeliciousSection = styled.div`
  margin-top: 10vh;
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
  margin-top: 15vh;
`;

export const AdvertisementSection = styled.div`
  margin-top: 20vh;
  padding-bottom: 2rem;
`;

export const PicsContainer = styled.ul`
  margin: auto;
  width: 100%;
  padding: 10vw 0;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  @media (min-width: ${props => props.theme.viewport.desktop}) {
    flex-direction: row;
  }
`;
export const CommerceItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  @media (max-width: ${props => props.theme.viewport.desktop}) {
    padding: 0 3.6rem;
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
    padding: 0.5rem 1rem;
    border-radius: 2.2rem;
    font-size: 1rem;
  }
`;
