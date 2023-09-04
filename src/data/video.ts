import thumbnail1 from '/images/thumbnail1.jpg';
import thumbnail2 from '/images/thumbnail2.jpg';
export const VIDEO: Video[] = [
  {
    id: 0,
    video: 'https://dansong-s3.s3.ap-northeast-2.amazonaws.com/videos/video1.mp4',

    thumbnail: thumbnail1,
  },
  {
    id: 1,

    video: 'https://dansong-s3.s3.ap-northeast-2.amazonaws.com/videos/video2.mp4',
    thumbnail: thumbnail2,
  },
];

type Video = {
  id: number;
  video: string;
  thumbnail: string;
};
