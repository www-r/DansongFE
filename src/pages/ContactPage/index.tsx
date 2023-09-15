import Header from '../../components/Header';
import Footer from '../../components/Footer';
import * as S from './style';
import ContactInfo from '../../components/ContactInfo';

export default function ContactPage() {
  return (
    <>
      <Header />
      <S.Main>
        <ContactInfo />
      </S.Main>
      <Footer />
    </>
  );
}
