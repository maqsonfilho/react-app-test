import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.color.gray100};
  padding: 20px;
  border-radius: ${({ theme }) => theme.radius[1]};
  box-shadow: ${({ theme }) => theme.shadows[1]};
`;
