import { styled } from 'styled-components';

export const ContainerDismemberment = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[5]};
  padding: ${({ theme }) => theme.space[4]};
`;

export const ContentTables = styled.div``;

export const ButtonTrashSharp = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border: none;
  box-shadow: ${({ theme }) => theme.shadows[1]};
  border-radius: ${({ theme }) => theme.radius[1]};
  color: ${({ theme }) => theme.color.gray100};
  background-color: ${({ theme }) => theme.color.red400};

  &:hover {
    background-color: ${({ theme }) => theme.color.red300};
  }
`;

export const ButtonAddCircleSharp = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border: none;
  box-shadow: ${({ theme }) => theme.shadows[1]};
  border-radius: ${({ theme }) => theme.radius[1]};
  color: ${({ theme }) => theme.color.gray100};
  background-color: ${({ theme }) => theme.color.blue200};

  &:hover {
    background-color: ${({ theme }) => theme.color.blue100};
  }
`;

export const ContentButton = styled.div`
  width: 200px;
`;
