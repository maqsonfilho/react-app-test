import { FC } from 'react';
import { ContainerClientInfo, StyledLabelClientInfo, StyledTextClientInfo } from './style';
import { ClientInfoProps } from '~/@types/components/Client/client-item-props';

export const ClientInfo: FC<ClientInfoProps> = ({ label, children }) => (
  <ContainerClientInfo>
    <StyledLabelClientInfo>{label}</StyledLabelClientInfo> <StyledTextClientInfo>{children}</StyledTextClientInfo>
  </ContainerClientInfo>
);
