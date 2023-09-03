import styled from '@emotion/styled';

export const Back = styled.div`
  border: 1px solid #fff;
  background-color: #fff;
  border-radius: 1.8rem;
  width: 100%;
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  transform: rotateY(180deg);
  padding: 1rem;
`;
