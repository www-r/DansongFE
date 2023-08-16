import Header from '../../components/Header';
import DansongKorea from '../../components/Section/DansongKorea';
import * as S from './style';

export default function MainPage() {
  return (
    <S.Wrapper>
      <Header />
      <DansongKorea />
    </S.Wrapper>
  );
}
