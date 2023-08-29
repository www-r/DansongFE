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

export const CoBrandCategoryListWrapper = styled.ul`
  display: flex;
  gap: 8rem;
  margin: 10rem; //바뀔수도있음
`;
export const CoBrandCategoryList = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(100% / 3);
  color: ${({ theme }) => theme.textColor.grey};
  font-size: 1.7rem;
`;
export const CoBrandCategoryBrands = styled.p`
  margin: 1.2rem 0 0;

  min-height: 7.6rem;
  display: inline-block;
`;
export const AdvertiseSection = styled.div`
  padding-bottom: 10rem;
`;
export const AdvertiseVideoContainer = styled.div`
  height: 160vh;
`;
export const AdvertiseVideo = styled.video`
  width: 100vw;
  height: 100vh;
  position: sticky;
  top: 0;
  transition: 'width' 1s linear;
  &.scaled {
    transform: scale(0.6);
  }
`;
export const AdvertisePicsContainer = styled.div`
  height: 20rem;
`;
