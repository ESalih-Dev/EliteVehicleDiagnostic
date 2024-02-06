import { cn } from '@/lib/utils'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Info } from 'lucide-react'

interface Props {
  success: boolean
  message: string
}

export const ResponseAlert = ({ success, message }: Props) => (
  <Alert className={cn('text-slate-950', success ? 'bg-green-500' : 'bg-red-500')}>
    <Info className="mt-1 h-6 w-6 stroke-slate-950" />
    <AlertTitle className="text-xl">{success ? 'Success!' : 'Something went wrong!'}</AlertTitle>
    <AlertDescription className="font-bold">{message}</AlertDescription>
  </Alert>
)
