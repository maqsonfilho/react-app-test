import theme from '~/styles/themes/theme';

export interface PropsIcon {
  className?: string;
  color?: keyof typeof theme.color;
  size?: string | number;
  width?: string | number;
  height?: string | number;
}
