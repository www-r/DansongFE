import * as S from './style';
import { isMobile } from 'react-device-detect';

export default function Footer() {
  return (
    <S.Footer>
      <img className="footer--logo" src="/logos/dansongB.png" alt="logo" height={100} />
      <div className="footer--text">
        <div className="text--top">
          <div>
            <p className="company-name">Dansong Inc.(단송)</p>
            <p className="flexwrap">
              <span>대표자: 김동영</span>&nbsp;
              {!isMobile && <span>|</span>}
              &nbsp;<span>전화번호: 010-9928-2881</span>
            </p>
            <p>
              <span>사업자 등록번호: 622-03-75466</span>&nbsp;
              {!isMobile && <span>|</span>}
              &nbsp;<span>통신판매업신고번호: 2019-서울강남-00565</span>
            </p>
          </div>
          <div className="sns-container"></div>
        </div>
        ​​<p className="text--bottom">© 2019 Dansong. All rights reserved.</p>
      </div>
    </S.Footer>
  );
}
