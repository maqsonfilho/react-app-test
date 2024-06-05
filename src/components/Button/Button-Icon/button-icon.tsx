import { FC } from 'react';
import { IonIcon } from '@ionic/react';
import { refreshOutline } from 'ionicons/icons';
import { ButtonProps } from '~/@types/components/Button/button-props';

export const ButtonIcon: FC<ButtonProps> = ({ loading }) => {
  return loading ? <IonIcon icon={refreshOutline} /> : null;
};
