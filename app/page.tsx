import { Footer } from "@/components/footer";
import { Header } from "../components/header";
import { BenefitsSection } from "./src/sections/benefits";
import { BonusSection } from "./src/sections/bonus";
import { CategoriesSection } from "./src/sections/categories";
import { GetWorkSection } from "./src/sections/get-work";
import { HeroSection } from "./src/sections/hero";
import { NewsLetterSection } from "./src/sections/news-latter";
import { PartnersSection } from "./src/sections/partners";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <GetWorkSection />
      <CategoriesSection />
      <BenefitsSection />
      <BonusSection />
      <PartnersSection />
      <NewsLetterSection />
      <Footer />
    </main>
  );
}
