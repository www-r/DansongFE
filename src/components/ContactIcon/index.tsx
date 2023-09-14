import * as S from './style';

export default function ContactIcon() {
  return (
    <a href="/contact">
      <S.ContactIcon>
        <img src="/images/contactIcon.svg" alt="contact Icon" width={50} />
      </S.ContactIcon>
    </a>
  );
}
