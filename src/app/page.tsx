import Commitment from "@/components/Commitment";
import Contact from "@/components/Contact";
import Difference from "@/components/Difference";
import Families from "@/components/Families";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Organizations from "@/components/Organizations";
import OurPromise from "@/components/OurPromise";
import Qualities from "@/components/Qualities";
import Quality from "@/components/Quality";
import Services from "@/components/Services";
import Steps from "@/components/Steps";
import Values from "@/components/Values";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Qualities />
        <OurPromise />
        <Services />
        <Difference />
        <Steps />
        <Quality />
        <Families />
        <Organizations />
        <Values />
        <Contact />
        <Commitment />
      </main>
      <Footer />
    </>
  );
}
