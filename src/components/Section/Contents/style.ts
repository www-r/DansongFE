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
  padding: 0.5rem 0.1rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  a {
    display: flex;
    align-items: center;
  }
`;
export const AdvertiseSection = styled.div`
  padding: 25vh 0 0;
  position: relative;
`;
export const AdvertiseVideo = styled.video`
  margin-bottom: 10rem;
  background-color: red;
  display: block;
`;
export const AdvertisePicsContainer = styled.div`
  padding: 3rem 0 5rem;
  /* background-color: ${({ theme }) => theme.backgroundColor.white}; */
  /* @media (max-width: ${props => props.theme.viewport.desktop}) {
    height: 20rem;
  } */
`;
