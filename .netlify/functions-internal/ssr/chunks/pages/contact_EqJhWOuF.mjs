import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, f as renderHead, g as renderComponent, h as renderSlot, m as maybeRenderHead } from '../astro_m1QId14Y.mjs';
import 'kleur/colors';
import 'html-escaper';
import { clsx } from 'clsx';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import * as React from 'react';
import { useState } from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { twMerge } from 'tailwind-merge';
import { MapPin, Mail, Phone, X, Search, ChevronsUpDown, Check } from 'lucide-react';
/* empty css                            */
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { Command as Command$1 } from 'cmdk';
import * as DialogPrimitive from '@radix-ui/react-dialog';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Separator = React.forwardRef(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsx(
    SeparatorPrimitive.Root,
    {
      ref,
      decorative,
      orientation,
      className: cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      ),
      ...props
    }
  )
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

const ToolbarMaps = () => /* @__PURE__ */ jsxs("div", { className: "flex flex-row w-auto sm:w-[180px] cursor-pointer py-3 items-center justify-center", children: [
  /* @__PURE__ */ jsx(MapPin, { className: "h-8 w-8 sm:mr-3" }),
  /* @__PURE__ */ jsx(
    "span",
    {
      className: "font-bold hidden sm:block",
      onClick: () => {
        window.scrollTo(0, document.body.scrollHeight);
      },
      children: "Find us on Maps!"
    }
  )
] });

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" class="dark"> <head><meta charset="UTF-8"><meta name="description" content="Elite Vehicle Diagnostic "><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="flex flex-col"> <div class="flex flex-col md:flex-row justify-between py-6 px-10 md:pr-0 bg-slate-200 text-slate-800 items-center"> <a href="/" class="text-4xl md:text-5xl font-extralight mb-4 md:mb-0">Elite Vehicle Diagnostic</a> <div class="flex flex-row"> ${renderComponent($$result, "Separator", Separator, { "orientation": "vertical", "className": "h-auto mx-4 lg:mx-8" })} <a href="/contact" class="flex flex-row sm:w-[180px] py-3 items-center justify-center"> ${renderComponent($$result, "Mail", Mail, { "className": "h-8 w-8 sm:mr-3" })} <span class="font-mono font-semibold hidden sm:block">Contact form</span> </a> ${renderComponent($$result, "Separator", Separator, { "orientation": "vertical", "className": "h-auto mx-4 lg:mx-8" })} <a href="tel:02081500022" class="flex flex-row sm:w-[180px] py-3 items-center justify-center"> ${renderComponent($$result, "Phone", Phone, { "className": "h-8 w-8 sm:mr-3" })} <span class="font-mono font-bold hidden sm:block">020 8150 0022</span> </a> ${renderComponent($$result, "Separator", Separator, { "orientation": "vertical", "className": "h-auto mx-4 lg:mx-8" })} ${renderComponent($$result, "ToolbarMaps", ToolbarMaps, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/home/toolbarMaps", "client:component-export": "ToolbarMaps" })} ${renderComponent($$result, "Separator", Separator, { "orientation": "vertical", "className": "h-auto mx-4 lg:mx-8" })} </div> </div> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/kin/Documents/EliteVehicleDiagnostic/src/layouts/Layout.astro", void 0);

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

const Popover = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverContent = React.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(PopoverPrimitive.Portal, { children: /* @__PURE__ */ jsx(
  PopoverPrimitive.Content,
  {
    ref,
    align,
    sideOffset,
    className: cn(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

const DialogPortal = DialogPrimitive.Portal;
const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxs(
    DialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
const DialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Title,
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
const DialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

const Command = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1,
  {
    ref,
    className: cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    ),
    ...props
  }
));
Command.displayName = Command$1.displayName;
const CommandInput = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ jsx(Search, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ jsx(
    Command$1.Input,
    {
      ref,
      className: cn(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props
    }
  )
] }));
CommandInput.displayName = Command$1.Input.displayName;
const CommandList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1.List,
  {
    ref,
    className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className),
    ...props
  }
));
CommandList.displayName = Command$1.List.displayName;
const CommandEmpty = React.forwardRef((props, ref) => /* @__PURE__ */ jsx(
  Command$1.Empty,
  {
    ref,
    className: "py-6 text-center text-sm",
    ...props
  }
));
CommandEmpty.displayName = Command$1.Empty.displayName;
const CommandGroup = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1.Group,
  {
    ref,
    className: cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    ),
    ...props
  }
));
CommandGroup.displayName = Command$1.Group.displayName;
const CommandSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1.Separator,
  {
    ref,
    className: cn("-mx-1 h-px bg-border", className),
    ...props
  }
));
CommandSeparator.displayName = Command$1.Separator.displayName;
const CommandItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props
  }
));
CommandItem.displayName = Command$1.Item.displayName;

