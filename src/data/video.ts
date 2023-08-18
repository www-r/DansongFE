const videoId = ['1P2Ihg3EjLQ', 'zfZMd9djul8'];

export const VIDEO: Video[] = videoId.map(id => ({
  id,
  src: `https://www.youtube.com/embed/${id}`,
  thumbnail: `https://img.youtube.com/vi/${id}/0.jpg`,
}));

type Video = {
  id: string;
  src: string;
  thumbnail: string;
};
