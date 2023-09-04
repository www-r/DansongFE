import * as S from './style';

type LogoProps = {
  logo: string;
  size?: 'small' | 'medium' | 'large';
  border?: 'none' | 'circle';
  src: string;
};

export default function Logo({ logo, size = 'medium', border = 'none', src }: LogoProps) {
  return (
    <S.LogoContainer className={size + ' ' + border}>
      <img src={src} alt={`${logo} logo`} />
    </S.LogoContainer>
  );
}
