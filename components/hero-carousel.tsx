"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { EmblaCarouselType } from "embla-carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Progress } from "@/components/ui/progress";

const CAROUSEL_ITEMS = [
  {
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80",
    title: "Preservação Ambiental",
    description: "Juntos pela conservação do nosso planeta",
  },
  {
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Energia Renovável",
    description: "O futuro é sustentável",
  },
  {
    image:
      "https://images.unsplash.com/photo-1573771132297-928d549e039c?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Reciclagem",
    description: "Transformando resíduos em recursos",
  },
  {
    image:
      "https://images.unsplash.com/photo-1550358864-518f202c02ba?auto=format&fit=crop&q=80uns",
    title: "Biodiversidade",
    description: "Protegendo a vida em todas suas formas",
  },
];

const INTERVAL_TIME = 15000; // 15 segundos
const UPDATE_INTERVAL = 50; // Atualização a cada 50ms

export function HeroCarousel() {
  const [api, setApi] = useState<EmblaCarouselType | null>(null);
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!api) return;

    const updateCurrentSlide = () => {
      setCurrent(api.selectedScrollSnap());
      setProgress(0);
    };

    api.on("select", updateCurrentSlide);

    return () => {
      api.off("select", updateCurrentSlide);
    };
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const timer = setInterval(() => {
      api.scrollTo((current + 1) % CAROUSEL_ITEMS.length);
    }, INTERVAL_TIME);

    return () => clearInterval(timer);
  }, [api, current]);

  useEffect(() => {
    setProgress(0);

    const step = 100 / (INTERVAL_TIME / UPDATE_INTERVAL);
    const progressTimer = setInterval(() => {
      setProgress((prev) => (prev + step >= 100 ? 100 : prev + step));
    }, UPDATE_INTERVAL);

    return () => clearInterval(progressTimer);
  }, [current]);

  return (
    <div className="relative w-full">
      <Carousel
        setApi={(api) => setApi(api ?? null)}
        className="w-full"
        opts={{ loop: true }}
      >
        <CarouselContent>
          {CAROUSEL_ITEMS.map(({ image, title, description }, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[60vh] w-full">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover brightness-50"
                  priority={index === 0}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                    {title}
                  </h2>
                  <p className="text-xl md:text-2xl">{description}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
      <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-black/20">
        <Progress value={progress} className="h-1 transition-none" />
      </div>
    </div>
  );
}
