import { styled } from 'styled-components';

export const ButtonContainer = styled.button`
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes[1]};
  border-radius: ${({ theme }) => theme.radius[1]};
  padding: ${({ theme }) => theme.space[4]};
  font-weight: ${({ theme }) => theme.weight[7]};
  color: ${({ theme }) => theme.color.primary};
  background: ${({ theme }) => theme.color.secondary};

  &:hover {
    background: ${({ theme }) => theme.color.green300};
  }

  &:disabled {
    cursor: not-allowed;
    background: ${({ theme }) => theme.color.gray200};
    border-color: ${({ theme }) => theme.color.gray200};
    color: ${({ theme }) => theme.color.gray500};
  }

  ${({ color, theme }) =>
    color === 'secondary' &&
    `
    border: none;
    background: ${theme.color.red400};
    color: ${theme.color.gray100};

    &:hover {
      background: ${theme.color.red300};
    }
  `}

  ${({ color, theme }) =>
    color === 'ternary' &&
    `
    border: none;
    background: ${theme.color.blue200};
    color: ${theme.color.gray100};

    &:hover {
      background: ${theme.color.blue100};
    }
  `}
`;
