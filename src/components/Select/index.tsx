import { FC } from 'react';
import { SelectCustom } from './Select-Custom/select-custom';
import { SelectOptions } from './Select-Options/select-options';

export const SelectAdministratorOrCustomer: FC = () => {
  const handleProfileChange = (selectedProfile: string) => {
    console.log('Perfil Selecionado:', selectedProfile);
  };

  return (
    <SelectCustom onChange={handleProfileChange} label="Perfil :">
      <SelectOptions value="Administrador" onSelect={() => {}}>
        Administrador
      </SelectOptions>

      <SelectOptions value="Cliente" onSelect={() => {}}>
        Cliente
      </SelectOptions>
    </SelectCustom>
  );
};
