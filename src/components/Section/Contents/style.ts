import styled from '@emotion/styled';

export const Section = styled.section`
  background-color: ${({ theme }) => theme.backgroundColor.black};
`;

export const TextSection = styled.div`
  padding: 50vh 0 0;
`;
export const YoutubeSection = styled.div`
  padding: 50vh 0 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CoBrandsIntro = styled.div``;
export const CoBrandCategoryListWrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10rem;
`;
export const CoBrandCategoryList = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5em;
  @media (min-width: ${props => props.theme.viewport.desktop}) {
    flex-direction: row;
  }
`;
export const CategoryListItemTitle = styled.h5``;
export const CoBrandLogosContainer = styled.div`
  border-radius: 1rem;
  background-color: #fff;
  padding: 1rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  @media (min-width: ${props => props.theme.viewport.desktop}) {
    padding: 5vw;
  }
`;
export const AdvertiseSection = styled.div`
  height: 200vh;
  padding: 25vh 0 0;
  position: relative;
  @media (min-width: ${props => props.theme.viewport.desktop}) {
    height: 350vh;
  }
`;
export const AdvertiseVideoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  position: sticky;
  top: 0;
  margin-bottom: 17vw;
`;
export const AdvertiseVideo = styled.video`
  width: ${props => props.width};
  margin: 0;
  max-width: 192rem;
  max-height: 108rem;
  /* @media (min-width: ${props => props.theme.viewport.desktop}) {
    max-width: 192rem;
    max-height: 108rem;
  } */
`;
export const AdvertisePicsContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 15vw;
  background-color: red;
  display: none;
  @media (min-width: ${props => props.theme.viewport.desktop}) {
    height: 20rem;
  }
`;
