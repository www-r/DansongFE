import Button from '../../Button';
import { motion, HTMLMotionProps } from 'framer-motion';
import Textline from '../../Textline';
import * as S from './style';

export default function DansongKorea() {
  return (
    <S.Section>
      <S.VideoSection>
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
      </S.VideoSection>
      {/* <Button text="sss" type="link" onClick={() => {}} /> */}
      <S.TextSection>
        <S.TextContainer>
          <Textline fontSize="4.8rem" text="Think Make Change" animation="top" isFontBold={true} />
          <Textline fontSize="2.4rem" text="생각이 실현되는 곳" animation="top" />
        </S.TextContainer>
      </S.TextSection>
      <div style={{ height: '1000px' }}></div>

      <S.LogoSection>
        <S.LogoContainer>
          <div>ddd</div>
        </S.LogoContainer>
      </S.LogoSection>
    </S.Section>
  );
}
