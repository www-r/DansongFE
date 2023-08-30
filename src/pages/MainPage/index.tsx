import Header from '../../components/Header';
// import CommerceSection from '../../components/Section/Commerce';
import DansongKorea from '../../components/Section/DansongKorea';

import Footer from '../../components/Footer';
import * as S from './style';

export default function MainPage() {
  return (
    <>
      <Header />
      <S.Main>
        <DansongKorea />
        {/* <CommerceSection /> */}
        {/* <DivisionLine /> */}
      </S.Main>
      <Footer />
    </>
  );
}
