import styled from "styled-components";

export const LabelSelectContainer = styled.div`
  font-size: ${({ theme }) => theme.fontSizes[2]}; 
  font-weight: ${({ theme }) => theme.weight[5]};
  color: ${({ theme }) => theme.color.gray500};
  line-height: ${({ theme }) => theme.space[8]};
`;
