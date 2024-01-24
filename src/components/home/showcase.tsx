import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

export const Showcase = () => (
  <Carousel plugins={[Autoplay({ delay: 8000 })]}>
    <CarouselContent>
      <CarouselItem>
        <div className="relative">
          <div className="flex flex-col font-semibold absolute ml-8 max-w-[400px] md:max-w-[700px] space-y-6 right-10 top-10 lg:top-20">
            <span className="text-3xl md:text-5xl text-zinc-50">Hearing strange noises?</span>
            <span className="text-xl md:text-3xl text-zinc-200">
              We've heard them all, tell us how it started and when it happens.
            </span>
          </div>
          <img
            className="object-cover w-full h-[650px] md:h-[700px] lg:h-[800px]"
            src="https://res.cloudinary.com/dlgw145lv/image/upload/v1706025270/black-porsche-left-side.jpg"
          />
        </div>
      </CarouselItem>
      <CarouselItem>
        <div className="relative">
          <div className="flex flex-col font-semibold absolute max-w-[650px] space-y-6 md:space-y-10 left-10 xl:left-40 top-20 md:top-44 mr-8">
            <span className="text-4xl md:text-6xl text-zinc-50 [text-shadow:_0_2px_1px_rgb(39,39,42)]">
              Need a yearly service?
            </span>
            <span className="text-2xl md:text-4xl text-zinc-300 [text-shadow:_0_2px_1px_rgb(39,39,42)]">
              We've worked on every car brand and model you can imagine.
            </span>
          </div>
          <img
            className="object-cover w-full h-[650px] md:h-[700px] lg:h-[800px]"
            src="https://res.cloudinary.com/dlgw145lv/image/upload/v1706031388/red-mercedes.jpg"
          />
        </div>
      </CarouselItem>
      <CarouselItem>
        <div className="relative">
          <div className="flex flex-col font-semibold absolute space-y-10 right-5 lg:right-10 bottom-20 lg:bottom-32 max-w-[450px] lg:max-w-[800px] ml-8">
            <span className="text-4xl md:text-5xl lg:text-6xl text-zinc-50 [text-shadow:_0_3px_2px_rgb(39,39,42)]">
              Need a second opinion?
            </span>
            <span className="text-2xl md:text-3xl lg:text-4xl text-zinc-300 [text-shadow:_0_3px_2px_rgb(39,39,42)]">
              With over 30 years of operation our expertise and experience is unparalleled.
            </span>
          </div>
          <img
            className="object-cover w-full h-[650px] md:h-[700px] lg:h-[800px]"
            src="https://res.cloudinary.com/dlgw145lv/image/upload/v1706106638/engine-bay.jpg"
          />
        </div>
      </CarouselItem>
    </CarouselContent>
  </Carousel>
)
