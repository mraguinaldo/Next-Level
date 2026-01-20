import Link from "next/link";
import Image from "next/image";
import { Container } from "../container";
import { FOOTER, SOCIAL_MEDIA } from "./data";

export const Footer = () => {
  return (
    <footer id="footer" className="bg-[#242430]">
      <Container className="pt-[70px] pb-[140px] flex flex-col gap-[42px]">
        <div className="pb-[90px] border-b border-[#E5E5E52E] flex flex-col lg:flex-row justify-between gap-32">
          <div className="flex justify-between gap-10 w-full flex-wrap sm:flex-nowrap">
            {FOOTER.map(({ ITEMS_MENU, id, title }) => (
              <div key={id} className="flex flex-col gap-9">
                <h3 className="text-white text-[24px] font-bold leading-[28px]">
                  {title}
                </h3>
                <nav className="flex flex-col gap-4">
                  {ITEMS_MENU.map(({ content, href, id }) => (
                    <Link
                      key={id}
                      href={href}
                      className="text-[#DDDDDD] text-[18px] font-normal leading-[28px]"
                    >
                      {content}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-9 w-full max-w-[213px]">
            <h3 className="text-white text-[24px] font-bold leading-[28px]">
              Download App
            </h3>
            <Image
              src="/social-media.png"
              alt="social-media"
              width={200}
              height={200}
              className="w-[213px] h-[136px]"
            />
          </div>
        </div>

        <div className="flex justify-between items-center flex-col-reverse sm:flex-row gap-6">
          <p className="text-white text-[14px] font-medium leading-[28px]">
            Speak with us, todos os direitos reservados 2021
          </p>

          <div className="flex gap-2">
            {SOCIAL_MEDIA.map(({ href, id, logo }) => (
              <Link
                href={href}
                key={id}
                className="bg-white flex items-center justify-center w-[40px] h-[40px]"
              >
                <Image
                  src={logo}
                  alt="social-media"
                  width={24}
                  height={24}
                  className="w-[18px] h-[18px]"
                />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};
