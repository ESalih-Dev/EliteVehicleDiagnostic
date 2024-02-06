import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { useIntersectionObserver } from '@/lib/useIntersectionObserver'
import { ExternalLink, Quote, SkipForward } from 'lucide-react'

interface Review {
  id: number
  body: string
  source: string
}

const REVIEWS: Review[] = [
  {
    id: 1,
    body: 'Always spot on and really honest in what work needs to be done, been going there for a few years now and would not go anywhere else.. highly recommended.',
    source: 'https://www.yell.com/biz/elite-vehicle-diagnostic-ltd-enfield-9848760/#reviews'
  },
  {
    id: 2,
    body: 'Elite was recommended by a friend as very professional, good and inexpensive. My God this was so true. Brought my vehicle because of issues with the suspension. Sal was able to diagnose the issue after a few questions and checks on the vehicle , my air bags were gone. He sent me a video of the check he performed to confirm that the air bag was the issue, never had this before. He priced the repair , and the cost was reasonable. Had my car back fully repaired and in good order. I would recommend using Elite. I will be using them again and again.',
    source: 'https://www.yell.com/biz/elite-vehicle-diagnostic-ltd-enfield-9848760/#reviews'
  },
  {
    id: 3,
    body: 'I brought my car in on recommendation of another garage as they could not fix the problem with my car’s turbo actuator. I saw a gentleman called Sal and he is a very knowledgeable professional who knew exactly what the problem was and how to fix it. He explained matters very clearly, and presented me with viable options to get my car back on the road, all with the frames of his estimates, and communicating throughout the job. I highly recommend Elite Vehicle Diagnostic for a professional service with excellent customer experience.',
    source: 'https://www.yell.com/biz/elite-vehicle-diagnostic-ltd-enfield-9848760/#reviews'
  },
  {
    id: 4,
    body: 'I have used Elite Vehicle Diagnostic several times now for servicing of my cars. I continue to be pleased and impressed with the level of service and customer commitment. In an industry that can sometimes be confusing they provide an excellent explanation of the work to be done and a good assessment of the potential cost. If any unforseen issues arise they are quick to communicate this and offer practical options for resolution. I would not hesitate to recommend them to anyone looking for an honest and reasonably priced garage to work on their vehicle.',
    source: 'https://www.yell.com/biz/elite-vehicle-diagnostic-ltd-enfield-9848760/#reviews'
  },
  {
    id: 5,
    body: "My audi has been playing up for over a year and been in 4 different garages and still had the same problems. Elite was recommended to me by a family friend ,my car was quickly diagnosed to have multiple electrical faults not picked up by other garages. I was regularly updated and also asked if I wanted to pop in to see progress. I found elite polite, professional and a we'll priced service and would use and recommend in the future.",
    source: 'https://www.yell.com/biz/elite-vehicle-diagnostic-ltd-enfield-9848760/#reviews'
  },
  {
    id: 6,
    body: 'I couldn’t recommend Elite Vehicle Diagnostics enough!! Sal is such a honest, hard working man who made me feel very comfortable his garage. I will definitely be returning + recommending the garage to everyone. I can’t thank Sal enough.',
    source: 'https://maps.app.goo.gl/FNZGChzFQS9jjaFTA'
  },
  {
    id: 7,
    body: 'Very pleased with the level of service, quality of work and all at reasonable cost.  Have used more than once now and would happily recommend as a honest and reliable garage.',
    source: 'https://maps.app.goo.gl/yGBHu6wDbmjdcJZg7'
  },
  {
    id: 8,
    body: 'Is honest and respectful, gives you the time to speak and is attentive.',
    source: 'https://maps.app.goo.gl/LQig47Xtm5uVRjY66'
  },
  {
    id: 9,
    body: 'Kept me updated all throughout the process very informative and professional. Very experienced very reasonably priced I would recommend and use in the future.',
    source: 'https://maps.app.goo.gl/91yVcFjS2SnPCxTg8'
  }
]

const GOOGLE_LOGO_LINK =
  'https://res.cloudinary.com/dlgw145lv/image/upload/v1706718825/GoogleLogo.png'
const YELL_LOGO_LINK =
  'https://res.cloudinary.com/dlgw145lv/image/upload/c_crop,ar_1:1/v1706718825/YellLogo.png'

const getRandomReview = (prevId: number): Review => {
  const getPosition = () => Math.floor(Math.random() * REVIEWS.length)
  let review = REVIEWS[getPosition()]
  while (review.id === prevId) review = REVIEWS[getPosition()]
  return review
}

export const ReviewCard = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, {})
  const isVisible = !!entry?.isIntersecting
  const [currentReview, setCurrentReview] = useState<Review>(getRandomReview(-1))
  const [hoveringNext, setHoveringNext] = useState(false)
  const [hoveringReviewLink, setHoveringReviewLink] = useState(false)

  useEffect(() => {
    setCurrentReview(getRandomReview(-1))
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        'flex flex-col py-10 items-center border-2 bg-gradient-to-br from-lime-950 to-slate-900 border-slate-700 rounded-3xl transition-all duration-1000',
        isVisible ? 'opacity-100' : 'opacity-0 translate-y-20'
      )}>
      <div className="mb-4">
        <Quote className="rotate-180 mr-auto ml-4" />
        <div className="px-6 my-4 text-xl text-ellipsis">{currentReview.body}</div>
        <Quote className="ml-auto mr-4" />
      </div>
      <div className="flex flex-row justify-between w-full mt-auto px-2 items-center">
        <a
          href={currentReview.source}
          target="_blank"
          className="flex flex-row p-2 rounded-xl border-2 hover:border-slate-100"
          onMouseEnter={() => setHoveringReviewLink(true)}
          onMouseLeave={() => setHoveringReviewLink(false)}>
          <img
            className="h-6 w-6 mr-2"
            src={currentReview.source.includes('yell') ? YELL_LOGO_LINK : GOOGLE_LOGO_LINK}
          />
          <span className="mr-1">Read the review</span>
          <sup>
            <ExternalLink
              className={cn(
                'h-4 w-4 stroke-slate-100 sm:stroke-none',
                hoveringReviewLink && 'sm:stroke-slate-100'
              )}
            />
          </sup>
        </a>
        <div
          className="flex flex-row space-x-1 items-center p-2 rounded-xl border-2 hover:border-slate-100 cursor-pointer"
          onClick={() => {
            setCurrentReview(getRandomReview(currentReview.id))
          }}
          onMouseEnter={() => {
            setHoveringNext(true)
          }}
          onMouseLeave={() => {
            setHoveringNext(false)
          }}>
          <span>Next</span>
          <SkipForward className={cn('h-4 w-4', hoveringNext && 'animate-bounce-right')} />
        </div>
      </div>
    </div>
  )
}
