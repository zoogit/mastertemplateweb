"use client";

import { useState } from "react";
import Button from "@/components/Button";

const field =
  "mt-3 block w-full border-0 border-b border-coal bg-transparent px-0 py-3 text-[18px] font-medium outline-none transition placeholder:text-coal/30 focus:border-b-2 focus:border-blaze";

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="eyebrow block">
        {label}
      </span>
      {children}
    </label>
  );
}

export default function RequestDemoForm() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(event.currentTarget);

    try {
      await fetch("/forms/contact.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
      });

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form name="request-demo" method="POST" action="/forms/contact.html" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="request-demo" />
      <div className="grid gap-9">
        <Field label="Name">
          <input className={field} type="text" name="name" required autoComplete="name" />
        </Field>
        <Field label="Work email">
          <input className={field} type="email" name="email" required autoComplete="email" />
        </Field>
        <Field label="Company">
          <input className={field} type="text" name="company" required autoComplete="organization" />
        </Field>
        <Field label="Message">
          <textarea className={`${field} min-h-32 resize-y`} name="message" />
        </Field>
        <div>
          <Button type="submit" variant="accent" className="w-full sm:w-auto">
            {status === "submitting" ? "Submitting..." : "Submit Request"}
          </Button>
          <div aria-live="polite">
            {status === "success" ? (
              <p className="mt-5 text-[16px] font-medium">Thanks. We received your request.</p>
            ) : null}
            {status === "error" ? (
              <p className="mt-5 text-[16px] font-medium">Something went wrong. Please try again.</p>
            ) : null}
          </div>
        </div>
      </div>
    </form>
  );
}
