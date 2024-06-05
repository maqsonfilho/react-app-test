import styled from 'styled-components';

export const StyledTableContainer = styled.div`
  max-width: 100%;
  overflow: auto;
  background-color: ${({ theme }) => theme.color.gray100};
  border-radius: ${({ theme }) => theme.radius[1]};
  box-shadow: ${({ theme }) => theme.shadows[3]};
`;

export const TitleTable = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.gray500};
  padding: ${({ theme }) => theme.space[3]};
  font-size: ${({ theme }) => theme.fontSizes[3]};
  font-weight: ${({ theme }) => theme.weight[6]};

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;
