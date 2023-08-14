import * as S from './style';

interface TextlineProps {
  children: string;
  textAlign?: string;
  fontSize: number;
  fontWeight?: number;
  color?: string;
  animation?: 'none' | 'up' | 'side';
}

export default function Textline({
  children,
  textAlign = 'left',
  fontSize,
  fontWeight = 600,
  color = '#000',
  animation = 'none',
}: TextlineProps) {
  return (
    <S.Textline
      textAlign={textAlign}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      animation={animation}
    >
      {children}
    </S.Textline>
  );
}
