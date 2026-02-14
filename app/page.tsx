import DarkVeil from "./components/DarkVeil";
import TerminalStatus from "./components/TerminalStatus";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background">
      {/* Dark Veil background */}
      <div className="absolute inset-0">
        <DarkVeil speed={0.5} noiseIntensity={0.02} hueShift={35} resolutionScale={1.1} />
      </div>

      {/* Radial vignette — darkens center for text readability */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,var(--background)_0%,transparent_70%)] opacity-70" />

      {/* Edge vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--background)_85%)]" />

      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center px-6 text-center [text-shadow:0_0_20px_var(--background),0_0_40px_var(--background)]">
        {/* Name */}
        <h1 className="reveal-down delay-200 font-sans text-5xl sm:text-7xl font-semibold tracking-tight text-foreground">
          Merlin Govier
        </h1>

        {/* Divider */}
        <div className="line-extend delay-500 mt-6 mb-6 h-px w-48 bg-gradient-to-r from-transparent via-cyan to-transparent" />

        {/* Title */}
        <p className="reveal-up delay-400 font-mono text-sm sm:text-base tracking-[0.2em] uppercase text-cyan-dim">
          Full-Stack Engineer
        </p>

        {/* Tagline */}
        <p className="reveal-up delay-500 mt-6 max-w-md text-base sm:text-lg leading-relaxed text-foreground/60">
          Building effective, scalable systems across the stack.
        </p>

        {/* Links */}
        <nav className="reveal-up delay-700 mt-12 flex items-center gap-8 font-mono text-sm tracking-wide text-foreground/50">
          <a
            href="https://github.com/mgovier"
            target="_blank"
            rel="noopener noreferrer"
            className="link-glow"
          >
            GitHub
          </a>
          <span className="text-cyan/20">&#x2f;&#x2f;</span>
          <a
            href="https://linkedin.com/in/merlingovier"
            target="_blank"
            rel="noopener noreferrer"
            className="link-glow"
          >
            LinkedIn
          </a>
          <span className="text-cyan/20">&#x2f;&#x2f;</span>
          <a
            href="mailto:merlin@govie.rs"
            className="link-glow"
          >
            Email
          </a>
        </nav>

        {/* Terminal status */}
        <div className="reveal-up delay-800 mt-12 flex flex-col items-center gap-1 font-mono text-xs tracking-wide text-cyan-dim">
          <span className="text-foreground/30">currently:</span>
          <div className="h-5">
            <TerminalStatus />
          </div>
        </div>
      </main>

      {/* Bottom signature */}
      <footer className="reveal-up delay-1000 absolute bottom-6 font-mono text-[10px] tracking-[0.3em] uppercase text-foreground/20">
        &copy; {new Date().getFullYear()} &mdash; Merlin Govier
      </footer>
    </div>
  );
}
