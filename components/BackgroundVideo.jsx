"use client";

import { useEffect, useState } from "react";

export default function BackgroundVideo({
  webmSrc,
  mp4Src,
  posterSrc,
  overlayGradient,
  className = "",
  videoClassName = "",
  posterClassName = ""
}) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleChange = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {prefersReducedMotion ? (
        <img
          src={posterSrc}
          alt=""
          className={`h-full w-full object-cover ${posterClassName}`}
          draggable="false"
        />
      ) : (
        <video
          className={`h-full w-full object-cover ${videoClassName}`}
          poster={posterSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          tabIndex={-1}
        >
          {webmSrc && <source src={webmSrc} type="video/webm" />}
          {mp4Src && <source src={mp4Src} type="video/mp4" />}
        </video>
      )}

      {overlayGradient && (
        <div className={`absolute inset-0 ${overlayGradient}`} />
      )}
    </div>
  );
}
