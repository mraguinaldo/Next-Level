"use client";

import { Search } from "lucide-react";
import { Container } from "../../../../components/container";
import Image from "next/image";
import { cn } from "../../utils/cn";
import { useState } from "react";
import { Hero_Menu } from "./data";

export const HeroSection = () => {
  const [isSelected, setIsSelected] = useState<number>(0);
  return (
    <section id="hero" className="pt-32">
      <Container className="flex flex-col gap-8">
        <nav className="hidden md:flex gap-3">
          {Hero_Menu.map(({ content, id }) => (
            <button
              key={id}
              onClick={() => setIsSelected(id)}
              className={cn(
                "font-medium text-[13px] leading-[100%] cursor-pointer",
                isSelected === id ? "text-[#403CCF]" : "text-[#242430CC]",
              )}
            >
              {content}
            </button>
          ))}
        </nav>
        <div className="relative">
          <Image
            src="/hero/main.png"
            alt="hero-image"
            width={1000}
            height={1000}
            className="w-full absolute top-0 left-0 md:h-[583px] h-[334px] rounded-[12px] -z-1"
          />
          <div className="flex flex-col gap-3 md:gap-[29px] justify-center md:pl-[72px] md:pt-[100px] pl-[22px] pt-[30px]">
            <div className="flex flex-col gap-2 w-full max-w-[365px]">
              <button className="text-[#403CCF] rounded-full px-[15px] py-2.5 bg-white font-bold text-[12px] leading-[100%] w-fit">
                Encontrar trabalho
              </button>
              <div className="flex flex-col gap-3 md:gap-4.5">
                <h1 className="text-white text-[32px] md:text-[42px] font-bold leading-[42px] md:leading-[48px] w-[279px] md:w-full">
                  Consiga o trabalho certo e rápido que você almeja
                </h1>
                <p className="text-[#DDDDDD] font-medium text-[14px] md:text-[18px] md:leading-[28px] leading-[20px] tracking-[0.4px] w-[285px] md:w-full">
                  Acredite que conseguiremos realizar uma boa parte dos teus
                  sonhos
                </p>
              </div>
            </div>

            <button className="bg-[#403CCF] rounded-[6px] text-white flex items-center justify-center font-medium md:hidden w-[54px] h-[54px]">
              <Search color="#fff" size={24} />
            </button>

            <div className="hidden w-full max-w-[480px] md:flex">
              <div className="w-full max-w-[359px] bg-white flex items-center gap-3.5 rounded-l-[6px] pl-5">
                <Search color="#242430CC" size={18} />
                <input
                  type="text"
                  placeholder="Pesquisar por trabalho"
                  className="border-none bg-transparent outline-0 ring-0 h-[54px] font-medium text-black"
                />
              </div>
              <button className="bg-[#403CCF] h-[54px] rounded-r-[6px] px-[25px] text-white flex items-center justify-center font-medium">
                Pesquisar
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
