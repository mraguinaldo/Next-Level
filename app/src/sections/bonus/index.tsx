/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ArrowRight } from "lucide-react";
import { Container } from "../../../../components/container";
import { BonusCard } from "../../../../components/cards/bonus";
import { BONUS } from "./data";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export const BonusSection = () => {
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    onSelect();

    return () => api.off("select", onSelect);
  }, [api]);

  return (
    <section className="pt-24">
      <Container className="bg-[#403CCF] h-[460px] rounded-[12px] pt-[48px] lg:pl-[118px] flex flex-col gap-8 relative pl-[32px] pr-0 sm:pr-0">
        <div className="flex flex-col gap-2.5">
          <h2 className="sm:text-[36px] text-[24px] text-white leading-[28px] md:leading-[48px] font-bold">
            O que nós oferecemos
          </h2>
          <p className="sm:text-[18px] text-[14px] text-white leading-[28px] md:leading-[48px] font-medium flex items-center gap-1">
            Proceguir com dicas
            <ArrowRight color="#fff" size={24} />
          </p>
        </div>

        <Image
          src="/bonus/image-6.png"
          alt="/bonus/image-6.png"
          width={400}
          height={400}
          className="lg:w-[443px] w-full lg:h-[859px] h-[448px] sm:h-[460px] rounded-[12px] absolute lg:top-0 lg:right-0 left-0 top-36 sm:top-44 z-0 lg:left-auto"
        />

        <div className="flex flex-col gap-6 z-10 pb-16 pt-16 lg:pt-0">
          <div className="lg:hidden">
            <Carousel
              setApi={setApi}
              opts={{ align: "start" }}
              className="w-full"
            >
              <CarouselContent className="gap-4">
                {BONUS.map((item, index) => (
                  <CarouselItem
                    key={item.id}
                    className="flex-shrink-0 basis-auto"
                  >
                    <BonusCard index={index} {...item} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <div className="flex justify-center items-center gap-2 mt-4">
              {BONUS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={cn(
                    "h-[9px] w-[9px] rounded-full transition-all",
                    current === index
                      ? "bg-[#FFF] w-[15px] h-[15px]"
                      : "bg-[#403CCF]",
                  )}
                />
              ))}
            </div>
          </div>

          <div className="hidden lg:flex flex-col gap-6">
            <div className="flex gap-6">
              {BONUS.slice(0, 2).map((item, index) => (
                <BonusCard key={item.id} index={index} {...item} />
              ))}
            </div>

            <div className="flex justify-between gap-6">
              {BONUS.slice(2).map((item, index) => (
                <BonusCard key={item.id} index={index + 2} {...item} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
