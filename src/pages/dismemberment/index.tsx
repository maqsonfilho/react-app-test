import { IonIcon } from '@ionic/react';
import { addCircleSharp, trashSharp } from 'ionicons/icons';
import { Fragment, useState } from 'react';
import { Button } from '~/components/Button';
import { Client } from '~/components/Client';
import { ContractSelect } from '~/components/ContractSelect/contract-select';
import { Header } from '~/components/Header/header';
import { Table } from '~/components/Table';
import { useAuth } from '~/hooks/useAuth';
import { columnsContract, columnsDis, dataContract as initialDataContract, dataDis as initialDataDis } from './mock';
import { ButtonAddCircleSharp, ButtonTrashSharp, ContainerDismemberment, ContentButton, ContentTables } from './style';

export const Dismemberment = () => {
  const [dataContract] = useState(initialDataContract);
  const [dataDis, setDataDis] = useState(initialDataDis);

  const { handleSignOut } = useAuth();
  const token = 'mock-token';
  const handleAddToDis = (item: any) => {
    if (!dataDis.includes(item)) {
      setDataDis((prev) => [...prev, item]);
    }
  };

  const handleRemoveFromDis = (item: any) => {
    setDataDis((prev) => prev.filter((i) => i !== item));
  };

  const handleDesmembrarClick = () => {
    console.log('Desmembramento clicado');
  };

  const sortedDataContract = [...dataContract].sort((a, b) => a.item - b.item);

  const sortedDataDis = [...dataDis].sort((a, b) => a.item - b.item);

  return (
    <Fragment>
      <Header onClick={handleSignOut} />

      <ContainerDismemberment>
        <Client token={token} />

        <ContractSelect onSelect={() => {}} />
        <ContentTables>
          <Table
            title="Dados do contrato"
            data={sortedDataContract}
            columns={columnsContract}
            renderAction={(item: any) => (
              <ButtonAddCircleSharp onClick={() => handleAddToDis(item)}>
                <IonIcon icon={addCircleSharp} size="large" />
              </ButtonAddCircleSharp>
            )}
          />
        </ContentTables>
        <ContentTables>
          <Table
            title="Desmembramento"
            data={sortedDataDis}
            columns={columnsDis}
            noDataMessage="Nenhum desmembramento selecionado"
            renderAction={(item: any) => (
              <ButtonTrashSharp onClick={() => handleRemoveFromDis(item)}>
                <IonIcon icon={trashSharp} size="large" />
              </ButtonTrashSharp>
            )}
          />
        </ContentTables>

        <ContentButton>
          <Button label="Desmembrar" onClick={handleDesmembrarClick} />
        </ContentButton>
      </ContainerDismemberment>
    </Fragment>
  );
};
