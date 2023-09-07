import { theme } from '../../styles/theme';
import * as S from './style';

type Props = {
  borderStyle?: string;
  width?: string;
  color?: string;
};

export default function DivisionLine({
  borderStyle = 'solid',
  width = '100%',
  color = theme.colors.border,
}: Props) {
  return <S.DivisionLine borderStyle={borderStyle} width={width} color={color} />;
}
