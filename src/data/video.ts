import video1 from '/videos/video1.mp4';
import video2 from '/videos/video2.mp4';
import thumbnail1 from '/images/thumbnail1.jpg';
import thumbnail2 from '/images/thumbnail2.jpg';
export const VIDEO: Video[] = [
  {
    id: 0,
    video: video1,
    thumbnail: thumbnail1,
  },
  {
    id: 1,
    video: video2,
    thumbnail: thumbnail2,
  },
];
type Video = {
  id: number;
  video: string;
  thumbnail: string;
};
