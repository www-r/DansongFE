import * as S from './style';

type LogoProps = {
  logo: string;
  size?: 'small' | 'medium' | 'large';
  src: string;
  position?: string;
};

export default function Logo({ logo, size = 'medium', src, position }: LogoProps) {
  return (
    <S.LogoContainer className={size + ' ' + position}>
      <img src={src} alt={`${logo} logo`} />
    </S.LogoContainer>
  );
}
