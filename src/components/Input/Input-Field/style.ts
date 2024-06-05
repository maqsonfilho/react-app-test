import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.space[2]};
  font-size: ${({ theme }) => theme.fontSizes[1]};
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.radius[1]};
  transition: border-color 0.3s ease;

  background-color: ${({ theme }) => theme.color.gray100};
  color: ${({ theme }) => theme.color.gray200};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.secondary};
  }

  &.error {
    border-color: ${({ theme }) => theme.color.error100};
  }
`;
