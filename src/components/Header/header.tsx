import { IonIcon } from '@ionic/react';
import { logOutOutline } from 'ionicons/icons';
import { FC, MouseEventHandler } from 'react';
import logobsafra from './images/logobsafra.png';
import { ContainerIcon, HeaderContainer, Logo } from './style';

export interface HeaderProps {
  onClick: MouseEventHandler<HTMLIonIconElement>;
}

export const Header: FC<HeaderProps> = ({ onClick }) => {
  return (
    <HeaderContainer>
      <Logo src={logobsafra} alt="Logo" />
      <ContainerIcon>
        <IonIcon icon={logOutOutline} size="large" onClick={onClick} />
      </ContainerIcon>
    </HeaderContainer>
  );
};
