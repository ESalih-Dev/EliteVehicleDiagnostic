import { useRef } from 'react'
import { cn } from '@/lib/utils'
import { CheckCircle2 } from 'lucide-react'
import { useIntersectionObserver } from '@/lib/useIntersectionObserver'

export const InformationCard = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, {})
  const isVisible = !!entry?.isIntersecting

  return (
    <div
      ref={ref}
      className={cn(
        'flex flex-col py-10 px-6 items-center border-2 bg-gradient-to-tr from-purple-950 to-slate-900 border-slate-700 w-full rounded-3xl space-y-4 transition-all duration-1000',
        isVisible ? 'opacity-100' : 'opacity-0 translate-y-20'
      )}>
      <span className="text-4xl md:text-5xl font-semibold mb-8 text-slate-100">
        How we can help
      </span>
      <ul className="text-xl md:text-2xl space-y-8 font-semibold">
        <li className="flex flex-row items-center">
          <CheckCircle2 className="min-h-7 min-w-7 mr-4 stroke-green-700" />
          Diagnostics: We use dealer grade diagnostic hardware so we don't waste our time or yours.
        </li>
        <li className="flex flex-row items-center">
          <CheckCircle2 className="min-h-7 min-w-7 mr-4 stroke-green-700" />
          Mechanical: Strange noises or a check engine light? We can fix it.
        </li>
        <li className="flex flex-row items-center">
          <CheckCircle2 className="min-h-7 min-w-7 mr-4 stroke-green-700" />
          Replacement parts: Be it a regular oil change, squeaky brakes or a slipping clutch.
        </li>
      </ul>
    </div>
  )
}
