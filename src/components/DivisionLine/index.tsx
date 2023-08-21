import { theme } from '../../styles/theme';
import * as S from './style';

type Props = {
  color?: string;
};

export default function DivisionLine({ color = theme.colors.line }: Props) {
  return <S.DivisionLine color={color} />;
}
