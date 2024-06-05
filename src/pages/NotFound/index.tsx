import { FC } from 'react';
import { ContainerNotFound, HeadLine, LinkText } from './style';

export const NotFound: FC = () => {
  return (
    <ContainerNotFound>
      <HeadLine>
        Página não encontrada. <br />
        Para voltar a tela inicial,
      </HeadLine>

      <LinkText to={'/desmembramento'}>clique aqui.</LinkText>
    </ContainerNotFound>
  );
};
