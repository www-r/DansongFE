import { useEffect } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

export default function Map() {
  useEffect(() => {
    const kakao = window.kakao;
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.5139273, 127.0324644),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    const markerPosition = new kakao.maps.LatLng(37.5139273, 127.0324644);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    marker.setMap(map);
  }, []);

  return <div id="map" style={{ width: '100%', height: '600px' }}></div>;
}
