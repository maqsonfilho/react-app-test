import { FC, Fragment } from 'react';
import { Button } from '~/components/Button';
import { Input } from '~/components/Input';
import { SelectAdministratorOrCustomer } from '~/components/Select';
import { ContainerContentTitleUserRegistration, ContentTitleUserRegistration, TitleUserRegistration } from './style';

export const UserRegistration: FC = () => {
  return (
    <Fragment>
      <ContainerContentTitleUserRegistration>
        <TitleUserRegistration> Cadastro de Usuários</TitleUserRegistration>

        <ContentTitleUserRegistration>
          <Input label="CNPJ/CPF :" />
          <Input label="Nome :" />
          <Input label="E-mail :" />
          <Input label="Telefone :" />
          <SelectAdministratorOrCustomer />
          <Input label="CNPJ Pertencentes" />

          <Button label="Cadastrar Usuário" />
        </ContentTitleUserRegistration>
      </ContainerContentTitleUserRegistration>
    </Fragment>
  );
};
