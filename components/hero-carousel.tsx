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
      "https://imgs.mongabay.com/wp-content/uploads/sites/29/2023/01/23144459/Rafael-Martins-Mongabay-4-scaled-e1674485236671-2400x890.jpg",
    title: "Ilha de Maré (Salvador)",
    description:
      "Contaminação por metais pesados (chumbo e cádmio) em crianças, em níveis quatro vezes acima do permitido pela OMS",
  },
  {
    image:
      "https://valencaagora.com/wp-content/uploads/2023/10/WhatsApp-Image-2023-09-27-at-14.33.13-2.jpeg",
    title: "Orobó (Valença)",
    description:
      "Lixão de Valença continua impactando o meio ambiente e a sociedade",
  },
  {
    image:
      "https://www.bahianoticias.com.br/fotos/municipios_noticias/38680/IMAGEM_NOTICIA_9.jpg?checksum=1711489877",
    title: "Morro de São Paulo (Cairu)",
    description: "Transformando resíduos em recursos",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/ea/Valen%C3%A7a%2C_Bahia.JPG",
    title: "Centro (Valença)",
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
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 mt-64">
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
