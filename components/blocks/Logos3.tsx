// Fix: Move the implementation of Logos3 here and use consistent PascalCase naming
"use client";

import React from "react";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const defaultLogos: Logo[] = [
  { id: "supa", description: "Supabase", image: "https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg" },
  { id: "openai", description: "OpenAI", image: "https://www.vectorlogo.zone/logos/openai/openai-icon.svg" },
  { id: "dropbox", description: "Dropbox", image: "https://www.vectorlogo.zone/logos/dropbox/dropbox-icon.svg" },
  { id: "box", description: "Box", image: "https://www.vectorlogo.zone/logos/box/box-icon.svg" },
  { id: "gmail", description: "Gmail", image: "https://www.vectorlogo.zone/logos/google_gmail/google_gmail-icon.svg" },
  { id: "outlook", description: "Outlook", image: "https://www.vectorlogo.zone/logos/microsoft_outlook/microsoft_outlook-icon.svg" },
  { id: "slack", description: "Slack", image: "https://www.vectorlogo.zone/logos/slack/slack-icon.svg" },
  { id: "cal", description: "Calendar", image: "https://www.vectorlogo.zone/logos/google_calendar/google_calendar-icon.svg" },
  { id: "notion", description: "Notion", image: "https://www.vectorlogo.zone/logos/notion/notion-icon.svg" },
  { id: "o365", description: "Office 365", image: "https://www.vectorlogo.zone/logos/microsoft_office/microsoft_office-icon.svg" },
  { id: "zoom", description: "Zoom", image: "https://www.vectorlogo.zone/logos/zoomus/zoomus-icon.svg" },
  { id: "drchrono", description: "DrChrono", image: "https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/v1437113110/i3biv457onp7k4r70xrd.png" },
  { id: "doxyme", description: "Doxy.me", image: "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/4a/44/21/4a44214f-37f0-264d-7a6c-941e78696b94/AppIcon-0-0-1x_U007emarketing-0-0-0-6-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg" },
].map(logo => ({
  ...logo,
  className: "h-6 w-auto grayscale opacity-40 hover:opacity-80 transition-all duration-500 object-contain mx-10"
}));

export const Logos3 = ({
  heading = "Clinical partners",
}: Logos3Props) => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-12">
        <h2 className="text-[10px] font-semibold tracking-[0.4em] uppercase text-slate-400 mb-4">
          {heading}
        </h2>
        <p className="text-[12px] text-slate-400 font-normal">
          Built on the architecture medical teams rely on.
        </p>
      </div>
      <div className="relative mx-auto flex items-center justify-center max-w-full overflow-hidden">
        <Carousel
          opts={{ loop: true, align: "start" }}
          plugins={[
            AutoScroll({ 
              playOnInit: true, 
              speed: 1, 
              stopOnInteraction: false,
              stopOnMouseEnter: false
            })
          ]}
          className="w-full"
        >
          <CarouselContent className="ml-0">
            {[...defaultLogos, ...defaultLogos].map((logo, idx) => (
              <CarouselItem
                key={`${logo.id}-${idx}`}
                className="flex basis-auto justify-center pl-0"
              >
                <div className="flex shrink-0 items-center justify-center px-4">
                  <img
                    src={logo.image}
                    alt={logo.description}
                    className={logo.className}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
};