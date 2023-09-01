import styled from '@emotion/styled';

type Props = {
  color: string;
  borderStyle: string;
};

export const DivisionLine = styled.div<Props>`
  border: 1px ${({ borderStyle }) => borderStyle} ${({ color }) => color};
  width: 100%;
`;
