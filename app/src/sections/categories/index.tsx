/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ArrowRight } from "lucide-react";
import { Container } from "../../../../components/container";
import Image from "next/image";
import { CATEGORIES } from "./data";
import { useEffect, useState } from "react";
import { cn } from "../../utils/cn";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export const CategoriesSection = () => {
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    onSelect();

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="bg-[#F5F7FB] my-14">
      <Container className="flex flex-col gap-16 pt-[46px] pb-12 sm:pb-[90px]">
        <div className="flex flex-col gap-4 w-full max-w-[351px]">
          <h3 className="text-[#242430] font-bold md:text-[36px] text-[24px] leading-[38px] md:leading-[48px] md:w-full w-[302px]">
            Categoria dos nossos serviços
          </h3>
          <p className="text-[#403CCF] flex items-center gap-2 md:text-[18px] text-[14px] font-medium leading-[100%]">
            Proceguir com dicas
            <ArrowRight color="#403CCF" size={24} className="md:flex hidden" />
          </p>
        </div>

        <div className="w-full">
          <div className="lg:hidden">
            <Carousel
              setApi={setApi}
              opts={{ align: "start" }}
              className="w-full bg-transparent"
            >
              <CarouselContent>
                {CATEGORIES.map(({ Icon, content, description, id, title }) => (
                  <CarouselItem key={id} className="basis-full">
                    <div className="shadow-xl bg-white rounded-[8px] p-6 flex gap-5">
                      <Image
                        src={Icon}
                        alt={content}
                        width={40}
                        height={40}
                        className="w-[40px] h-[40px]"
                      />

                      <div className="flex flex-col gap-2.5">
                        <div className="flex flex-col gap-0.5">
                          <h4 className="text-[#403CCF] font-medium text-[18px] leading-[100%]">
                            {title}
                          </h4>
                          <h3 className="text-[#242430] font-semibold text-[24px] leading-[100%]">
                            {content}
                          </h3>
                        </div>
                        <p className="text-[#242430CC] font-medium text-[14px] leading-[22px]">
                          {description}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <div className="flex justify-center items-center gap-2 mt-4">
              {CATEGORIES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrent(index);
                    api?.scrollTo(index);
                  }}
                  className={cn(
                    "h-[9px] w-[9px] rounded-full transition-all cursor-pointer",
                    current === index
                      ? "bg-[#242430CC] w-[15px] h-[15px]"
                      : "bg-[#403CCF]/30",
                  )}
                />
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-between gap-11">
            <div className="w-full flex justify-between gap-9">
              {CATEGORIES.map(({ Icon, content, description, id, title }) => (
                <div
                  key={id}
                  className="shadow-2xl bg-white rounded-[8px] p-6 flex gap-5 w-full"
                >
                  <Image
                    src={Icon}
                    alt={content}
                    width={40}
                    height={40}
                    className="w-[40px] h-[40px]"
                  />

                  <div className="flex flex-col gap-2.5">
                    <div className="flex flex-col gap-0.5">
                      <h4 className="text-[#403CCF] font-medium text-[18px] leading-[100%]">
                        {title}
                      </h4>
                      <h3 className="text-[#242430] font-semibold text-[24px] leading-[100%]">
                        {content}
                      </h3>
                    </div>
                    <p className="text-[#242430CC] font-medium text-[14px] leading-[22px]">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <ArrowRight color="#242430" size={42} />
          </div>
        </div>
      </Container>
    </section>
  );
};
