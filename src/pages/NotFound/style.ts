import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const ContainerNotFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  letter-spacing: 1px;
`;

export const HeadLine = styled.label`
  font-size: ${({ theme }) => theme.fontSizes[7]};
  font-weight: ${({ theme }) => theme.weight[7]};
  line-height: 70px;
`;

export const LinkText = styled(Link)`
  color: ${({ theme }) => theme.color.green200};
  font-size: ${({ theme }) => theme.fontSizes[7]};
  font-weight: ${({ theme }) => theme.weight[7]};
  text-decoration: none;
`;
