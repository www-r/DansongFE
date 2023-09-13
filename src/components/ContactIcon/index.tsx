import * as S from './style';

export default function ContactIcon() {
  return (
    <a href="/contact">
      <S.ContactIcon>
        <img src="/images/contactIcon.png" alt="contact Icon" width={40} />
      </S.ContactIcon>
    </a>
  );
}
