import styled from '@emotion/styled';

type Props = {
  borderStyle: string;
};

export const DivisionLine = styled.div<Props>`
  border: 1px ${({ borderStyle }) => borderStyle} ${({ theme }) => theme.backgroundColor.lightGrey};
  width: 100%;
`;
