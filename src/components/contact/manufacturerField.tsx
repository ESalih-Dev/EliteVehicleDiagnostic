import { useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'
import { Check, ChevronsUpDown } from 'lucide-react'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem
} from '@/components/ui/command'
import { useMediaQuery } from '@/lib/useMediaQuery'
import { cn } from '@/lib/utils'

export const MANUFACTURERS = [
  'Abarth',
  'Alfa Romeo',
  'Aston Martin',
  'Audi',
  'Bentley',
  'BMW',
  'Bugatti',
  'Cadillac',
  'Chevrolet',
  'Chrysler',
  'Citroen',
  'Dacia',
  'Daewoo',
  'Daihatsu',
  'Dodge',
  'Donkervoort',
  'DS',
  'Ferrari',
  'Fiat',
  'Fisker',
  'Ford',
  'Honda',
  'Hummer',
  'Hyundai',
  'Infiniti',
  'Iveco',
  'Jaguar',
  'Jeep',
  'Kia',
  'KTM',
  'Lada',
  'Lamborghini',
  'Lancia',
  'Land Rover',
  'Landwind',
  'Lexus',
  'Lotus',
  'Maserati',
  'Maybach',
  'Mazda',
  'McLaren',
  'Mercedes-Benz',
  'MG',
  'Mini',
  'Mitsubishi',
  'Morgan',
  'Nissan',
  'Opel',
  'Other',
  'Peugeot',
  'Porsche',
  'Renault',
  'Rolls-Royce',
  'Rover',
  'Saab',
  'Seat',
  'Skoda',
  'Smart',
  'SsangYong',
  'Subaru',
  'Suzuki',
  'Tesla',
  'Toyota',
  'Volkswagen',
  'Volvo'
] as const

export const ManufacturerField = () => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState<string>()
  // Tailwind - md screen size
  const isDesktop = useMediaQuery('(min-width: 768px)')

  const Opener = isDesktop ? Popover : Drawer
  const Trigger = isDesktop ? PopoverTrigger : DrawerTrigger
  const Content = isDesktop ? PopoverContent : DrawerContent

  return (
    <>
      <input hidden name="make" value={value} />
      <Opener open={open} onOpenChange={setOpen}>
        <Trigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="justify-between">
            {value || 'Select manufacturer'}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </Trigger>
        <Content className="p-0 max-h-[40vh] overflow-y-scroll">
          <Command>
            <CommandInput placeholder="Search..." />
            <CommandEmpty>Manufacturer not found, try "Other"</CommandEmpty>
            <CommandGroup className="min-h-[300px]">
              {MANUFACTURERS.map(manufacturer => (
                <CommandItem
                  key={manufacturer}
                  value={manufacturer}
                  onSelect={() => {
                    setValue(manufacturer)
                    setOpen(false)
                  }}>
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === manufacturer ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                  {manufacturer}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </Content>
      </Opener>
    </>
  )
}
