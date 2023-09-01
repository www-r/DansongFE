import DivisionLine from '../DivisionLine';
import Logo from '../Logo';
import * as S from './style';

export default function Header() {
  return (
    <S.Header>
      <S.Container>
        <Logo logo="dansongW.png" size="small" />
        <S.MenuContainer>
          <S.Menu>
            <a href="#DANSONGKOREA">DANSONG KOREA</a>
          </S.Menu>
          <S.Menu>
            <a href="#CONTENTS">CONTENTS</a>
          </S.Menu>
          <S.Menu>
            <a href="#COMMERCE">COMMERCE</a>
          </S.Menu>
          <S.Menu>
            <a href="#CONTACT">CONTACT</a>
          </S.Menu>
        </S.MenuContainer>
      </S.Container>
      <DivisionLine />
    </S.Header>
  );
}
