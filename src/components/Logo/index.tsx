import * as S from './style';

type LogoProps = {
  logo: string;
  size?: 'small' | 'medium' | 'large';
  src: string;
};

export default function Logo({ logo, size = 'medium', src }: LogoProps) {
  return (
    <S.LogoContainer className={size}>
      <img src={src} alt={`${logo} logo`} />
    </S.LogoContainer>
  );
}
