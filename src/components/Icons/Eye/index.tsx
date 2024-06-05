import { FC } from 'react';
import { Path, Root } from '../style';
import { PropsIcon } from '~/@types/components/Icons/icons-props';
import theme from '~/styles/themes/theme';

export const Eye: FC<PropsIcon> = ({ className, color = 'icon100', size = 24 }) => (
  <Root
    className={className}
    fill="none"
    height={size}
    viewBox="0 0 24 24"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M12 5.24927C4.5 5.24927 1.5 12 1.5 12C1.5 12 4.5 18.7493 12 18.7493C19.5 18.7493 22.5 12 22.5 12C22.5 12 19.5 5.24927 12 5.24927Z"
      stroke={theme.color[color]}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />

    <Path
      d="M12 15.7501C14.0711 15.7501 15.75 14.0711 15.75 12.0001C15.75 9.92899 14.0711 8.25006 12 8.25006C9.92893 8.25006 8.25 9.92899 8.25 12.0001C8.25 14.0711 9.92893 15.7501 12 15.7501Z"
      stroke={theme.color[color]}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </Root>
);
