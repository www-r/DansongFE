import * as S from './style';

type LogoProps = {
  children: React.ReactNode;
  height: number;
};

export default function Logo({ children, height }: LogoProps) {
  return <S.LogoContainer height={height}>{children}</S.LogoContainer>;
}
