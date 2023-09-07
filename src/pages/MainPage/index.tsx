import Header from '../../components/Header';
import DansongKorea from '../../components/Section/DansongKorea';
import Contents from '../../components/Section/Contents';
import Commerce from '../../components/Section/Commerce';
import Footer from '../../components/Footer';
import * as S from './style';

export default function MainPage() {
  // window.addEventListener('resize', setLayout);
  // window.addEventListener('scroll', () => {
  //   scrollLoop();
  // });

  // useEffect(()=> {
  //   setLayout()
  // }, [])
  return (
    <>
      <Header />
      <S.Main>
        <DansongKorea />
        <Contents />
        <Commerce />
      </S.Main>
      <Footer />
    </>
  );
}
