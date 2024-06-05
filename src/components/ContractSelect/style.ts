import styled from 'styled-components';

export const ContainerContract = styled.div`
  width: 100%;
`;

export const StyleSelect = styled.select`
  border: transparent;
  border-radius: ${({ theme }) => theme.radius[1]};
  background-color: ${({ theme }) => theme.color.gray100};
  color: ${({ theme }) => theme.color.gray200};
  font-family: 'Montserrat', Arial, sans-serif;
  font-size: ${({ theme }) => theme.fontSizes[1]};
  font-weight: ${({ theme }) => theme.weight[5]};
`;
