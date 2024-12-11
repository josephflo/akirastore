import Hero from "@/components/layout/Hero";
import TopBar from "@/components/TopBar";
import { Navbar } from "@/components/layout";
import Features from "@/components/layout/Features";
import Footer from "@/components/layout/Footer";
import NewArrivals from "@/components/layout/NewArrivals";

export default async function Page() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <Features />
      <NewArrivals />
      <Footer />
    </>
  );
}
