"use client";

import { useEffect, useRef } from "react";

export default function ShaderHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl");
    if (!gl) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.clientWidth * window.devicePixelRatio;
      canvas.height = canvas.clientHeight * window.devicePixelRatio;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const vertexShaderSource = `
      attribute vec4 position;
      void main() {
        gl_Position = position;
      }
    `;

    const fragmentShaderSource = `
      precision mediump float;
      uniform float time;
      uniform vec2 resolution;

      void main() {
        vec2 uv = gl_FragCoord.xy / resolution.xy;
        
        float x = uv.x;
        float y = uv.y;
        
        // Create flowing patterns
        float flow1 = sin(x * 3.0 + time * 0.3) * cos(y * 2.0 + time * 0.2);
        float flow2 = sin(y * 3.5 + time * 0.25) * cos(x * 2.5 + time * 0.15);
        float flow3 = sin((x + y) * 2.0 + time * 0.2) * cos((x - y) * 1.5 + time * 0.3);
        
        // Combine flows
        float pattern = flow1 + flow2 + flow3;
        
        // Create smooth gradients
        vec3 color1 = vec3(0.95, 0.85, 0.95); // Light rose
        vec3 color2 = vec3(0.85, 0.95, 1.0); // Light cyan-blue
        vec3 color3 = vec3(1.0, 0.95, 0.85); // Light gold
        
        // Blend colors based on pattern
        vec3 finalColor = mix(color1, color2, smoothstep(-1.0, 1.0, flow1));
        finalColor = mix(finalColor, color3, smoothstep(-1.0, 1.0, flow2));
        
        // Add soft glow
        float glow = sin(pattern + time * 0.1) * 0.1 + 0.9;
        finalColor *= glow;
        
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    // Compile shaders
    const compileShader = (source: string, type: number) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader compilation error:", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = compileShader(vertexShaderSource, gl.VERTEX_SHADER);
    const fragmentShader = compileShader(
      fragmentShaderSource,
      gl.FRAGMENT_SHADER,
    );

    if (!vertexShader || !fragmentShader) return;

    // Create program
    const program = gl.createProgram();
    if (!program) return;

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program linking error:", gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    // Create buffer
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    const positions = [-1, -1, 1, -1, -1, 1, 1, 1];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    const positionAttributeLocation = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(positionAttributeLocation);
    gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

    // Get uniform locations
    const timeUniformLocation = gl.getUniformLocation(program, "time");
    const resolutionUniformLocation = gl.getUniformLocation(
      program,
      "resolution",
    );

    // Render loop
    let animationId: number;
    let startTime = Date.now();

    const render = () => {
      const currentTime = (Date.now() - startTime) / 1000;
      gl.uniform1f(timeUniformLocation, currentTime);
      gl.uniform2f(resolutionUniformLocation, canvas.width, canvas.height);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      gl.deleteBuffer(positionBuffer);
    };
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/60" />

      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
          Timeless <span className="text-primary">Beauty</span>
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
          Discover the essence of K-beauty. Premium skincare from Korea's finest
          brands, curated for your radiant skin.
        </p>
        <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors">
          Explore Our Collection
        </button>
      </div>
    </div>
  );
}
