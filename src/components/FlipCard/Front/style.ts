import styled from '@emotion/styled';

export const Front = styled.div`
  border: 6px solid #ffd489;
  background-color: #fff;
  border-radius: 1.8rem;
  width: 35rem;
  height: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  @media (max-width: ${props => props.theme.viewport.tablet}) {
    width: 27rem;
  }
`;
