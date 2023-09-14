import { useState } from 'react';
import Header from '../../components/Header';
import DansongKorea from '../../components/Section/DansongKorea';
import Contents from '../../components/Section/Contents';
import Commerce from '../../components/Section/Commerce';
import Footer from '../../components/Footer';
import ContactIcon from '../../components/ContactIcon';

import * as S from './style';

export default function MainPage() {
  const [viewWidth, setViewWidth] = useState(window.innerWidth);
  window.addEventListener('resize', () => {
    setViewWidth(window.innerWidth);
  });
  // window.addEventListener('scroll', () => {
  //   scrollLoop();
  // });

  return (
    <>
      <Header />
      <S.Main>
        <DansongKorea />
        <Contents />
        <Commerce />
      </S.Main>
      <Footer />
      {viewWidth > 480 && <ContactIcon />}
    </>
  );
}
