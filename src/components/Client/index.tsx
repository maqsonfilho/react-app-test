import { FC } from 'react';
import { ClientInformationProps } from '~/@types/components/Client/client-information-props';
import { ClientInfoProps } from '~/@types/components/Client/client-item-props';
import { Card, Container } from './style';
import { ClientInfo } from './Client-Info/client-info';
import { mockClientData } from './mock-client-data';

export const Client: FC<ClientInformationProps> & {
  Item: FC<ClientInfoProps>;
} = ({}) => {
  // Using mocked data instead of fetching an API
  const clientData = mockClientData;

  const { name, cpf, ie, if: ifField, municipio } = clientData;

  return (
    <Container>
      <Card>
        <Client.Item label="Cliente">{name}</Client.Item>
        <Client.Item label="CPF/CNPJ">{cpf}</Client.Item>
        <Client.Item label="IE">{ie}</Client.Item>
        <Client.Item label="UF">{ifField}</Client.Item>
        <Client.Item label="Município">{municipio}</Client.Item>
      </Card>
    </Container>
  );
};

Client.Item = ClientInfo;
