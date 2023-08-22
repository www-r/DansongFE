import * as S from './style';

type LogoProps = {
  logo: string;
  size: 'small' | 'medium' | 'large';
};

export default function Logo({ logo, size }: LogoProps) {
  return (
    <S.LogoContainer className={size}>
      <img src={`../../../public/logos/${logo}`} />
    </S.LogoContainer>
  );
}
