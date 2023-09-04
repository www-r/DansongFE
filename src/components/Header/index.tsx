import DivisionLine from '../DivisionLine';
import Logo from '../Logo';
import * as S from './style';

export default function Header() {
  return (
    <S.Header>
      <S.Container>
        <S.LogoContainer>
          <Logo logo="dansong" size="small" src="/logos/dansongWS.png" />
        </S.LogoContainer>
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
