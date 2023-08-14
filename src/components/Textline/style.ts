import styled from '@emotion/styled';

export const Textline = styled.span`
  text-align: ${({ textAlign }) => textAlign};
  font-size: ${({ fontSize }) => fontSize + 'rem'};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color};
`;
