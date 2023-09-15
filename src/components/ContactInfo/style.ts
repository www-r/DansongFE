import styled from '@emotion/styled';

export const Wrapper = styled.section`
  width: 70%;
  margin: 0 auto;
  padding: 4rem;
  font-size: 1.6rem;

  @media screen and (max-width: ${({ theme }) => theme.viewport.tablet}) {
    width: 100%;
  }
`;

export const TextContainer = styled.div`
  width: fit-content;
  margin-bottom: 2rem;

  & div {
    display: grid;
    grid-template-columns: 10rem 1fr;
    gap: 1rem;
  }
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const Title = styled.h3`
  font-weight: bold;
  margin-bottom: 2rem;
`;
