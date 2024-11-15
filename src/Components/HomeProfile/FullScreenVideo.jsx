import { useParams } from "react-router-dom";

function FullScreenVideo() {
  let { videoUrl } = useParams(); // الحصول على رابط الفيديو من الـ URL
  let decodedUrl = decodeURIComponent(videoUrl); // فك تشفير الـ URL

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        mt:'30px'
      }}
    >
      <video
        src={decodedUrl}
        controls
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
}

export default FullScreenVideo;
