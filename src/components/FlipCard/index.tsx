import * as S from './style';
export default function FlipCard({ children }) {
  return (
    <S.FlipCard>
      <div className='FlipCardInner'> {children}</div>
    </S.FlipCard>
  );
}
