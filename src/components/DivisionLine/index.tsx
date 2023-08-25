import { theme } from '../../styles/theme';
import * as S from './style';

type Props = {
  color?: string;
  borderStyle?: string;
};

export default function DivisionLine({ color = theme.colors.border, borderStyle = 'solid' }: Props) {
  return <S.DivisionLine color={color} borderStyle={borderStyle} />;
}
