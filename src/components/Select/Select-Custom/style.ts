import styled from "styled-components";

export const ContainerSelect = styled.div`
  position: relative;
  max-width: 100%;
  display: flex;
  margin-bottom: ${({theme}) => theme.space[1]};
  border-radius: ${({theme}) => theme.radius[1]};
`;

export const ContentSelect = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.space[2]};
  background-color: ${({ theme }) => theme.color.gray100};
`;

export const SpanSelect = styled.span`
  color: ${({ theme }) => theme.color.gray200};
  font-size: ${({theme}) => theme.fontSizes[1]};
`;

export const Icon = styled.div`
  cursor: pointer;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.color.gray300};
`;

export const DropdownSelector = styled.div`
  position: absolute;
  top: 100%;
  width: 100%;
  z-index: 1;
  border-radius: ${({theme}) => theme.radius[1]};
  border: 1px solid ${({theme}) => theme.color.gray100};
  background-color: ${({theme}) => theme.color.primary};
`;
