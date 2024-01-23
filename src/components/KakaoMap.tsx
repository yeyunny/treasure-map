import { Map } from "react-kakao-maps-sdk";

const KakaoMap = () => {
  return (
    <Map
      className="w-full h-screen"
      center={{ lat: 37.558090961074825, lng: 126.99847210567884 }}
    ></Map>
  );
};

export default KakaoMap;
