import styled from 'styled-components';

export const StyledTableHeader = styled.thead`
  display: flex;
  align-items: center;
  height: 50px;
  background-color: ${({ theme }) => theme.color.secondary};
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.fontSizes[1]};
`;
