import { ArrowRight } from "lucide-react";
import { Container } from "../../../../components/container";
import Image from "next/image";
import { Benefits } from "./data";

export const BenefitsSection = () => {
  return (
    <section id="about-us" className="py-4 md:py-32">
      <Container className="flex items-center flex-col gap-20">
        <h2 className="text-[#242430] md:text-[36px] text-[24px] font-bold leading-[38px] md:leading-[48px] w-full max-w-[516px] text-center">
          O que nós esperamos de você e suas experiências
        </h2>

        <div className="w-full lg:flex lg:justify-between gap-[18px] grid grid-cols-1 sm:grid-cols-2">
          {Benefits.map(
            ({ description, id, imageSrc, link, mainText, title }) => (
              <div
                key={id}
                className="flex flex-col gap-5 bg-white shadow-2xl rounded-[8px] w-full pb-[38px]"
              >
                <Image
                  src={imageSrc}
                  alt={title}
                  width={390}
                  height={390}
                  className="lg:w-[390px] w-full h-[212px] rounded-[8px]"
                />

                <div className="flex flex-col px-6 gap-6">
                  <div className="flex flex-col gap-3.5">
                    <span className="bg-[#F5F7FB] w-fit text-[#403CCF] font-bold text-[12px] leading-[100%] rounded-full py-2.5 px-[15px] h-fit">
                      {mainText}
                    </span>
                    <div className="flex flex-col gap-3">
                      <h3 className="text-[#242430] text-[24px] font-bold leading-[28px]">
                        {title}
                      </h3>
                      <p className="text-[#242430CC] text-[18px] md:text-[20px] leading-[28px] font-medium">
                        {description}
                      </p>
                    </div>
                  </div>

                  <p className="text-[#403CCF] font-medium text-[18px] leading-[28px]] flex items-center gap-2">
                    {link}
                    <ArrowRight color="#403CCF" size={24} />
                  </p>
                </div>
              </div>
            ),
          )}
        </div>
      </Container>
    </section>
  );
};
