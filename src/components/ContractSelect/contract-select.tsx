import React, { FC, useState } from 'react';
import { Contract, ContractSelectProps } from '~/@types/components/Contract-Select/contract-select';
import { ContainerContract, StyleSelect } from './style';

export const ContractSelect: FC<ContractSelectProps> = ({ onSelect }) => {
  const [selectedContract, setSelectedContract] = useState<Contract | null>(null);

  const contracts: Contract[] = [
    { id: 1, descricaoMaterial: ' 40004361', codMaterial: 40004361 },
    { id: 2, descricaoMaterial: ' 40004362', codMaterial: 40004362 },
    { id: 3, descricaoMaterial: ' 40004363', codMaterial: 40004363 },
    { id: 4, descricaoMaterial: ' 40004364', codMaterial: 40004364 },
  ];

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const contractId = parseInt(event.target.value, 10);
    const contract = contracts.find((c) => c.id === contractId) || null;
    setSelectedContract(contract);
    if (contract) {
      onSelect(contract);
    }
  };

  return (
    <ContainerContract>
      <StyleSelect onChange={handleChange} value={selectedContract?.id || 'Contrato'}>
        <option value="">Contrato</option>
        {contracts.map((contract) => (
          <option key={contract.id} value={contract.id}>
            {contract.descricaoMaterial}
          </option>
        ))}
      </StyleSelect>
    </ContainerContract>
  );
};
