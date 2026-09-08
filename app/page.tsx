import { Lifeline } from "@/components/lifeline"
import {
  LifelineFooter,
  LifelineNav,
  LifelineShell,
  LifelineStage,
} from "@/components/lifeline-shell"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { processoLifeline } from "@/lib/lifeline-processo"

export default function Home() {
  return (
    <LifelineShell>
      {/* The nav's capped inner container is what the rail aligns its
          start and end to — see components/lifeline-shell.tsx. */}
      <LifelineNav
        logo={<span className="text-sm font-medium">Processo</span>}
        logoLabel="Processo — Pitang"
      >
        <a
          href="https://github.com/DaniloAmaralUX/processo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-zinc-500 transition-colors duration-300 hover:text-black dark:hover:text-white"
        >
          GitHub
        </a>
      </LifelineNav>

      <LifelineStage>
        <Lifeline
          markers={processoLifeline.markers}
          birthYear={processoLifeline.birthYear}
          title={processoLifeline.name}
          className="h-full"
        />
      </LifelineStage>

      <LifelineFooter>
        <ThemeSwitcher />
        <p className="truncate text-[13px] text-zinc-500">
          {processoLifeline.description}
        </p>
      </LifelineFooter>
    </LifelineShell>
  )
}
