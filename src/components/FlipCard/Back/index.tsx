import * as S from './style';
export default function FlipCardBack({ children }: { children: React.ReactNode }) {
  return <S.Back>{children}</S.Back>;
}
