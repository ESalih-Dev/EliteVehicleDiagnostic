import { MapPin } from 'lucide-react'

export const ToolbarMaps = () => (
  <div className="flex flex-row w-auto sm:w-[180px] cursor-pointer py-3 items-center justify-center">
    <MapPin className="h-8 w-8 sm:mr-3" />
    <span
      className="font-bold hidden sm:block"
      onClick={() => {
        window.scrollTo(0, document.body.scrollHeight)
      }}>
      Find us on Maps!
    </span>
  </div>
)
