import { Link } from 'react-router-dom';
import Logo from '../Logo';
import { RxHamburgerMenu } from 'react-icons/rx';

import * as S from './style';
import { theme } from '../../styles/theme';
import useModals from '../../hooks/useModals';
import Modal from '../Modals';

export default function Header() {
  const { openModal } = useModals();

  const handleTouchStart = () => {
    openModal(Modal, { modalName: 'headerModal' });
  };

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

        <S.IconContainer onTouchStart={handleTouchStart}>
          <RxHamburgerMenu size={24} color={theme.colors.white} />
        </S.IconContainer>
      </S.Container>
    </S.Header>
  );
}
