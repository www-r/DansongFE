import styled from '@emotion/styled';

type Props = {
  borderStyle: string;
  width: string;
  color: string;
};

export const DivisionLine = styled.div<Props>`
  color: ${({ color }) => color};
  border: 1px ${({ borderStyle }) => borderStyle} ${({ theme }) => theme.colors.border};
  width: ${({ width }) => width};
  margin: 0 auto;
`;
