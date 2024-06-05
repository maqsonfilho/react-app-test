import styled from "styled-components";

export const ContainerContentTitleUserRegistration = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const TitleUserRegistration = styled.div`
  padding: ${({ theme }) => theme.space[6]};
  font-size: ${({ theme }) => theme.fontSizes[5]};
  font-weight: ${({ theme }) => theme.weight[4]};
`;

export const ContentTitleUserRegistration = styled.div`
  width: 556px;

  @media (max-width: 768px) {
    width: 70%;
    padding: 0 16px;
  }
`;
