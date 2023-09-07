(() => {
  let scrollY = 0; //scrollY 변수값
  let prevScrollHeight = 0; //현재 스크롤 위치보다(scrollY) 이전에 위치한 스크롤 섹션들의 스크롤 높이의 합
  let currentScene = 0; //현재 활성화된(눈 앞에 보고있는viewport) 씬

  const sceneInfo = [
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

  function setLayout() {
    //각 스크롤 섹션의 높이 세팅
    for (let i = 0; i < sceneInfo.length; i++) {
      sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;

      sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
    }

    let totalScrollHeight = 0;
    for (let i = 0; i < sceneInfo.length; i++) {
      totalScrollHeight += sceneInfo[i].scrollHeight;
      if (totalScrollHeight >= scrollY) {
        currentScene = i;
        break;
      }
    }
  }
  function scrollLoop() {
    prevScrollHeight = 0;
    for (let i = 0; i < currentScene; i++) {
      prevScrollHeight += sceneInfo[i].scrollHeight;
      if (scrollY > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
        currentScene++;
      }
      if (scrollY < prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
        if (currentScene === 0) return; //브라우저 바운스 효과로 인해 마이너스가 되는 것을 방지

        currentScene--;
      }
      const main = document.querySelector('main');
      main && main.setAttribute('id', `show-scene-${currentScene}`);
    }
  }
  function calcValues (values) {

  }
function playAnimation () {
  switch(currentScene) {
    case 0: break;
    case 1 : break;
    case 2 : break;
    case 3 : break;

  }
}
  window.addEventListener('resize', setLayout);
  window.addEventListener('scroll', () => {
    scrollY = window.scrollY;
    scrollLoop();
  });
  window.addEventListener('load', setLayout);
  //DOMContentLoaded 도 사용가능( 골격이 로드되면 실행 => 조금 더 빠름)
})();
