import React, { useState } from 'react';
import { VIDEO } from '../../data/video';
import * as S from './style';
export default function VideoList() {
  const [activeItem, setActiveItem] = useState(0);
  console.log(activeItem);
  const handleItemMouseEnter = (idx: number) => {
    idx === activeItem ? setActiveItem(0) : setActiveItem(idx);
  };
  return (
    <>
      {VIDEO.map((item, idx) => (
        <S.ImgContainer key={item.id} onMouseEnter={() => handleItemMouseEnter(idx + 1)}>
          <img src={item.thumbnail} />
        </S.ImgContainer>
      ))}
      {activeItem !== 0 && (
        <S.Video width="100%" height="100%" controls autoPlay onMouseLeave={() => setActiveItem(0)}>
          <source src={VIDEO[activeItem - 1].video} type="video/mp4" />
        </S.Video>
      )}
    </>
  );
}
// <iframe
//   width="560"
//   height="315"
//   src={VIDEO[activeItem - 1].src}
//   title="YouTube video player"
//   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
// ></iframe>
