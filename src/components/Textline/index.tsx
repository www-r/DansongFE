import * as S from './style';

type Props = {
  fontSize: number;
  isFontBold?: boolean;
  color?: any;
  marginBottom?: string;
  children: React.ReactNode;
  animation?: keyof typeof direction;
  dynamicStyles?: React.CSSProperties;
};

const scale = 50;
const direction = {
  left: { initialX: -scale, initialY: 0 },
  right: { initialX: scale, initialY: 0 },
  top: { initialX: 0, initialY: -scale },
  bottom: { initialX: 0, initialY: scale },
  none: { initialX: 0, initialY: 0 },
};

export default function Textline({
  fontSize,
  color = '#000',
  children,
  animation = 'none',
  isFontBold = false,
  marginBottom = '0rem',
}: Props) {
  const { initialX, initialY } = direction[animation] || direction.none;

  return (
    <S.Textline
      fontSize={fontSize}
      isFontBold={isFontBold}
      color={color}
      marginBottom={marginBottom}
      initial={{ opacity: 0, x: initialX, y: initialY }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 1 }}
    >
      {children}
    </S.Textline>
  );
}
