import { useRef, useEffect, useCallback } from 'react';
import * as S from './style';
import { CenterContainer } from '../../styles/global';
import { AiOutlineClose } from 'react-icons/ai';

import Logo from '../Logo';
import DivisionLine from '../DivisionLine';
import { theme } from '../../styles/theme';

type Props = {
  onClose: () => void;
};

export default function HeaderModal({ onClose }: Props) {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleOutsideClick = useCallback(
    (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <S.ModalContainer ref={modalRef}>
      <S.MenuContainer direction="column">
        <CenterContainer
          style={{ justifyContent: 'space-between', width: '100%', marginBottom: '3rem' }}
        >
          <Logo size="sm" logo="dansong" src="/logos/dansongB.png" />
          <AiOutlineClose size={24} onTouchStart={onClose} />
        </CenterContainer>

        <S.Menu>
          <a href="/#dansongkorea " onClick={onClose}>
            DANSONG KOREA
          </a>
          <DivisionLine color={theme.colors.grey1} />
        </S.Menu>

        <S.Menu>
          <a href="/#contents" onClick={onClose}>
            CONTENTS
          </a>
          <DivisionLine color={theme.colors.grey1} />
        </S.Menu>

        <S.Menu>
          <a href="/#commerce">COMMERCE</a>
          <DivisionLine color={theme.colors.grey1} />
        </S.Menu>

        <S.Menu>
          <a href="/contact" onClick={onClose}>
            CONTACT
          </a>
          <DivisionLine color={theme.colors.grey1} />
        </S.Menu>
      </S.MenuContainer>
    </S.ModalContainer>
  );
}
