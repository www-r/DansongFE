import * as S from './style';

type ButtonProps = {
  children: React.ReactNode;
  className: string;
};

export default function Button({ children, className }: ButtonProps) {
  return (
    <S.Button className={className}>
      <span>{children}</span>
    </S.Button>
  );
}
