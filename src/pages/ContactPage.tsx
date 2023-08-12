import Header from '../components/Header';
import Footer from '../components/Footer';
export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <div>
          <h3>CONTACT INFO</h3>
          <ul>
            <li >
              <label>전화</label>
              <p>070 7799 0703</p>
            </li>
            <li>
              <label>이메일</label>
              <p>official@dansong.kr</p>
            </li>
            <li>
              <label>주소</label>
              <p>212, Hakdong-ro, Gangnam-gu, Postville 703</p>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
