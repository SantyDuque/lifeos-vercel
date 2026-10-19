import {
  Activity,
  CalendarDays,
  GraduationCap,
  LayoutGrid,
  NotebookPen,
  Orbit,
  Settings,
  Sun,
  Target,
  Wallet,
} from 'lucide-react'
import { cn } from '@/lib/utils'

export function LifeOSMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" fill="none">
      <circle cx="16" cy="16" r="6" fill="currentColor" />
      <ellipse cx="16" cy="16" rx="13" ry="5.5" transform="rotate(-24 16 16)" stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.3" />
      <circle cx="27.4" cy="11" r="1.6" fill="#F1F5F9" />
    </svg>
  )
}

const NAV = [
  { label: 'Today', icon: Sun, active: true },
  { label: 'Planner', icon: CalendarDays },
  { label: 'Habits', icon: Orbit },
  { label: 'Goals', icon: Target },
  { label: 'Study', icon: GraduationCap },
  { label: 'Fitness', icon: Activity },
  { label: 'Finances', icon: Wallet },
  { label: 'Journal', icon: NotebookPen },
]

export function AppRail() {
  return (
    <aside className="fixed bottom-4 left-4 top-4 z-30 hidden w-[72px] flex-col items-center rounded-[28px] bg-[#0F1A26]/80 py-5 shadow-[inset_0_0_0_1px_var(--hairline),0_24px_48px_-24px_rgba(0,0,0,0.6)] backdrop-blur-xl lg:flex">
      <a
        href="#main"
        className="grid size-11 shrink-0 place-items-center rounded-2xl text-primary transition-colors hover:bg-primary/[0.08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        aria-label="LifeOS home"
      >
        <LifeOSMark className="size-7" />
      </a>
      <span aria-hidden className="mt-4 h-px w-8 shrink-0 bg-hairline" />
      <nav aria-label="Primary" className="mt-4 flex min-h-0 flex-1 flex-col items-center gap-1.5">
        {NAV.map(({ label, icon: Icon, active }) => (
          <RailLink key={label} label={label} active={active}>
            <Icon className="size-[19px]" strokeWidth={1.6} aria-hidden />
          </RailLink>
        ))}
      </nav>
      <div className="flex shrink-0 flex-col items-center gap-3">
        <span aria-hidden className="mb-1 h-px w-8 bg-hairline" />
        <RailLink label="Settings">
          <Settings className="size-[19px]" strokeWidth={1.6} aria-hidden />
        </RailLink>
        <a
          href="#"
          aria-label="Account"
          className="group relative rounded-full transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <Avatar />
          <RailTooltip label="Account" />
        </a>
      </div>
    </aside>
  )
}

function RailLink({ label, active, children }: { label: string; active?: boolean; children: React.ReactNode }) {
  return (
    <a
      href="#"
      aria-label={label}
      aria-current={active ? 'page' : undefined}
      className={cn(
        'group relative grid size-11 place-items-center rounded-2xl transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
        active
          ? 'bg-primary/[0.12] text-primary shadow-[inset_0_0_0_1px_rgba(70,199,183,0.22)]'
          : 'text-subtle hover:bg-foreground/[0.05] hover:text-foreground',
      )}
    >
      {active && <span aria-hidden className="absolute -left-[14px] h-5 w-[3px] rounded-r-full bg-primary" />}
      {children}
      <RailTooltip label={label} />
    </a>
  )
}

function RailTooltip({ label }: { label: string }) {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute left-[calc(100%+18px)] top-1/2 -translate-x-1 -translate-y-1/2 whitespace-nowrap rounded-lg bg-popover px-2.5 py-1 text-xs text-foreground opacity-0 shadow-[inset_0_0_0_1px_var(--hairline),0_8px_20px_-8px_rgba(0,0,0,0.6)] transition-[opacity,transform] duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
    >
      {label}
    </span>
  )
}

function Avatar({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'grid size-9 place-items-center rounded-full bg-gradient-to-br from-[#2A4256] to-[#1A2B3A] font-serif text-[15px] text-foreground shadow-[inset_0_0_0_1px_rgba(148,168,188,0.2)]',
        className,
      )}
      aria-label="Santiago"
      role="img"
    >
      S
    </span>
  )
}

export function MobileTopBar() {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between border-b border-hairline bg-background/70 px-5 py-3.5 backdrop-blur-xl lg:hidden">
      <a href="#main" className="flex items-center gap-2.5 text-primary">
        <LifeOSMark className="size-6" />
        <span className="text-[15px] font-medium tracking-tight text-foreground">LifeOS</span>
      </a>
      <Avatar className="size-8 text-sm" />
    </header>
  )
}

const TABS = [
  { label: 'Today', icon: Sun, active: true },
  { label: 'Plan', icon: CalendarDays },
  { label: 'Habits', icon: Orbit },
  { label: 'Journal', icon: NotebookPen },
  { label: 'More', icon: LayoutGrid },
]

export function MobileTabBar() {
  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-30 border-t border-hairline bg-background/85 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl lg:hidden"
    >
      <ul className="mx-auto grid max-w-md grid-cols-5">
        {TABS.map(({ label, icon: Icon, active }) => (
          <li key={label}>
            <a
              href="#"
              aria-current={active ? 'page' : undefined}
              className={cn(
                'flex flex-col items-center gap-1 py-2.5 text-[11px] transition-colors',
                active ? 'text-primary' : 'text-subtle hover:text-foreground',
              )}
            >
              <Icon className="size-5" strokeWidth={1.6} aria-hidden />
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function Atmosphere() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[720px] overflow-hidden [mask-image:linear-gradient(to_bottom,black_45%,transparent)]">
      <div className="starfield absolute inset-0 opacity-70" />
      <div className="absolute -right-[260px] -top-[340px] size-[820px] rounded-full border border-foreground/[0.06] lg:-right-[120px]">
        <div className="orbit-spin absolute inset-0">
          <span className="absolute left-1/2 top-full size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_14px_3px_rgba(70,199,183,0.45)]" />
        </div>
      </div>
      <div className="absolute -right-[120px] -top-[200px] size-[540px] rounded-full border border-foreground/[0.04] lg:right-[20px]" />
      <div className="absolute right-[6%] top-[-14%] size-[460px] rounded-full bg-primary/[0.07] blur-[120px]" />
    </div>
  )
}
