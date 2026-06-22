import { useEffect, useRef } from 'react';

const MeshGradient = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const targetRef = useRef({ x: 0.5, y: 0.5 });
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const container = canvas.parentElement;
    const PIXEL_SIZE = 6; // lower = more pixelated

    const resize = () => {
      canvas.width = Math.floor(container.offsetWidth / PIXEL_SIZE);
      canvas.height = Math.floor(container.offsetHeight / PIXEL_SIZE);
    };
    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      targetRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      };
    };
    container.addEventListener('mousemove', onMouseMove);

    const draw = () => {
      mouseRef.current.x += (targetRef.current.x - mouseRef.current.x) * 0.04;
      mouseRef.current.y += (targetRef.current.y - mouseRef.current.y) * 0.04;

      const { width, height } = canvas;
      const mx = mouseRef.current.x;

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = '#040404';
      ctx.fillRect(0, 0, width, height);

      ctx.save();
      ctx.translate(width / 2, height / 2);
      ctx.rotate(-42 * Math.PI / 180);

      const bw = width * 2;
      const bh = height * 2.5;

      const o1 = (mx - 0.5) * width * 0.7;
      const g1 = ctx.createLinearGradient(-bw / 2 + o1, 0, bw / 2 + o1, 0);
      g1.addColorStop(0,    'rgba(4,4,4,1)');
      g1.addColorStop(0.30, 'rgba(37,0,255,0)');
      g1.addColorStop(0.50, 'rgba(37,0,255,0.95)');
      g1.addColorStop(0.65, 'rgba(37,0,255,0)');
      g1.addColorStop(1,    'rgba(4,4,4,1)');
      ctx.globalAlpha = 1;
      ctx.fillStyle = g1;
      ctx.fillRect(-bw / 2 + o1, -bh / 2, bw, bh);

      const o2 = (0.5 - mx) * width * 0.5;
      const g2 = ctx.createLinearGradient(-bw / 2 + o2, 0, bw / 2 + o2, 0);
      g2.addColorStop(0,    'rgba(4,4,4,1)');
      g2.addColorStop(0.20, 'rgba(26,0,255,0)');
      g2.addColorStop(0.42, 'rgba(26,0,255,0.85)');
      g2.addColorStop(0.58, 'rgba(26,0,255,0)');
      g2.addColorStop(1,    'rgba(4,4,4,1)');
      ctx.globalAlpha = 0.85;
      ctx.fillStyle = g2;
      ctx.fillRect(-bw / 2 + o2, -bh / 2, bw, bh);

      const o3 = (mx - 0.5) * width * 1.0;
      const g3 = ctx.createLinearGradient(-bw / 2 + o3, 0, bw / 2 + o3, 0);
      g3.addColorStop(0,    'rgba(4,4,4,1)');
      g3.addColorStop(0.55, 'rgba(32,0,255,0)');
      g3.addColorStop(0.72, 'rgba(32,0,255,0.65)');
      g3.addColorStop(0.85, 'rgba(32,0,255,0)');
      g3.addColorStop(1,    'rgba(4,4,4,1)');
      ctx.globalAlpha = 0.6;
      ctx.fillStyle = g3;
      ctx.fillRect(-bw / 2 + o3, -bh / 2, bw, bh);

      ctx.globalAlpha = 1;
      ctx.restore();

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
      container.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div className="mesh-gradient-bg" aria-hidden="true">
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block', imageRendering: 'pixelated' }} />
      <div className="mesh-grain" />
    </div>
  );
};

export default MeshGradient;
