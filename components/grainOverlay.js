const GrainOverlay = () => {
  const seeds = Array.from({ length: 10 }, (_, i) => i * 7).join(';');

  return (
    <svg
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9998,
        opacity: 0.28,
        mixBlendMode: 'screen',
      }}
      aria-hidden="true"
    >
      <filter id="crt-grain-noise" x="0%" y="0%" width="100%" height="100%" colorInterpolationFilters="sRGB">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.65"
          numOctaves="3"
          stitchTiles="stitch"
        >
          <animate
            attributeName="seed"
            values={seeds}
            dur="0.2s"
            calcMode="discrete"
            repeatCount="indefinite"
          />
        </feTurbulence>
        <feColorMatrix type="saturate" values="0" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="1.8" />
        </feComponentTransfer>
      </filter>
      <rect width="100%" height="100%" filter="url(#crt-grain-noise)" />
    </svg>
  );
};

export default GrainOverlay;
