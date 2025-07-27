import React, { useRef, useEffect } from "react";

const PixelShatter = ({ src, width = 800, height = 400, trigger }) => {
  const canvasRef = useRef();

  useEffect(() => {
    if (!trigger) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new window.Image();
    img.src = src;
    img.onload = () => {
      ctx.drawImage(img, 0, 0, width, height);
      const imageData = ctx.getImageData(0, 0, width, height);
      const pixels = [];
      const size = 8; // pixel block size

      // Create pixel blocks
      for (let y = 0; y < height; y += size) {
        for (let x = 0; x < width; x += size) {
          const i = (y * width + x) * 4;
          const color = `rgba(${imageData.data[i]},${imageData.data[i+1]},${imageData.data[i+2]},${imageData.data[i+3]/255})`;
          pixels.push({ x, y, color, dx: (Math.random() - 0.5) * 10, dy: Math.random() * 10 + 2 });
        }
      }

      // Animate
      let frame = 0;
      function animate() {
        ctx.clearRect(0, 0, width, height);
        for (let p of pixels) {
          ctx.fillStyle = p.color;
          ctx.fillRect(p.x + p.dx * frame, p.y + p.dy * frame, size, size);
        }
        frame += 0.5;
        if (frame < 30) requestAnimationFrame(animate);
      }
      animate();
    };
  }, [src, width, height, trigger]);

  return <canvas ref={canvasRef} width={width} height={height} style={{ width: "100%", height: "auto", display: "block" }} />;
};

export default PixelShatter;