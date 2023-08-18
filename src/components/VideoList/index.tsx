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
        <li
          key={item.id}
          onMouseEnter={() => handleItemMouseEnter(idx + 1)}
          onMouseLeave={() => setActiveItem(0)}
        >
          <S.Box
            // animate={{ height: activeItem === idx ? 'auto' : 0 }}
            transition={{
              type: 'tween',
              duration: 0.15,
              ease: 'easeInOut',
            }}
          >
            <img src={item.thumbnail} />
          </S.Box>
        </li>
      ))}
      {activeItem && (
        <iframe
          width="560"
          height="315"
          src={VIDEO[activeItem - 1].src}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      )}
    </>
  );
}
