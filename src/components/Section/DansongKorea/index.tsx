import Button from '../../Button';
import { motion, HTMLMotionProps } from 'framer-motion';
import Textline from '../../Textline';
import * as S from './style';

export default function DansongKorea() {
  return (
    <S.Section>
      <S.VideoWrapper>
        <S.VideoContainer>
          <iframe
            width="100%"
            height="360"
            src="https://www.youtube.com/embed/H6jx_By_dKg"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
          <iframe
            width="100%"
            height="360"
            src="https://www.youtube.com/embed/H6jx_By_dKg"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </S.VideoContainer>
      </S.VideoWrapper>
      {/* <Button text="sss" type="link" onClick={() => {}} /> */}
      <S.TextWrapper>
        <S.TextContainer>
          <Textline fontSize="4.8rem" text="Think Make Change" animation="top" isFontBold={true} />
          <Textline fontSize="2.4rem" text="생각이 실현되는 곳" animation="top" />
        </S.TextContainer>
      </S.TextWrapper>
      <div style={{ height: '1000px' }}></div>
      <motion.div
        animate={{
          x: 10,
          backgroundColor: '#000',
          boxShadow: '10px 10px 0 rgba(0, 0, 0, 0.2)',
          position: 'fixed',
          transitionEnd: {
            display: 'none',
          },
        }}
      >
        안녕
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <Textline fontSize="24rem" color="blue" text="안녕하세요" animation="top" />
    </S.Section>
  );
}
