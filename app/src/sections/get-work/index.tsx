import Image from "next/image";
import { Container } from "../../../../components/container";
import { Work_Tips } from "./data";
import { Tip } from "@/components/tip";

export const GetWorkSection = () => {
  return (
    <section className="pt-24 md:pt-58 mb-[68px]">
      <Container className="flex flex-col md:gap-[66px] gap-4">
        <div className="flex flex-col gap-3">
          <h3 className="md:text-[#242430] text-[#403CCF] font-bold text-[18px] md:text-[32px] md:leading-[48px]">
            Como conseguir o seu trabalho
          </h3>
          <p className="text-[#242430CC] font-medium text-[18px] leading-[28px] w-full max-w-[422px] md:flex hidden">
            Acredite que conseguiremos realizar uma boa parte dos teus sonhos
          </p>
        </div>

        <div className="flex items-center gap-[42px]">
          <Image
            src="/work-tips/main.png"
            alt="work_tips"
            width={1000}
            height={1000}
            className="xl:w-[550px] w-[480px] h-[480px] h-[552px] rounded-[8px] lg:flex hidden"
          />

          <div className="flex flex-col gap-[46px]">
            <div className="flex flex-col md:gap-[52px] gap-6">
              <h3 className="text-[#242430] font-bold text-[24px] leading-[28px] md:text-[36px] md:leading-[48px] md:w-[453px] w-[302px]">
                Podes conseguir o trabalho de duas formas símples
              </h3>

              <div className="flex flex-col gap-3.5 md:gap-8 w-full md:max-w-[490px]">
                {Work_Tips.map(({ content, id }) => (
                  <Tip key={id} content={content} id={id} />
                ))}
              </div>
            </div>

            <button className="font-medium text-[18px] bg-[#403CCF] py-[19px] px-[25px] rounded-[6px] leading-[100%] text-white w-fit">
              Prosseguir com dicas
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};
