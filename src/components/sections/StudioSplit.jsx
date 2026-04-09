// src/components/sections/StudioSplit.jsx
import { studio_split } from "../../assets/img";
import { useEffect, useRef, useState } from "react";
import { SectionLabel, SectionTitle } from "../ui";

export default function StudioSplit() {
  const playerRef = useRef(null);
  const containerRef = useRef(null);

  const [hasStarted, setHasStarted] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);
  const [muted, setMuted] = useState(false);
  const [shouldAutoPlay, setShouldAutoPlay] = useState(false);

  // ─── LOAD YT API SAFELY ───────────────────────────────────────────
  const loadYouTubeAPI = () => {
    return new Promise((resolve) => {
      if (window.YT && window.YT.Player) {
        resolve();
        return;
      }

      const existingScript = document.querySelector(
        'script[src="https://www.youtube.com/iframe_api"]'
      );

      if (!existingScript) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);
      }

      window.onYouTubeIframeAPIReady = () => resolve();
    });
  };

  // ─── CREATE PLAYER ────────────────────────────────────────────────
  const createPlayer = () => {
    playerRef.current = new window.YT.Player("yt-player", {
      videoId: "u_mf57XsXrU",
      playerVars: {
        autoplay: 1,
        controls: 1,
        rel: 0,
        modestbranding: 1,
      },
      events: {
        onReady: () => {
          setPlayerReady(true);
          playerRef.current.playVideo();
        },

        onStateChange: (e) => {
          const state = e.data;

          if (state === window.YT.PlayerState.PAUSED) {
            setShouldAutoPlay(false);
          }

          if (state === window.YT.PlayerState.PLAYING) {
            setShouldAutoPlay(true);
          }
        },
      },
    });
  };

  const handlePlay = async () => {
    setHasStarted(true);
    setShouldAutoPlay(true);

    await loadYouTubeAPI();
    createPlayer();
  };

  // ─── INTERSECTION CONTROL ─────────────────────────────────────────
  useEffect(() => {
    if (!playerReady || !containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!playerRef.current) return;

        if (entry.isIntersecting) {
          if (shouldAutoPlay) {
            playerRef.current.playVideo();
          }
        } else {
          playerRef.current.pauseVideo();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [playerReady, shouldAutoPlay]);

  // ─── MUTE ─────────────────────────────────────────────────────────
  const handleMuteToggle = () => {
    if (!playerRef.current) return;

    muted ? playerRef.current.unMute() : playerRef.current.mute();
    setMuted((m) => !m);
  };

  return (
    <section
      id="work"
      ref={containerRef}
      className="grid grid-cols-1 md:grid-cols-2 min-h-[62vh] mb-[8rem]"
    >
      {/* LEFT */}
      <div className="relative w-full h-full min-h-[40vh] md:min-h-full bg-black">

        {/* THUMBNAIL */}
        {!hasStarted && (
          <div
            className="absolute inset-0 z-10 cursor-pointer"
            onClick={handlePlay}
          >
            <img
              src="https://img.youtube.com/vi/u_mf57XsXrU/maxresdefault.jpg"
              alt="Studio video"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        )}

        {/* PLAYER */}
        <div className="absolute inset-0">
          <div id="yt-player" className="w-full h-full" />
        </div>

        {/* MUTE BUTTON */}
        {hasStarted && (
          <button
            onClick={handleMuteToggle}
            className="absolute bottom-4 right-4 z-20 bg-black/50 text-white rounded-full w-9 h-9 flex items-center justify-center"
          >
            {muted ? "🔇" : "🔊"}
          </button>
        )}
      </div>

      {/* RIGHT */}
      <div className="bg-cream px-10 md:px-20 py-16 md:py-24 flex flex-col justify-center">
        <SectionLabel>The Studio</SectionLabel>

        <SectionTitle className="mb-5">
          A place where<br />
          <em className="italic text-clay-dark">craft meets practice</em>
        </SectionTitle>

        <p className="text-[0.95rem] leading-[2] text-earth-light mb-4 max-w-[400px]">
          At The Cold Mountain Studio we strive to create an environment where one can nurture a relationship with clay as well as oneself.
        </p>

        <p className="text-[0.95rem] leading-[2] text-earth-light mb-5 max-w-[400px]">
          Our aim is that every piece from our studio would be like a prayer.
        </p>

        <button
          onClick={() =>
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
          }
          className="self-start text-base tracking-[0.13em] uppercase text-earth border-b border-black/15 pb-px hover:text-clay hover:border-clay"
        >
          Get in touch
        </button>
      </div>
    </section>
  );
}