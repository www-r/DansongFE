import * as S from './style';

type ButtonProps = {
  children: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return <S.Button>{children}</S.Button>;
}
