import styled from "styled-components";

export const ErrorContainer = styled.div`
  color: ${({ theme }) => theme.color.error100}; 
  font-size: ${({theme}) => theme.fontSizes[1]}; 
  margin-top: ${({theme}) => theme.space[1]}; 
`;