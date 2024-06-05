import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ContainerLogin = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.color.primary};
  padding: ${({ theme }) => theme.space[7]};

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ContentImg = styled.img`
  width: calc(60vh + 32%);
  height: 92vh;
  border-radius: ${({ theme }) => theme.radius[2]};
  object-fit: cover;
  @media screen and (max-width: 768px) {
    width: 70%;
    height: auto;
    object-fit: contain;
  }
`;

export const ContentLogin = styled.div`
  display: flex;
  width: 350px;
  height: 450px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;

  @media screen and (max-width: 768px) {
    width: 80%;
    margin-top: ${({ theme }) => theme.space[2]};
  }
`;

export const Content = styled.form`
  width: 350px;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const Logo = styled.img`
  max-width: 300px;
  padding: ${({ theme }) => theme.space[4]};

  @media screen and (max-width: 768px) {
    max-width: 200px;
  }
`;

export const CustomLink = styled(Link)`
  display: flex;
  justify-content: flex-end;
  text-decoration: none;
  padding-bottom: ${({ theme }) => theme.space[5]};
  color: ${({ theme }) => theme.color.gray200};
`;
