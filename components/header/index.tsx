"use client";
import Link from "next/link";
import { Container } from "../container";
import { Logo } from "../logo";
import { Menu } from "./data";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="w-full fixed bg-white z-100">
      <Container className="flex flex-col">
        <div className="h-22 flex items-center justify-between">
          <div className="flex gap-1.5 md:gap-7 items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex items-center justify-center w-[36px] h-[36px] md:hidden"
            >
              <Image
                src="/menu.svg"
                alt="menu"
                width={24}
                height={24}
                className="w-[24px] h-[18px]"
              />
            </button>
            <Logo />
            <nav className="hidden md:flex gap-[13px]">
              {Menu.map(({ content, href, id }) => (
                <Link
                  href={href}
                  key={id}
                  className="text-[#242430] font-normal text-[14px] leading-[100%]"
                  scroll={false}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector(href)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {content}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-[#242430] font-normal leading-[100%] text-[14px] hidden md:flex"
            >
              Iniciar sessão
            </Link>
            <Link
              href="/"
              className="text-[#FFFFFF] font-medium leading-[100%] text-[12px] py-[10.5px] px-[17.5px] bg-[#403CCF] rounded-md"
            >
              Tornar-se parceiro
            </Link>
          </div>
        </div>

        <div
          className={cn(
            "fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden",
            mobileOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none",
          )}
          onClick={() => setMobileOpen(false)}
        />

        <nav
          className={cn(
            "fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 md:hidden flex flex-col gap-6 pt-24 px-6",
            mobileOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          {Menu.map(({ content, href, id }) => (
            <button
              key={id}
              className="text-[#242430] font-medium text-[16px] text-left"
              onClick={() => handleLinkClick(href)}
            >
              {content}
            </button>
          ))}

          <Link href="/" className="text-[#403CCF] font-semibold text-[16px]">
            Iniciar sessão
          </Link>
          <Link
            href="/"
            className="text-white font-medium text-[12px] py-[10.5px] px-[17.5px] bg-[#403CCF] rounded-md mt-2"
          >
            Tornar-se parceiro
          </Link>
        </nav>

        <div className="hidden md:flex md:bg-[#E5E5E5] h-[1px] w-full"></div>
      </Container>
    </header>
  );
};
