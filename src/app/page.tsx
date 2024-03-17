import Hero from "@/sections/Hero";
import NewsLetter from "@/sections/NewsLetter";
import Promotions from "@/sections/Promotions";
import QualityDetails from "@/sections/QualityDetails";
import WhatWeHave from "@/sections/WhatWeHave";

export default function Home() {
  return (
    <main>
      <Hero />
      <Promotions />
      <WhatWeHave />
      <QualityDetails />
      <NewsLetter />
    </main>
  );
}
