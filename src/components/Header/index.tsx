import { Link } from 'react-router-dom';
import DivisionLine from '../DivisionLine';
import Logo from '../Logo';
import * as S from './style';

export default function Header() {
  return (
    <S.Header>
      <S.Container>
        <S.LogoContainer>
          <Link to="/">
            <Logo logo="dansong" size="small" src="/logos/dansongWS.png" />
          </Link>
        </S.LogoContainer>
        <S.MenuContainer>
          <S.Menu>
            <a href="/#dansongkorea">DANSONG KOREA</a>
          </S.Menu>

          <S.Menu>
            <a href="/#contents">CONTENTS</a>
          </S.Menu>

          <S.Menu>
            <a href="/#commerce">COMMERCE</a>
          </S.Menu>

          <Link to="/contact">
            <S.Menu>CONTACT</S.Menu>
          </Link>
        </S.MenuContainer>
      </S.Container>
      <DivisionLine />
    </S.Header>
  );
}
