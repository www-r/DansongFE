import Header from '../../components/Header';

import CommerceSection from '../../components/Section/Commerce';

import DansongKorea from '../../components/Section/DansongKorea';
import DivisionLine from '../../components/DivisionLine';
import Footer from '../../components/Footer';

export default function MainPage() {
  return (
    <>
      <Header />
      <main>
        <DansongKorea />
        <CommerceSection />
        <DivisionLine />
      </main>
      <Footer />
    </>
  );
}
