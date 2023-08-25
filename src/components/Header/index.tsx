import DivisionLine from '../DivisionLine';
import Logo from '../Logo';
import * as S from './style';

export default function Header() {
  return (
    <S.Header>
      <S.Container>
        <Logo logo="dansongW.png" size="small" />
        <S.MenuContainer>
          <S.Menu>DANSONG KOREA</S.Menu>
          <S.Menu>CONTENTS</S.Menu>
          <S.Menu>COMMERCE</S.Menu>
          <S.Menu>CONTACT</S.Menu>
        </S.MenuContainer>
      </S.Container>
      <DivisionLine />
    </S.Header>
  );
}
