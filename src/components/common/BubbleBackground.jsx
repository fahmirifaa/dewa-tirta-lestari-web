import { useEffect, useRef } from "react";

/**
 * BubbleBackground
 * Reactbits "Particles"-style animated background, re-themed as floating
 * water bubbles for a water supplier site. Pure <canvas> + requestAnimationFrame,
 * no extra dependencies (no ogl/three needed), so it stays lightweight.
 *
 * Props:
 * - count: jumlah gelembung (default 45)
 * - color: warna gelembung, format "r,g,b" (default putih kebiruan)
 * - className: kelas tambahan untuk positioning wrapper
 */
function BubbleBackground({ count = 45, color = "255,255,255", className = "" }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");

        let width, height, dpr;
        let bubbles = [];
        let animationId;
        let running = true;

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        function createBubble(randomY = true) {
            const radius = 2 + Math.random() * 7;
            return {
                x: Math.random() * width,
                y: randomY ? Math.random() * height : height + radius + 10,
                radius,
                baseRadius: radius,
                speed: 0.25 + Math.random() * 0.7,
                drift: (Math.random() - 0.5) * 0.5,
                driftPhase: Math.random() * Math.PI * 2,
                driftSpeed: 0.005 + Math.random() * 0.01,
                opacity: 0.15 + Math.random() * 0.35,
            };
        }

        function resize() {
            dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = canvas.clientWidth;
            height = canvas.clientHeight;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }

        function init() {
            resize();
            bubbles = Array.from({ length: count }, () => createBubble(true));
        }

        function draw() {
            ctx.clearRect(0, 0, width, height);
            for (const b of bubbles) {
                b.driftPhase += b.driftSpeed;
                b.y -= b.speed;
                b.x += Math.sin(b.driftPhase) * b.drift;

                if (b.y + b.radius < 0) {
                    Object.assign(b, createBubble(false));
                }

                ctx.beginPath();
                ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(${color},${b.opacity})`;
                ctx.lineWidth = 1;
                ctx.stroke();
                ctx.fillStyle = `rgba(${color},${b.opacity * 0.18})`;
                ctx.fill();

                // small highlight for a glossy bubble look
                ctx.beginPath();
                ctx.arc(
                    b.x - b.radius * 0.35,
                    b.y - b.radius * 0.35,
                    b.radius * 0.25,
                    0,
                    Math.PI * 2
                );
                ctx.fillStyle = `rgba(${color},${b.opacity * 0.8})`;
                ctx.fill();
            }
            if (running) animationId = requestAnimationFrame(draw);
        }

        init();

        if (prefersReducedMotion) {
            draw();
        } else {
            draw();
        }

        const handleResize = () => {
            resize();
        };
        window.addEventListener("resize", handleResize);

        return () => {
            running = false;
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", handleResize);
        };
    }, [count, color]);

    return (
        <canvas
            ref={canvasRef}
            className={`pointer-events-none absolute inset-0 w-full h-full ${className}`}
            aria-hidden="true"
        />
    );
}

export default BubbleBackground;
