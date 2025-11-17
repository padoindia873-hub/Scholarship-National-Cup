// MultiLivePlayer.jsx
import React, { useEffect, useRef, useState } from "react";
import Hls from "hls.js";

const PLATFORM = {
  HLS: "hls",
  YOUTUBE: "youtube",
  FACEBOOK: "facebook",
};

const MultiLivePlayer = ({
  youtubeChannelId = "UCsgNa9r9VNrDBYYtAlizlUQ",
  youtubeVideoId,
  fbVideoUrl,        // IMPORTANT: Must be public video URL, not producer URL
  hlsSrc,
}) => {
  const videoRef = useRef(null);
  const hlsRef = useRef(null);

  const [active, setActive] = useState(() => {
    if (hlsSrc) return PLATFORM.HLS;
    if (youtubeVideoId || youtubeChannelId) return PLATFORM.YOUTUBE;
    if (fbVideoUrl) return PLATFORM.FACEBOOK;
    return PLATFORM.YOUTUBE;
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  /* -------------------------
        HLS Player
  --------------------------*/
  useEffect(() => {
    setError(null);
    setLoading(false);

    if (active !== PLATFORM.HLS || !hlsSrc) {
      if (hlsRef.current) hlsRef.current.destroy();
      return;
    }

    const video = videoRef.current;
    if (!video) return;

    const isM3U8 = hlsSrc.toLowerCase().endsWith(".m3u8");
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    setLoading(true);

    if (isM3U8 && Hls.isSupported() && !isSafari) {
      const hls = new Hls({ enableWorker: true });
      hlsRef.current = hls;

      hls.loadSource(hlsSrc);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        setLoading(false);
        video.play().catch(() => {});
      });

      hls.on(Hls.Events.ERROR, () => {
        setError("HLS Playback Error");
        setLoading(false);
      });
    } else {
      video.src = hlsSrc;
      video.play().catch(() => {});
      setLoading(false);
    }

    return () => {
      if (hlsRef.current) hlsRef.current.destroy();
    };
  }, [active, hlsSrc]);

  /* -------------------------
        Facebook Live Embed
  --------------------------*/
  useEffect(() => {
    if (active !== PLATFORM.FACEBOOK) return;

    // Load FB SDK once
    if (!document.getElementById("facebook-jssdk")) {
      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v15.0";
      script.async = true;
      document.body.appendChild(script);
    } else if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, [active]);

  /* -------------------------
        Fullscreen
  --------------------------*/
  const handleFullScreen = () => {
    const el = document.getElementById("multi-live-player");
    if (el.requestFullscreen) el.requestFullscreen();
  };

  /* -------------------------
        YouTube Render
  --------------------------*/
  const renderYouTube = () => {
    const src = youtubeVideoId
      ? `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1`
      : `https://www.youtube.com/embed/live_stream?channel=${youtubeChannelId}&autoplay=1&mute=1`;

    return (
      <iframe
        title="YouTube Live"
        src={src}
        style={{ width: "100%", height: "100%" }}
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    );
  };

  /* -------------------------
        Facebook Render
  --------------------------*/
  const renderFacebook = () => {
    if (!fbVideoUrl) return <div>No Facebook Source</div>;

    // IMPORTANT: MUST BE REAL PUBLIC VIDEO URL
    return (
      <iframe
        title="Facebook Live"
        src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
          fbVideoUrl
        )}&show_text=false&autoplay=true`}
        style={{ width: "100%", height: "100%" }}
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    );
  };

  /* -------------------------
        HLS Render
  --------------------------*/
  const renderHls = () => (
    <div className="w-full h-full bg-black flex items-center justify-center relative">
      <video
        ref={videoRef}
        controls
        autoPlay
        muted
        playsInline
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
      {loading && (
        <div className="absolute inset-0 text-white flex items-center justify-center">
          Loading…
        </div>
      )}
      {error && (
        <div className="absolute inset-0 text-red-400 flex items-center justify-center">
          {error}
        </div>
      )}
    </div>
  );

  return (
    <div id="multi-live-player" style={{ maxWidth: 960, margin: "0 auto" }}>
      <div style={{ display: "flex", gap: 10, marginBottom: 10 }}>
        <button onClick={() => setActive(PLATFORM.HLS)}>HLS</button>
        <button onClick={() => setActive(PLATFORM.YOUTUBE)}>YouTube</button>
        <button onClick={() => setActive(PLATFORM.FACEBOOK)}>Facebook</button>

        <button onClick={handleFullScreen} style={{ marginLeft: "auto" }}>
          Fullscreen ⛶
        </button>
      </div>

      <div style={{ width: "100%", height: 540, background: "#000", borderRadius: 10 }}>
        {active === PLATFORM.HLS && renderHls()}
        {active === PLATFORM.YOUTUBE && renderYouTube()}
        {active === PLATFORM.FACEBOOK && renderFacebook()}
      </div>
    </div>
  );
};

export default MultiLivePlayer;
