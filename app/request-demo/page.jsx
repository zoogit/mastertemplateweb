import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { FormInput, FormTextarea } from "@/components/FormFields";

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

          <form
            name="request-demo"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="bg-white p-8"
          >
            <input type="hidden" name="form-name" value="request-demo" />
            <p className="hidden">
              <label>
                Do not fill this out: <input name="bot-field" />
              </label>
            </p>
            <div className="grid gap-5">
              <FormInput label="Name" name="name" required />
              <FormInput label="Work email" name="email" type="email" required />
              <FormInput label="Company" name="company" required />
              <FormTextarea label="Message" name="message" />
              <Button type="submit" className="mt-2 w-full">
                Submit Request
              </Button>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
