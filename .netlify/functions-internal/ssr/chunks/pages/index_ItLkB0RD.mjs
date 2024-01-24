import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent } from '../astro_m1QId14Y.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { c as cn, B as Button, $ as $$Layout } from './contact_EqJhWOuF.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';

const CarouselContext = React.createContext(null);
function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
const Carousel = React.forwardRef(
  ({
    orientation = "horizontal",
    opts,
    setApi,
    plugins,
    className,
    children,
    ...props
  }, ref) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"
      },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);
    const onSelect = React.useCallback((api2) => {
      if (!api2) {
        return;
      }
      setCanScrollPrev(api2.canScrollPrev());
      setCanScrollNext(api2.canScrollNext());
    }, []);
    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);
    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);
    const handleKeyDown = React.useCallback(
      (event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );
    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }
      setApi(api);
    }, [api, setApi]);
    React.useEffect(() => {
      if (!api) {
        return;
      }
      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);
      return () => {
        api?.off("select", onSelect);
      };
    }, [api, onSelect]);
    return /* @__PURE__ */ jsx(
      CarouselContext.Provider,
      {
        value: {
          carouselRef,
          api,
          opts,
          orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext
        },
        children: /* @__PURE__ */ jsx(
          "div",
          {
            ref,
            onKeyDownCapture: handleKeyDown,
            className: cn("relative", className),
            role: "region",
            "aria-roledescription": "carousel",
            ...props,
            children
          }
        )
      }
    );
  }
);
Carousel.displayName = "Carousel";
const CarouselContent = React.forwardRef(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();
  return /* @__PURE__ */ jsx("div", { ref: carouselRef, className: "overflow-hidden", children: /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn(
        "flex",
        orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        className
      ),
      ...props
    }
  ) });
});
CarouselContent.displayName = "CarouselContent";
const CarouselItem = React.forwardRef(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      role: "group",
      "aria-roledescription": "slide",
      className: cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      ),
      ...props
    }
  );
});
CarouselItem.displayName = "CarouselItem";
const CarouselPrevious = React.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
  return /* @__PURE__ */ jsxs(
    Button,
    {
      ref,
      variant,
      size,
      className: cn(
        "absolute  h-8 w-8 rounded-full",
        orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollPrev,
      onClick: scrollPrev,
      ...props,
      children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
CarouselPrevious.displayName = "CarouselPrevious";
const CarouselNext = React.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();
  return /* @__PURE__ */ jsxs(
    Button,
    {
      ref,
      variant,
      size,
      className: cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollNext,
      onClick: scrollNext,
      ...props,
      children: [
        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
CarouselNext.displayName = "CarouselNext";

const Showcase = () => /* @__PURE__ */ jsx(Carousel, { plugins: [Autoplay({ delay: 8e3 })], children: /* @__PURE__ */ jsxs(CarouselContent, { children: [
  /* @__PURE__ */ jsx(CarouselItem, { children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col font-semibold absolute ml-8 max-w-[400px] md:max-w-[700px] space-y-6 right-10 top-10 lg:top-20", children: [
      /* @__PURE__ */ jsx("span", { className: "text-3xl md:text-5xl text-zinc-50", children: "Hearing strange noises?" }),
      /* @__PURE__ */ jsx("span", { className: "text-xl md:text-3xl text-zinc-200", children: "We've heard them all, tell us how it started and when it happens." })
    ] }),
    /* @__PURE__ */ jsx(
      "img",
      {
        className: "object-cover w-full h-[650px] md:h-[700px] lg:h-[800px]",
        src: "https://res.cloudinary.com/dlgw145lv/image/upload/v1706025270/black-porsche-left-side.jpg"
      }
    )
  ] }) }),
  /* @__PURE__ */ jsx(CarouselItem, { children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col font-semibold absolute max-w-[650px] space-y-6 md:space-y-10 left-10 xl:left-40 top-20 md:top-44 mr-8", children: [
      /* @__PURE__ */ jsx("span", { className: "text-4xl md:text-6xl text-zinc-50 [text-shadow:_0_2px_1px_rgb(39,39,42)]", children: "Need a yearly service?" }),
      /* @__PURE__ */ jsx("span", { className: "text-2xl md:text-4xl text-zinc-300 [text-shadow:_0_2px_1px_rgb(39,39,42)]", children: "We've worked on every car brand and model you can imagine." })
    ] }),
    /* @__PURE__ */ jsx(
      "img",
      {
        className: "object-cover w-full h-[650px] md:h-[700px] lg:h-[800px]",
        src: "https://res.cloudinary.com/dlgw145lv/image/upload/v1706031388/red-mercedes.jpg"
      }
    )
  ] }) }),
  /* @__PURE__ */ jsx(CarouselItem, { children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col font-semibold absolute space-y-10 right-5 lg:right-10 bottom-20 lg:bottom-32 max-w-[450px] lg:max-w-[800px] ml-8", children: [
      /* @__PURE__ */ jsx("span", { className: "text-4xl md:text-5xl lg:text-6xl text-zinc-50 [text-shadow:_0_3px_2px_rgb(39,39,42)]", children: "Need a second opinion?" }),
      /* @__PURE__ */ jsx("span", { className: "text-2xl md:text-3xl lg:text-4xl text-zinc-300 [text-shadow:_0_3px_2px_rgb(39,39,42)]", children: "With over 30 years of operation our expertise and experience is unparalleled." })
    ] }),
    /* @__PURE__ */ jsx(
      "img",
      {
        className: "object-cover w-full h-[650px] md:h-[700px] lg:h-[800px]",
        src: "https://res.cloudinary.com/dlgw145lv/image/upload/v1706106638/engine-bay.jpg"
      }
    )
  ] }) })
] }) });

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home | EliteVehicleDiagnostic" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Showcase", Showcase, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/home/showcase", "client:component-export": "Showcase" })} ` })}`;
}, "/Users/kin/Documents/EliteVehicleDiagnostic/src/pages/index.astro", void 0);

const $$file = "/Users/kin/Documents/EliteVehicleDiagnostic/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
