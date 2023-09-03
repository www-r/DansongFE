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
    </S.Header>
  );
}
