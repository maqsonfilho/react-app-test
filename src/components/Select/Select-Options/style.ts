import styled from "styled-components";

export const SelectOptionsStyle = styled.div`
  cursor: pointer;
  padding: ${({ theme }) => theme.space[2]} ;
  font-size: ${({theme}) => theme.fontSizes[1]};
  
  &:hover{
    background-color: ${({theme}) => theme.color.hover};
  }
`;