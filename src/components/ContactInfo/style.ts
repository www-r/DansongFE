import styled from '@emotion/styled';

export const Wrapper = styled.section`
  width: 70%;
  margin: 0 auto;
  padding: 4rem;
  font-size: 1.6rem;
  @media screen and (max-width: ${({ theme }) => theme.viewport.desktop}) {
    width: 100%;
  }
`;

export const TextContainer = styled.div`
  width: fit-content;
  margin-bottom: 2rem;
`;

interface TableRowProps {
  isMobile: boolean;
}
export const TableRow = styled.tr<TableRowProps>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ isMobile }) => (isMobile ? 'column' : 'row')};
`;
export const TableHeader = styled.th`
  text-align: left;
`;
export const Label = styled.label`
  display: inline-block;
  font-weight: bold;
  width: 5rem;
  text-align: left;
`;
export const Info = styled.div`
  display: flex;
`;
