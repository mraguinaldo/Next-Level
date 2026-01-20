/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import { Container } from "../../../../components/container";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { PARTNERS } from "./data";
import { PartnerCard } from "@/components/cards/partner";

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
                {PARTNERS.map(
                  ({
                    areaActivity,
                    avatar,
                    company,
                    content,
                    country,
                    description,
                    employeeType,
                    id,
                    logo,
                    name,
                  }) => (
                    <CarouselItem key={id} className="flex-shrink-0 basis-full">
                      <PartnerCard
                        content={content}
                        areaActivity={areaActivity}
                        logo={logo}
                        id={id}
                        name={name}
                        company={company}
                        country={country}
                        description={description}
                        avatar={avatar}
                        employeeType={employeeType}
                      />
                    </CarouselItem>
                  ),
                )}
              </CarouselContent>
            </Carousel>
          </div>

          <div className="hidden lg:flex justify-between gap-[18px] w-full">
            {PARTNERS.map(
              ({
                areaActivity,
                content,
                logo,
                id,
                name,
                company,
                country,
                description,
                avatar,
                employeeType,
              }) => (
                <PartnerCard
                  key={id}
                  content={content}
                  areaActivity={areaActivity}
                  logo={logo}
                  id={id}
                  name={name}
                  company={company}
                  country={country}
                  description={description}
                  avatar={avatar}
                  employeeType={employeeType}
                />
              ),
            )}
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
