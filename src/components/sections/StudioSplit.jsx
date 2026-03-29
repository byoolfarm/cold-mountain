// src/components/sections/StudioSplit.jsx
import { studio_split } from "../../assets/images";
import { useEffect, useRef, useState } from "react";
import { SectionLabel, SectionTitle } from "../ui";

// export default function StudioSplit() {
//   return (
//     <section id="work" className="grid grid-cols-1 md:grid-cols-2 min-h-[62vh]">
//       <div className="overflow-hidden">
//         <img
//           src={studio_split}
//           alt="The Cold Mountain Studio"
//           className="w-full h-full object-cover saturate-[0.84] hover:scale-[1.04] transition-transform duration-[6000ms]"
//         />
//       </div>
//       <div className="bg-cream px-10 md:px-20 py-16 md:py-24 flex flex-col justify-center">
//         <SectionLabel>The Studio</SectionLabel>
//         <SectionTitle className="mb-5">
//           A place where<br /><em className="italic text-clay-dark">craft meets practice</em>
//         </SectionTitle>
//         <p className="text-[0.95rem] leading-[2] text-earth-light mb-4 max-w-[400px]">
//           At The Cold Mountain Studio we strive to create an environment where one can nurture a relationship with clay as well as oneself. As a production studio, we find balance between efficient output and pursuing our own aesthetic and spiritual goals.
//         </p>
//         <p className="text-[0.95rem] leading-[2] text-earth-light mb-5 max-w-[400px]">
//           Our aim is that every piece from our studio would be like a prayer — not of asking, but of appreciation for the beauty and simplicity of natural things.
//         </p>
//         <button
//           onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
//           className="self-start text-base tracking-[0.13em] uppercase text-earth border-b border-black/15 pb-px hover:text-clay hover:border-clay transition-colors bg-transparent border-t-0 border-l-0 border-r-0 cursor-pointer font-jost"
//         >
//           Get in touch
//         </button>
//       </div>
//     </section>
//   );
// }




export default function StudioSplit() {
  const playerRef = useRef(null);
  const containerRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [playerReady, setPlayerReady] = useState(false);

  useEffect(() => {
    if (window.YT) return;
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }, []);

  useEffect(() => {
    const initPlayer = () => {
      playerRef.current = new window.YT.Player("yt-player", {
        videoId: "u_mf57XsXrU",
        playerVars: { autoplay: 1, mute: 1, loop: 1, playlist: "u_mf57XsXrU", controls: 0, rel: 0, modestbranding: 1 },
        events: { onReady: () => setPlayerReady(true) },
      });
    };

    if (window.YT?.Player) initPlayer();
    else window.onYouTubeIframeAPIReady = initPlayer;

    return () => playerRef.current?.destroy();
  }, []);

  useEffect(() => {
    if (!playerReady || !containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!playerRef.current) return;
        entry.isIntersecting ? playerRef.current.playVideo() : playerRef.current.pauseVideo();
      },
      { threshold: 0.3 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [playerReady]);

  const handleMuteToggle = () => {
    if (!playerRef.current) return;
    muted ? playerRef.current.unMute() : playerRef.current.mute();
    setMuted(m => !m);
  };

  return (
    <section id="work" ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 min-h-[62vh] mb-[8rem]">

      {/* Left — Video */}
      <div className="overflow-hidden relative min-h-[40vh] md:min-h-full">
        <div
          id="yt-player"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] min-w-full min-h-[56.25vw] h-auto pointer-events-none"
        />
        {/* Unmute button */}
        <button
          onClick={handleMuteToggle}
          className="absolute bottom-4 right-4 z-10 bg-black/40 backdrop-blur-sm text-white rounded-full w-9 h-9 flex items-center justify-center hover:bg-black/60 transition-colors"
        >
          {muted ? (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16.5 12A4.5 4.5 0 0 0 14 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06A8.99 8.99 0 0 0 17.73 18L19 19.27 20.27 18 5.27 3 4.27 3zM12 4 9.91 6.09 12 8.18V4z"/>
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
            </svg>
          )}
        </button>
      </div>

      {/* Right — Text (original, unchanged) */}
      <div className="bg-cream px-10 md:px-20 py-16 md:py-24 flex flex-col justify-center">
        <SectionLabel>The Studio</SectionLabel>
        <SectionTitle className="mb-5">
          A place where<br /><em className="italic text-clay-dark">craft meets practice</em>
        </SectionTitle>
        <p className="text-[0.95rem] leading-[2] text-earth-light mb-4 max-w-[400px]">
          At The Cold Mountain Studio we strive to create an environment where one can nurture a relationship with clay as well as oneself. As a production studio, we find balance between efficient output and pursuing our own aesthetic and spiritual goals.
        </p>
        <p className="text-[0.95rem] leading-[2] text-earth-light mb-5 max-w-[400px]">
          Our aim is that every piece from our studio would be like a prayer — not of asking, but of appreciation for the beauty and simplicity of natural things.
        </p>
        <button
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          className="self-start text-base tracking-[0.13em] uppercase text-earth border-b border-black/15 pb-px hover:text-clay hover:border-clay transition-colors bg-transparent border-t-0 border-l-0 border-r-0 cursor-pointer font-jost"
        >
          Get in touch
        </button>
      </div>

    </section>
  );
}
