import styled from 'styled-components';

export const StyledTableRow = styled.tr`
  display: table;
  width: 100%;
  table-layout: fixed;
  height: 35px;

  border-bottom: 1px solid ${({ theme }) => theme.color.gray300};

  &:last-child {
    border-bottom: none;
  }
`;
