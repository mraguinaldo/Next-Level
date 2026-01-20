import { Container } from "../../../../components/container";
import { Benefits } from "./data";
import { BenefitCard } from "@/components/cards/benefit";

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
              <BenefitCard
                key={id}
                description={description}
                id={id}
                imageSrc={imageSrc}
                link={link}
                mainText={mainText}
                title={title}
              />
            ),
          )}
        </div>
      </Container>
    </section>
  );
};
