import styled from '@emotion/styled';
import { CenterContainer } from '../../styles/global';

export const Wrapper = styled.section`
  width: 70%;
  padding: 10rem 0;
  margin: 0 auto;
`;

export const Container = styled(CenterContainer)`
  margin-bottom: 6rem;
  position: relative;
  justify-content: space-between;
`;

export const Text = styled.div`
  text-align: center;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.grey2};
`;
