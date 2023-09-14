import * as S from './style';
import { CenterContainer } from '../../styles/global';
import { AiOutlineClose } from 'react-icons/ai';

import Logo from '../Logo';
import { Link } from 'react-router-dom';
import DivisionLine from '../DivisionLine';
import { theme } from '../../styles/theme';

export default function HeaderModal({ onClose }) {
  return (
    <S.ModalContainer>
      <S.MenuContainer direction="column">
        <CenterContainer
          style={{ justifyContent: 'space-between', width: '100%', marginBottom: '3rem' }}
        >
          <Logo size="sm" logo="dansong" src="/logos/dansongB.png" />
          <AiOutlineClose size={24} onTouchStart={onClose} />
        </CenterContainer>

        <S.Menu>
          <a href="/#dansongkorea">DANSONG KOREA</a>
          <DivisionLine color={theme.colors.grey1} />
        </S.Menu>

        <S.Menu>
          <a href="/#contents">CONTENTS</a>
          <DivisionLine color={theme.colors.grey1} />
        </S.Menu>

        <S.Menu>
          <a href="/#commerce">COMMERCE</a>
          <DivisionLine color={theme.colors.grey1} />
        </S.Menu>

        <S.Menu>
          {/* <Link to="/contact"> CONTACT</Link> */}
          <DivisionLine color={theme.colors.grey1} />
        </S.Menu>
      </S.MenuContainer>
    </S.ModalContainer>
  );
}
