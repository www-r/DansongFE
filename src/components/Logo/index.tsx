import * as S from './style';

type LogoProps = {
  logo: string;
  size?: 'small' | 'sm' | 'medium' | 'ml' | 'large';
  border?: 'none' | 'circle';

  src: string;
};

export default function Logo({ logo, size = 'medium', border = 'none', src }: LogoProps) {
  return (
    <S.LogoContainer className={size + ' ' + border}>
      <img src={src} alt={`${logo}`} />
    </S.LogoContainer>
  );
}
