import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Engagement from "@/components/Engagement";
import Process from "@/components/Process";
import Services from "@/components/Services";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Services />
        <Work />
        <Process />
        <Engagement />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
