"use client";

export default function BackgroundGlow() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-transparent">
      {/* Static Violet Glow */}
      <div
        className="
          absolute
          top-[10%]
          left-[15%]
          w-[40vw]
          h-[40vw]
          max-w-[800px]
          max-h-[800px]
          rounded-full
          bg-violet-600/10
          blur-3xl
          opacity-50
        "
      />

      {/* Static Blue Glow */}
      <div
        className="
          absolute
          bottom-[10%]
          right-[10%]
          w-[50vw]
          h-[50vw]
          max-w-[900px]
          max-h-[900px]
          rounded-full
          bg-blue-600/10
          blur-3xl
          opacity-40
        "
      />

      {/* Static Indigo Glow */}
      <div
        className="
          absolute
          top-[40%]
          left-[40%]
          w-[35vw]
          h-[35vw]
          max-w-[700px]
          max-h-[700px]
          rounded-full
          bg-indigo-600/10
          blur-[150px]
          opacity-40
          mix-blend-screen
        "
      />

      {/* Noise Overlay */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.015]
          bg-[url('https://grainy-gradients.vercel.app/noise.svg')]
          mix-blend-overlay
        "
      />
    </div>
  );
}