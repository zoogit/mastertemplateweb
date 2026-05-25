"use client";

import { useState } from "react";
import Button from "@/components/Button";
import { FormInput, FormTextarea } from "@/components/FormFields";

export default function RequestDemoForm() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("submitting");

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      event.currentTarget.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form name="request-demo" onSubmit={handleSubmit} className="bg-white p-8">
      <input type="hidden" name="form-name" value="request-demo" />
      <div className="grid gap-5">
        <FormInput label="Name" name="name" required />
        <FormInput label="Work email" name="email" type="email" required />
        <FormInput label="Company" name="company" required />
        <FormTextarea label="Message" name="message" />
        <Button type="submit" className="mt-2 w-full">
          {status === "submitting" ? "Submitting..." : "Submit Request"}
        </Button>
        {status === "success" ? (
          <p className="text-sm font-medium text-coal">Thanks. We received your request.</p>
        ) : null}
        {status === "error" ? (
          <p className="text-sm font-medium text-blaze">
            Something went wrong. Please try again.
          </p>
        ) : null}
      </div>
    </form>
  );
}
