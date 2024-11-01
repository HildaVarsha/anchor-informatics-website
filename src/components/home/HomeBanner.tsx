import React from "react";

const HomeBanner = () => {
  return (
    <div className="relative w-full">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover"
      >
        <source
          src="https://videos.pexels.com/video-files/1536322/1536322-hd_1920_1080_30fps.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute top-24 text-blue-600 flex flex-col items-center w-full">
        <p className="text-4xl font-bold">Welcome to</p>
        <p className="text-8xl font-bold pt-8">ANCHOR INFORMATICS </p>
      </div>
    </div>
  );
};

export default HomeBanner;
