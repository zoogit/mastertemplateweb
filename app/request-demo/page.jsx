import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RequestDemoForm from "@/components/RequestDemoForm";

export default function RequestDemoPage() {
  return (
    <>
      <Header />
      <main className="bg-paper">
        <section className="container-page grid min-h-[720px] gap-12 py-20 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-5 inline-flex bg-coal px-5 py-3 text-base font-semibold leading-none text-white">
              Request Demo
            </p>
            <h1 className="text-5xl font-bold leading-[0.98] text-coal md:text-7xl">
              See Master Template with your team’s workflow.
            </h1>
            <p className="mt-7 max-w-lg text-base leading-7 text-coal/70">
              Tell us a little about your presentation team, the products you are interested in, and the workflow you want to improve. We will follow up with a focused demo.
            </p>
          </div>

          <RequestDemoForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
