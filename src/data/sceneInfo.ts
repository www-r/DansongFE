import { ReactHTMLElement } from 'react';

type SceneInfo = {
  type: 'normal' | 'sticky';
  heightNum: number;
  scrollHeight: number;
  objs: {
    container: ReactHTMLElement<HTMLElement> | null;
    messageA?: ReactHTMLElement<HTMLElement> | null;
    messageB?: ReactHTMLElement<HTMLElement> | null;
    messageC?: ReactHTMLElement<HTMLElement> | null;
  };
};

export const sceneInfo: SceneInfo[] = [
  //0
  {
    type: 'normal',
    heightNum: 5,
    scrollHeight: 0,
    objs: {
      container: document.querySelector('#scroll-scene-0'),
    },
  },
  //1
  {
    type: 'normal',
    heightNum: 5,
    scrollHeight: 0,
    objs: {
      container: document.querySelector('#scroll-scene-1'),
    },
  },
  //2 DSS 스튜디오 설명
  {
    type: 'sticky',
    heightNum: 5,
    scrollHeight: 0,
    objs: {
      container: document.querySelector('#scroll-scene-2'),
      messageA: document.querySelector('#scroll-scene-2 .message-a'),
      messageB: document.querySelector('#scroll-scene .message-b'),
      messageC: document.querySelector('#scroll-scene-2 .message-c'),
    },
    values: {
      messageA_opacity: [0, 1],
    },
  },

  //3
  {
    type: 'normal',
    heightNum: 5,
    scrollHeight: 0,
    objs: {
      container: document.querySelector('#scroll-scene-3'),
    },
  },

  //4
  {
    type: 'normal',
    heightNum: 5,
    scrollHeight: 0,
    objs: {
      container: document.querySelector('#scroll-scene-4'),
    },
  },

  //5 광고영상 풀화면에서 작은화면으로 + 밑에 스와이퍼 등장
  {
    type: 'sticky',
    heightNum: 5,
    scrollHeight: 0,
    objs: {
      container: document.querySelector('#scroll-scene-5'),
    },
  },

  //6 잇트리밍 로고 설명
  {
    type: 'sticky',
    heightNum: 5,
    scrollHeight: 0,
    objs: {
      container: document.querySelector('#scroll-scene-6'),
    },
  },

  //7 팝꽃 제품 : 큰 이미지에서 작은 이미지로 가면서 스와이퍼에 합류
  {
    type: 'sticky',
    heightNum: 5,
    scrollHeight: 0,
    objs: {
      container: document.querySelector('#scroll-scene-7'),
    },
  },

  //8
  {
    type: 'normal',
    heightNum: 5,
    scrollHeight: 0,
    objs: {
      container: document.querySelector('#scroll-scene-8'),
    },
  },
];
