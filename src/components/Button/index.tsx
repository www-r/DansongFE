import * as S from './style';

type Props = {
  text: string;
  type: 'scroll' | 'link';
  onClick: () => void;
};

export default function Button({ text, type, onClick }: Props) {
  return (
    <S.Button onClick={onClick} className={type}>
      {text}
    </S.Button>
  );
}
