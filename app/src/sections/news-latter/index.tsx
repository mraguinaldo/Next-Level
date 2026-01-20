import { Container } from "../../../../components/container";
import Image from "next/image";

export const NewsLetterSection = () => {
  return (
    <section className="pt-16">
      <Container className="flex items-center gap-[84px] max-w-[2000px] pb-24 xl:pb-0">
        <Image
          src="/news-letter.png"
          alt="news-letter"
          width={800}
          height={800}
          className="w-[674px] h-[674px] rounded-[8px] hidden xl:flex"
        />
        <div className="flex flex-col gap-[46px] w-full max-w-[470px]">
          <div className="flex flex-col gap-4 sm:gap-8">
            <h3 className="text-[#242430] font-bold sm:text-[36px] text-[24px] leading-[48px] w-[170px] sm:w-[254px]">
              Assine a nossa News Latter
            </h3>
            <p className="text-[#242430CC] font-medium sm:text-[20px] text-[14px] leading-[28px]">
              Pesquisando de forma anónica os trabalhos em seguida entrar em
              contacto conosco e partirmos para as negociações e acertos.
            </p>
          </div>

          <div className="flex w-full max-w-[480px]">
            <div className="w-full max-w-[359px] bg-[#F5F7FB] flex items-center gap-3.5 rounded-l-[6px] pl-5">
              <input
                type="text"
                placeholder="exemplo@gmail.co.ao"
                className="border-none bg-transparent outline-0 ring-0 h-[54px] font-medium text-black"
              />
            </div>
            <button className="bg-[#403CCF] h-[54px] rounded-r-[6px] px-[25px] text-white flex items-center justify-center font-medium">
              Enviar
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};
