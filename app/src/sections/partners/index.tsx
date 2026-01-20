/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import { Container } from "../../../../components/container";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { PARTNERS } from "./data";

export const PartnersSection = () => {
  const [api, setApi] = useState<any>(null);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {};
    api.on("select", onSelect);

    return () => api.off("select", onSelect);
  }, [api]);

  return (
    <section className="pt-52 lg:pt-[550px] pb-16">
      <Container className="flex flex-col gap-20 items-center">
        <h3 className="sm:text-[36px] text-[24px] text-[#242430] font-bold leading-[48px]">
          Nossos clientes e parceiros
        </h3>

        <div className="w-full">
          <div className="lg:hidden">
            <Carousel
              setApi={setApi}
              opts={{ align: "start" }}
              className="w-full"
            >
              <CarouselContent className="gap-4">
                {PARTNERS.map((partner) => (
                  <CarouselItem
                    key={partner.id}
                    className="flex-shrink-0 basis-full"
                  >
                    <div className="flex flex-col gap-[120px] bg-white shadow-2xl w-full rounded-[8px] pt-9 px-9 pb-6">
                      <div className="flex flex-col gap-[46px]">
                        <div className="flex gap-4 items-center">
                          <Image
                            src={partner.logo}
                            alt={String(partner.logo)}
                            width={100}
                            height={100}
                            className="w-[66px] h-[66px] rounded-[6px]"
                          />
                          <div className="flex flex-col gap-1.5">
                            <h4 className="text-[#242430] text-[18px] font-bold">
                              {partner.company}
                            </h4>
                            <p className="text-[#B8B8BF] text-[14px] font-medium">
                              {partner.country}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-col gap-2.5">
                          <h4 className="text-[#242430] text-[24px] font-bold">
                            {partner.areaActivity}
                          </h4>
                          <p className="text-[#B8B8BF] text-[18px] font-medium">
                            {partner.content}
                          </p>
                        </div>

                        <p className="text-[#242430CC] text-[18px] font-medium leading-[28px]">
                          {partner.description}
                        </p>
                      </div>

                      <div className="flex gap-3">
                        <Image
                          src={partner.avatar}
                          alt={String(partner.id)}
                          width={100}
                          height={100}
                          className="w-[42px] h-[42px] rounded-full"
                        />

                        <div className="flex flex-col">
                          <span className="text-[#242430CC] text-[12px] font-medium uppercase">
                            {partner.employeeType}
                          </span>
                          <p className="text-[#242430] text-[13px] font-bold">
                            {partner.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          <div className="hidden lg:flex justify-between gap-[18px] w-full">
            {PARTNERS.map((partner) => (
              <div
                key={partner.id}
                className="flex flex-col gap-[120px] bg-white shadow-2xl w-full rounded-[8px] pt-9 px-9 pb-6"
              >
                <div className="flex flex-col gap-[46px]">
                  <div className="flex gap-4 items-center">
                    <Image
                      src={partner.logo}
                      alt={String(partner.logo)}
                      width={100}
                      height={100}
                      className="w-[66px] h-[66px] rounded-[6px]"
                    />
                    <div className="flex flex-col gap-1.5">
                      <h4 className="text-[#242430] text-[18px] font-bold">
                        {partner.company}
                      </h4>
                      <p className="text-[#B8B8BF] text-[14px] font-medium">
                        {partner.country}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2.5">
                    <h4 className="text-[#242430] text-[24px] font-bold">
                      {partner.areaActivity}
                    </h4>
                    <p className="text-[#B8B8BF] text-[18px] font-medium">
                      {partner.content}
                    </p>
                  </div>

                  <p className="text-[#242430CC] text-[18px] font-medium leading-[28px]">
                    {partner.description}
                  </p>
                </div>

                <div className="flex gap-3">
                  <Image
                    src={partner.avatar}
                    alt={String(partner.id)}
                    width={100}
                    height={100}
                    className="w-[42px] h-[42px] rounded-full"
                  />

                  <div className="flex flex-col">
                    <span className="text-[#242430CC] text-[12px] font-medium uppercase">
                      {partner.employeeType}
                    </span>
                    <p className="text-[#242430] text-[13px] font-bold">
                      {partner.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Link
          href="/"
          className="text-[#FFFFFF] font-medium leading-[28px] text-[18px] py-[19px] px-[23px] bg-[#403CCF] rounded-[6px]"
        >
          Proceguir com dicas
        </Link>
      </Container>
    </section>
  );
};
