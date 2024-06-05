import { FC } from 'react';

import { Path, Root } from '../style';
import theme from '~/styles/themes/theme';
import { PropsIcon } from '~/@types/components/Icons/icons-props';

export const EyeSlash: FC<PropsIcon> = ({ className, color = 'icon100', size = 24 }) => (
  <Root
    className={className}
    fill="none"
    height={size}
    viewBox="0 0 24 24"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M4.5 3.75012L19.5 20.2501M14.5225 14.7749C13.7866 15.4438 12.8151 15.793 11.8217 15.7457C10.8283 15.6983 9.89443 15.2583 9.22545 14.5224C8.55647 13.7866 8.2072 12.8151 8.25446 11.8217C8.30172 10.8283 8.74164 9.89437 9.47746 9.22532M6.93698 6.43077C3.11486 8.36629 1.5 12.0001 1.5 12.0001C1.5 12.0001 4.5 18.7494 12 18.7494C13.7572 18.7634 15.4926 18.3586 17.0623 17.5686M19.5571 15.8532C21.6011 14.0225 22.5 12.0001 22.5 12.0001C22.5 12.0001 19.5 5.24939 12 5.24939C11.3504 5.24833 10.7019 5.30114 10.061 5.40728M12.7057 8.31648C13.5027 8.46953 14.2287 8.87687 14.7746 9.47742C15.3205 10.078 15.657 10.8393 15.7336 11.6473"
      stroke={theme.color[color]}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </Root>
);
