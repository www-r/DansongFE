import { Link } from 'react-router-dom';
import * as S from './style';

export default function ContactIcon() {
  return (
    <Link to="/contact">
      <S.ContactIcon>
        <img src="/images/contactIcon.svg" alt="contact Icon" width={50} />
      </S.ContactIcon>
    </Link>
  );
}
