"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [feedback, setFeedback] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries());
    setState("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "We could not send your enquiry right now.");
      setState("sent");
      setFeedback("");
      form.reset();
    } catch (error) {
      setState("error");
      setFeedback(error instanceof Error && error.message !== "Failed to fetch"
        ? error.message
        : "We couldn’t reach the email service. Please try again or email contact@zaivis.co.in.");
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="contact-input-grid">
        <label className="contact-field">
          <span>Your name <i>*</i></span>
          <input name="name" autoComplete="name" placeholder="Full name" required maxLength={120} />
        </label>
        <label className="contact-field">
          <span>Email address <i>*</i></span>
          <input name="email" type="email" autoComplete="email" placeholder="you@organization.com" required maxLength={254} />
        </label>
        <label className="contact-field contact-field-wide">
          <span>Company or university <i>*</i></span>
          <input name="organization" autoComplete="organization" placeholder="Organization name" required maxLength={180} />
        </label>
      </div>
      <label className="contact-honeypot" aria-hidden="true">
        Leave this field empty
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <button className="contact-submit" type="submit" disabled={state === "sending"}>
        {state === "sending" ? "Sending…" : "Send enquiry"}<span aria-hidden="true">↗</span>
      </button>
      <p className={`contact-form-status${state === "error" ? " is-error" : ""}`} aria-live="polite" role="status">
        {state === "sent" ? "Thank you. Your enquiry has been sent to ZAIVIS." : feedback}
      </p>
      <p className="contact-consent">By submitting, you agree that ZAIVIS may use these details to respond to your enquiry.</p>
    </form>
  );
}
