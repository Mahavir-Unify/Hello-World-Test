import { Sparkles } from 'lucide-react'

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"
      />
      <div className="relative flex flex-col items-center gap-6 text-center motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 motion-safe:duration-700">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
          Fresh start
        </span>
        <h1 className="font-heading text-6xl font-semibold leading-[1.05] tracking-[-0.03em] text-primary text-balance">
          Hello, world
        </h1>
        <p className="max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
          A clean, quiet starting point — thoughtfully set up and ready for whatever you build next.
        </p>
      </div>
    </main>
  )
}
