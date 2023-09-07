import thumbnail1 from '/images/thumbnail1.jpg';
import thumbnail2 from '/images/thumbnail2.jpg';
export const VIDEO: Video[] = [
  {
    id: 0,
    video: `${import.meta.env.VITE_BASE_URL}/videos/video1.mp4`,
    thumbnail: thumbnail1,
  },
  {
    id: 1,
    video: `${import.meta.env.VITE_BASE_URL}/videos/video2.mp4`,
    thumbnail: thumbnail2,
  },
];

type Video = {
  id: number;
  video: string;
  thumbnail: string;
};
