import { useEffect, useRef } from "react";
import gsap from "gsap";

const LogoAnimation = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      // Initially play the video (muted)
      videoElement.play();

      // Listen for the 'ended' event to trigger the fade-out animation
      videoElement.onended = () => {
        gsap.to(videoElement, {
          opacity: 0,
          duration: 1,
          ease: "power3.out", // Smooth fade-out effect
        });
      };
    }
  }, []);

  return (
    <div className={"flex h-[100vh] w-full items-center justify-center"}>
      {/* Video with autoplay (muted initially) */}
      <video
        ref={videoRef}
        src="/video/JAKEFLIX.mp4"
        autoPlay
        muted // Initially muted to allow autoplay
        playsInline
        className={"h-[100vh] w-full object-cover"}
      ></video>
    </div>
  );
};

export default LogoAnimation;
