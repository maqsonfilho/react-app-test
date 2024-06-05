import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  height: 60px;
  box-shadow: ${({ theme }) => theme.shadows[2]};
  background-color: ${({ theme }) => theme.color.green300};
`;

export const Logo = styled.img``;

export const ContainerIcon = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.color.primary};
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;
