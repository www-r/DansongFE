import Logo from '../Logo';
import * as S from './style';

export default function Header() {
  return (
    <S.Header>
      <S.Container>
        <Logo
          logo="dansong"
          size="small"
          src="https://dansong-s3.s3.ap-northeast-2.amazonaws.com/logos/dansongW.png"
        />
        <S.MenuContainer>
          <S.Menu>DANSONG KOREA</S.Menu>
          <S.Menu>CONTENTS</S.Menu>
          <S.Menu>COMMERCE</S.Menu>
          <S.Menu>CONTACT</S.Menu>
        </S.MenuContainer>
      </S.Container>
    </S.Header>
  );
}
