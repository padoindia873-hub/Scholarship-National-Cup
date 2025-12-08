import React from "react";

export default function FlyingFlag({
  src = "https://wallpapercave.com/wp/wp9678253.jpg",
  alt = "flag",
  width = 400,
  height = 260,
  speed = 1,
  amplitude = 20,
}) {
  const viewBox = `0 0 ${width} ${height}`;
  const baseFrequencyX = 0.002 * speed;
  const baseFrequencyY = 0.0;

  return (
    <div className="inline-block" style={{ width, height }}>
      <svg
        width={width}
        height={height}
        viewBox={viewBox}
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        className="block"
      >
        <defs>
          <filter id="flag-wave" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency={`${baseFrequencyX} ${baseFrequencyY}`}
              numOctaves="2"
              seed="2"
              stitchTiles="stitch"
              result="noise"
            >
              <animate
                attributeName="baseFrequency"
                dur={`${6 / speed}s`}
                values={`${baseFrequencyX} ${baseFrequencyY}; ${
                  baseFrequencyX * 1.5
                } ${baseFrequencyY}; ${baseFrequencyX} ${baseFrequencyY}`}
                repeatCount="indefinite"
              />
            </feTurbulence>

            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale={amplitude}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>

          <linearGradient id="fade" x1="0" x2="1">
            <stop offset="0" stopOpacity="0.06" />
            <stop offset="0.08" stopOpacity="0.02" />
            <stop offset="0.92" stopOpacity="0.02" />
            <stop offset="1" stopOpacity="0.06" />
          </linearGradient>
        </defs>

        <g filter="url(#flag-wave)">
          <image
            href={src}
            x="0"
            y="0"
            width={width}
            height={height}
            preserveAspectRatio="xMidYMid slice"
            alt={alt}
          />
        </g>

        <rect
          x="0"
          y="0"
          width={width}
          height={height}
          fill="url(#fade)"
          style={{ mixBlendMode: "soft-light" }}
        />

        <rect
          x={-width * 0.02}
          y={height * 0.02}
          width={width * 0.02}
          height={height * 0.96}
          rx="2"
          fill="#333"
        />
      </svg>
    </div>
  );
}
