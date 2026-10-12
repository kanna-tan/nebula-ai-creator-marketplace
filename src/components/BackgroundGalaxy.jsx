import React, { useEffect, useRef } from 'react';

export default function BackgroundGalaxy({ colorGrade = 'champagne' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Multi-spectral stars tailored to the cream & galaxy color grading
    const starsCount = Math.floor((width * height) / 8500);
    const stars = [];

    const spectralPalettes = {
      champagne: [
        'rgba(255, 253, 249, ', // Pure warm pearl
        'rgba(250, 245, 234, ', // Soft champagne
        'rgba(243, 234, 216, ', // Starlight oat
        'rgba(212, 188, 146, ', // Liquid gold
        'rgba(235, 205, 160, ', // Warm stardust amber
        'rgba(195, 175, 235, '  // Celestial amethyst reflection
      ],
      amethyst: [
        'rgba(255, 253, 249, ',
        'rgba(224, 208, 245, ',
        'rgba(196, 165, 235, ',
        'rgba(245, 230, 210, ',
        'rgba(168, 130, 220, '
      ],
      aurora: [
        'rgba(255, 253, 249, ',
        'rgba(215, 245, 235, ',
        'rgba(165, 230, 210, ',
        'rgba(245, 235, 215, ',
        'rgba(180, 220, 195, '
      ]
    };

    const currentPalette = spectralPalettes[colorGrade] || spectralPalettes.champagne;

    for (let i = 0; i < starsCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.4 + 0.35,
        baseColor: currentPalette[Math.floor(Math.random() * currentPalette.length)],
        alpha: Math.random() * 0.75 + 0.25,
        twinkleSpeed: Math.random() * 0.015 + 0.005,
        twinkleDir: Math.random() > 0.5 ? 1 : -1
      });
    }

    // Shooting stars array
    const shootingStars = [];
    const spawnShootingStar = () => {
      shootingStars.push({
        x: Math.random() * width * 0.8,
        y: Math.random() * (height * 0.4),
        length: Math.random() * 80 + 70,
        speed: Math.random() * 12 + 10,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2, // ~45 degrees downward
        opacity: 1,
        fadeSpeed: 0.02
      });
    };

    let shootingStarTimer = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render twinkling stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.alpha += star.twinkleSpeed * star.twinkleDir;
        if (star.alpha > 0.95) {
          star.alpha = 0.95;
          star.twinkleDir = -1;
        } else if (star.alpha < 0.15) {
          star.alpha = 0.15;
          star.twinkleDir = 1;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${star.baseColor}${star.alpha})`;
        ctx.fill();

        // Extra glowing halo for prominent stars
        if (star.radius > 1.2 && star.alpha > 0.7) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 2.8, 0, Math.PI * 2);
          ctx.fillStyle = `${star.baseColor}${star.alpha * 0.18})`;
          ctx.fill();
        }
      }

      // Handle shooting stars
      shootingStarTimer++;
      if (shootingStarTimer % 180 === 0 && Math.random() > 0.3) {
        spawnShootingStar();
      }

      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.opacity -= s.fadeSpeed;

        if (s.opacity <= 0 || s.x > width || s.y > height) {
          shootingStars.splice(i, 1);
          continue;
        }

        const tailX = s.x - Math.cos(s.angle) * s.length;
        const tailY = s.y - Math.sin(s.angle) * s.length;

        const grad = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
        grad.addColorStop(0, 'rgba(255, 253, 249, 0)');
        grad.addColorStop(0.7, `rgba(243, 234, 216, ${s.opacity * 0.5})`);
        grad.addColorStop(1, `rgba(255, 255, 255, ${s.opacity})`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(s.x, s.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.8;
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [colorGrade]);

  // Color grade specific nebula styles
  const nebulaConfigs = {
    champagne: {
      n1: 'radial-gradient(circle, rgba(255, 248, 232, 0.28) 0%, rgba(212, 188, 146, 0.16) 40%, rgba(135, 95, 190, 0.12) 70%, transparent 85%)',
      n2: 'radial-gradient(circle, rgba(243, 234, 216, 0.24) 0%, rgba(160, 110, 210, 0.16) 50%, rgba(85, 45, 140, 0.12) 75%, transparent 85%)',
      n3: 'radial-gradient(circle, rgba(235, 205, 160, 0.22) 0%, rgba(120, 80, 170, 0.14) 50%, transparent 80%)'
    },
    amethyst: {
      n1: 'radial-gradient(circle, rgba(220, 195, 255, 0.3) 0%, rgba(165, 115, 235, 0.2) 45%, rgba(243, 234, 216, 0.1) 70%, transparent 85%)',
      n2: 'radial-gradient(circle, rgba(175, 125, 240, 0.25) 0%, rgba(110, 60, 180, 0.18) 55%, transparent 85%)',
      n3: 'radial-gradient(circle, rgba(240, 215, 245, 0.22) 0%, rgba(140, 90, 200, 0.15) 50%, transparent 80%)'
    },
    aurora: {
      n1: 'radial-gradient(circle, rgba(210, 250, 240, 0.26) 0%, rgba(130, 220, 195, 0.18) 45%, rgba(243, 234, 216, 0.12) 70%, transparent 85%)',
      n2: 'radial-gradient(circle, rgba(140, 225, 200, 0.22) 0%, rgba(80, 170, 150, 0.16) 55%, transparent 85%)',
      n3: 'radial-gradient(circle, rgba(235, 245, 220, 0.2) 0%, rgba(100, 190, 165, 0.14) 50%, transparent 80%)'
    }
  };

  const activeNebula = nebulaConfigs[colorGrade] || nebulaConfigs.champagne;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep Obsidian Velvet Base */}
      <div className="absolute inset-0 bg-[#06050a]" />

      {/* Layer 1: Ambient Cosmic Midnight Indigo Canvas */}
      <div 
        className="absolute inset-0 opacity-80"
        style={{
          background: 'radial-gradient(ellipse 90% 80% at 50% -20%, rgba(25, 18, 45, 0.7) 0%, rgba(6, 5, 10, 0.95) 70%)'
        }}
      />

      {/* Nebula 1: Top-Left Luminous Cream Stardust Aura */}
      <div 
        className="absolute -top-[15%] -left-[10%] w-[65vw] h-[65vw] rounded-full blur-[140px] pointer-events-none animate-nebula transition-all duration-1000"
        style={{
          background: activeNebula.n1
        }}
      />
      
      {/* Nebula 2: Center-Right Celestial Amethyst & Champagne Glow */}
      <div 
        className="absolute top-[28%] -right-[15%] w-[60vw] h-[60vw] rounded-full blur-[160px] pointer-events-none animate-nebula transition-all duration-1000"
        style={{
          background: activeNebula.n2,
          animationDelay: '-4s'
        }}
      />

      {/* Nebula 3: Bottom-Left Warm Stardust Dust Cloud */}
      <div 
        className="absolute bottom-[-12%] left-[15%] w-[55vw] h-[55vw] rounded-full blur-[150px] pointer-events-none animate-nebula transition-all duration-1000"
        style={{
          background: activeNebula.n3,
          animationDelay: '-8s'
        }}
      />

      {/* Dynamic Stardust Canvas with Twinkle & Shooting Stars */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-80" />

      {/* Cinematic Vignette Overlay for Depth & High Contrast */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle 800px at center, transparent 40%, rgba(6, 5, 10, 0.5) 85%, rgba(6, 5, 10, 0.85) 100%)'
        }}
      />

      {/* Ultra-subtle Micro Starlight Grid */}
      <div 
        className="absolute inset-0 opacity-[0.035] mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 253, 249, 0.9) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />
    </div>
  );
}
