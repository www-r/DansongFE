import * as S from './style';
export default function FlipCard({ children }: { children: React.ReactNode }) {
  return (
    <S.FlipCard>
      <div className="FlipCardInner"> {children}</div>
    </S.FlipCard>
  );
}
