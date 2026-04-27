import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Programs from "./components/Programs";
import LeadForm from "./components/LeadForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />

      <main>
        <Hero />

        <section className="py-16 px-6">
          <Features />
        </section>

        <section className="py-16 px-6 bg-gray-50">
          <Programs />
        </section>

        <section className="py-16 px-6">
          <LeadForm />
        </section>
      </main>

      <Footer />
    </div>
  );
}