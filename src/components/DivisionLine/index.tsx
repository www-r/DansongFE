import * as S from './style';

type Props = {
  borderStyle?: string;
};

export default function DivisionLine({ borderStyle = 'solid' }: Props) {
  return <S.DivisionLine borderStyle={borderStyle} />;
}
