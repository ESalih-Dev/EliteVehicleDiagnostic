import { useState, type FormEvent, useEffect, useRef } from 'react'
import { ManufacturerField } from '@/components/contact/manufacturerField'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { ResponseAlert } from '@/components/contact/responseAlert'

export const ContactForm = () => {
  const descRef = useRef<HTMLTextAreaElement>(null)
  const [descLength, setDescLength] = useState(0)
  const [response, setResponse] = useState<{ success: boolean; message: string }>()

  useEffect(() => {
    if (descRef.current) {
      descRef.current.style.height = '0'
      descRef.current.style.height = `${2 + descRef.current.scrollHeight}px`
    }
  })

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: formData
    })
    const data = await response.json()
    setResponse({ success: response.status === 200, message: data.message })
  }

  return (
    <div className="flex flex-col max-w-[600px] w-full self-center my-8 md:mt-16 px-6 space-y-12">
      <form
        method="POST"
        encType="application/x-www-form-urlencoded"
        onSubmit={submit}
        className="flex flex-col space-y-6 md:space-y-8 text-xl">
        <div className="flex flex-col sm:flex-row sm:items-center whitespace-nowrap">
          <label className="mb-2 sm:mr-4 sm:mb-0">Full name</label>
          <Input
            name="fullName"
            required
            minLength={3}
            maxLength={100}
            placeholder="John Smith"
            autoComplete="name"
          />
        </div>
        <div className="flex space-y-6 sm:space-x-4 sm:space-y-0 flex-col sm:flex-row w-full">
          <div className="flex flex-col flex-grow-[2]">
            <label className="ml-1 mb-4">Email</label>
            <Input
              name="email"
              required
              type="email"
              placeholder="johnsmith@gmail.com"
              autoComplete="email"
            />
          </div>
          <div className="flex flex-col flex-grow-1">
            <label className="ml-1 mb-4">
              Phone <span className="text-zinc-500">(optional)</span>
            </label>
            <Input
              name="phone"
              type="tel"
              pattern="[+]{0,1}[0-9]{11,14}"
              placeholder="07912345678"
            />
          </div>
        </div>
        <div className="flex space-y-6 sm:space-x-4 sm:space-y-0 flex-col sm:flex-row w-full">
          <div className="flex flex-col w-full">
            <label className="ml-1 mb-4">Car make</label>
            <ManufacturerField />
          </div>
          <div className="flex flex-col w-full">
            <label className="ml-1 mb-4">
              Car model <span className="text-zinc-500">(optional)</span>
            </label>
            <Input name="model" placeholder="e.g. 320d" />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="ml-1 mb-4">Description</label>
          <Textarea
            ref={descRef}
            id="description"
            name="description"
            minLength={20}
            maxLength={500}
            placeholder="Describe the problem here..."
            onChange={e => setDescLength(e.target.value.length)}
          />
          <span id="counter" className="mt-1 text-zinc-500 text-end text-sm">
            {`${descLength} / 500`}
          </span>
        </div>
        <Button disabled={!!response} className="text-xl font-semibold" type="submit">
          {!response ? 'Submit' : 'Submitted!'}
        </Button>
      </form>
      {response && <ResponseAlert success={response.success} message={response.message} />}
    </div>
  )
}
