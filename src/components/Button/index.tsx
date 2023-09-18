import { MouseEventHandler } from 'react';
import * as S from './style';

type ButtonProps = {
  children: React.ReactNode;
  className: string;
  onClick?: MouseEventHandler;
};

export default function Button({ children, className, onClick }: ButtonProps) {
  return (
    <S.Button className={className} onClick={onClick}>
      <span>{children}</span>
    </S.Button>
  );
}
