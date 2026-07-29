import { Hand } from 'lucide-react'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="flex flex-col items-center gap-5 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Hand className="h-7 w-7" aria-hidden="true" />
        </span>
        <h1 className="font-heading text-5xl font-semibold tracking-tight text-foreground text-balance">
          Hello, world
        </h1>
        <p className="max-w-sm text-base text-muted-foreground text-pretty">
          A clean starting point. This is your app — ready for whatever you build next.
        </p>
      </div>
    </main>
  )
}
