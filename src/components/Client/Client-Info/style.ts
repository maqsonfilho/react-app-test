import styled from 'styled-components';

export const ContainerClientInfo = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 70px 1fr;
  gap: ${({ theme }) => theme.space[3]};
  height: ${({ theme }) => theme.space[5]};
  color: ${({ theme }) => theme.color.gray500};
`;

export const StyledLabelClientInfo = styled.div`
  font-size: ${({ theme }) => theme.fontSizes[1]};
  font-weight: ${({ theme }) => theme.weight[6]};
`;

export const StyledTextClientInfo = styled.div`
  font-weight: ${({ theme }) => theme.weight[5]};
  font-size: ${({ theme }) => theme.fontSizes[1]};
  text-align: left;
`;