const MANUFACTURERS = [
  "Abarth",
  "Alfa Romeo",
  "Aston Martin",
  "Audi",
  "Bentley",
  "BMW",
  "Bugatti",
  "Cadillac",
  "Chevrolet",
  "Chrysler",
  "Citroen",
  "Dacia",
  "Daewoo",
  "Daihatsu",
  "Dodge",
  "Donkervoort",
  "DS",
  "Ferrari",
  "Fiat",
  "Fisker",
  "Ford",
  "Honda",
  "Hummer",
  "Hyundai",
  "Infiniti",
  "Iveco",
  "Jaguar",
  "Jeep",
  "Kia",
  "KTM",
  "Lada",
  "Lamborghini",
  "Lancia",
  "Land Rover",
  "Landwind",
  "Lexus",
  "Lotus",
  "Maserati",
  "Maybach",
  "Mazda",
  "McLaren",
  "Mercedes-Benz",
  "MG",
  "Mini",
  "Mitsubishi",
  "Morgan",
  "Nissan",
  "Opel",
  "Other",
  "Peugeot",
  "Porsche",
  "Renault",
  "Rolls-Royce",
  "Rover",
  "Saab",
  "Seat",
  "Skoda",
  "Smart",
  "SsangYong",
  "Subaru",
  "Suzuki",
  "Tesla",
  "Toyota",
  "Volkswagen",
  "Volvo"
];
const ManufacturerField = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("input", { hidden: true, name: "make", value }),
    /* @__PURE__ */ jsxs(Popover, { open, onOpenChange: setOpen, children: [
      /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "outline",
          role: "combobox",
          "aria-expanded": open,
          className: "justify-between",
          children: [
            value || "Select manufacturer",
            /* @__PURE__ */ jsx(ChevronsUpDown, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx(PopoverContent, { className: "p-0", children: /* @__PURE__ */ jsxs(Command, { children: [
        /* @__PURE__ */ jsx(CommandInput, { placeholder: "Search..." }),
        /* @__PURE__ */ jsx(CommandEmpty, { children: 'Manufacturer not found, try "Other"' }),
        /* @__PURE__ */ jsx(CommandGroup, { className: "h-[300px] overflow-y-scroll", children: MANUFACTURERS.map((manufacturer) => /* @__PURE__ */ jsxs(
          CommandItem,
          {
            value: manufacturer,
            onSelect: () => {
              setValue(manufacturer);
              setOpen(false);
            },
            children: [
              /* @__PURE__ */ jsx(
                Check,
                {
                  className: cn(
                    "mr-2 h-4 w-4",
                    value === manufacturer ? "opacity-100" : "opacity-0"
                  )
                }
              ),
              manufacturer
            ]
          },
          manufacturer
        )) })
      ] }) })
    ] })
  ] });
};

const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";

const Textarea = React.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";

const $$Astro = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate` ${renderComponent($$result, "Layout", $$Layout, { "title": "Contact | EliteVehicleDiagnostic" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<form action="/api/contact" method="POST" enctype="application/x-www-form-urlencoded" class="flex flex-col space-y-6 max-w-[600px] w-full mt-16 px-6 self-center"> <div class="flex flex-col sm:flex-row sm:items-center whitespace-nowrap"> <label class="mb-2 sm:mr-4 sm:mb-0">Full name</label> ${renderComponent($$result2, "Input", Input, { "name": "fullName", "required": true, "minLength": 3, "maxLength": 100, "placeholder": "John Smith" })} </div> <div class="flex space-y-4 sm:space-x-4 sm:space-y-0 flex-col sm:flex-row w-full"> <div class="flex flex-col flex-grow-[2]"> <label class="ml-1 mb-2">Email</label> ${renderComponent($$result2, "Input", Input, { "name": "email", "required": true, "type": "email", "placeholder": "johnsmith@gmail.com" })} </div> <div class="flex flex-col flex-grow-1"> <label class="ml-1 mb-2">Phone <span class="text-zinc-500">(optional)</span></label> ${renderComponent($$result2, "Input", Input, { "name": "phone", "type": "tel", "pattern": "[+]{0,1}[0-9]{11,14}", "placeholder": "07912345678" })} </div> </div> <div class="flex space-y-4 sm:space-x-4 sm:space-y-0 flex-col sm:flex-row w-full"> <div class="flex flex-col w-full"> <label class="ml-1 mb-2">Car make</label> ${renderComponent($$result2, "ManufacturerField", ManufacturerField, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/contact/manufacturerField", "client:component-export": "ManufacturerField" })} </div> <div class="flex flex-col w-full"> <label class="ml-1 mb-2">Car model <span class="text-zinc-500">(optional)</span></label> ${renderComponent($$result2, "Input", Input, { "name": "model", "placeholder": "e.g. 320d" })} </div> </div> <div class="flex flex-col"> <label class="ml-1 mb-2">Description</label> ${renderComponent($$result2, "Textarea", Textarea, { "id": "description", "name": "description", "minLength": 20, "maxLength": 500, "placeholder": "Describe the problem here..." })} <span id="counter" class="mt-1 text-zinc-500 text-end">0</span> </div> ${renderComponent($$result2, "Button", Button, { "type": "submit" }, { "default": ($$result3) => renderTemplate`Submit` })} </form> ` })}`;
}, "/Users/kin/Documents/EliteVehicleDiagnostic/src/pages/contact.astro", void 0);

const $$file = "/Users/kin/Documents/EliteVehicleDiagnostic/src/pages/contact.astro";
const $$url = "/contact";

const contact = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, Button as B, MANUFACTURERS as M, contact as a, cn as c };
