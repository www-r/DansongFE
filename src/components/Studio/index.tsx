import React from 'react';
import Textline from '../Textline';
import * as S from './style';
import { useScroll, useTransform } from 'framer-motion';

export default function Studio() {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 800], [0.9, 1]);
  const y = useTransform(scrollY, [0, 100], [0, -300]);

  return (
    <>
      <S.Wrapper>
        <S.ImgContainer>
          <S.TextContainer>
            <Textline fontSize="28rem" animation="top" isFontBold={true} color="#fff">
              DSS
            </Textline>
            <Textline fontSize="8rem" animation="top" isFontBold={true} color="#fff">
              DANSONG STUDIOS
            </Textline>
          </S.TextContainer>
          <S.DescContainer>
            <S.TextContainer>
              <Textline fontSize="5rem" animation="right" color="#fff" marginBottom="2rem">
                단송 스튜디오는 (주)단송코리아의 자체적인
                <br />
                프로덕션 크루 입니다.
              </Textline>
              <Textline fontSize="5rem" animation="left" color="#fff" marginBottom="2rem">
                사물과 인물, 사진과 영상, 컨텐츠와 커머스, 등
                <br />
                특정 분야에 구애받지 않는 창의적인 팀으로
              </Textline>
              <Textline fontSize="5rem" animation="right" color="#fff" marginBottom="2rem">
                (주)단송코리아를 포함한 다양한
                <br />
                클라이언트들의 아이디어를 실현시켜드립니다
              </Textline>
            </S.TextContainer>
          </S.DescContainer>
        </S.ImgContainer>
      </S.Wrapper>
    </>
  );
}
