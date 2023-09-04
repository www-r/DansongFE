import styled from '@emotion/styled';

export const Section = styled.section`
  background-color: ${({ theme }) => theme.backgroundColor.black};
`;

export const TextSection = styled.div`
  padding: 10rem 0 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const YoutubeSection = styled.div``;
export const CoBrandsIntro = styled.div`
  height: 100vh;
`;
export const CoBrandLogosContainer = styled.div`
  border-radius: 1rem;
  background-color: #fff;
  width: 70rem;
  display: flex;
  flex-wrap: wrap;
`;
export const CoBrandCategoryListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10rem;
  padding: 10rem;
`;
export const CoBrandCategoryList = styled.li`
  display: flex;
  gap: 10rem;
`;
export const CoBrandCategoryListTitle = styled.div`
  width: 9rem;
`;
export const AdvertiseSection = styled.div`
  padding: 40rem 0 10rem;
`;
export const AdvertiseVideoContainer = styled.div`
  height: 160vh;
`;
export const AdvertiseVideo = styled.video`
  height: 50rem;
  position: sticky;
  top: 15rem;
  margin: 3rem 0 1rem;
`;
export const AdvertisePicsContainer = styled.div`
  display: flex;
  overflow: hidden;
`;
