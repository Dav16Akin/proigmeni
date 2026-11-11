"use client";

import { useState } from "react";
import { brand } from "@/content/proigmeni";

const s = {
  field:
    "w-full rounded-none border-0 border-b border-black bg-transparent px-0 py-3 font-roobert text-[18px] font-light text-black placeholder:text-black/35 outline-none transition-[border-color] duration-700 focus:border-black/40",
  label: "mb-1 block font-roobert text-[11px] uppercase tracking-[0.04em] text-[#6d6d6d]",
  button:
    "inline-flex items-center rounded-[75px] border border-black px-[33px] py-[11px] font-roobert text-[16px] text-black transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)] hover:tracking-[0.04em] hover:border-black/40 active:scale-[0.98]",
  error: "mt-1 font-roobert text-[12px] text-[#a52d25]",
};

export function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    if (!String(data.get("name") || "").trim()) next.name = "Please add your name.";
    const email = String(data.get("email") || "");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Please add a work email we can reply to.";
    if (!String(data.get("brief") || "").trim()) next.brief = "Tell us a little about what you’d like help with.";
    setErrors(next);
    if (Object.keys(next).length) return;
    const body = `Name: ${data.get("name")}\nCompany: ${data.get("company")}\nEmail: ${email}\n\nWhat we'd like AI to help with:\n${data.get("brief")}`;
    window.location.href = `mailto:${brand.email}?subject=${encodeURIComponent("Project enquiry")}&body=${encodeURIComponent(body)}`;
  }

  const field = (name: string, label: string, el: React.ReactNode) => (
    <div>
      <label htmlFor={`cf-${name}`} className={s.label}>
        {label}
      </label>
      {el}
      {errors[name] && (
        <p id={`cf-${name}-err`} className={s.error}>
          {errors[name]}
        </p>
      )}
    </div>
  );

  const described = (name: string) => (errors[name] ? `cf-${name}-err` : undefined);

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        {field("name", "Your name", <input id="cf-name" name="name" autoComplete="name" className={s.field} aria-invalid={!!errors.name} aria-describedby={described("name")} />)}
        {field("company", "Company", <input id="cf-company" name="company" autoComplete="organization" className={s.field} />)}
      </div>
      {field("email", "Work email", <input id="cf-email" name="email" type="email" autoComplete="email" className={s.field} aria-invalid={!!errors.email} aria-describedby={described("email")} />)}
      {field(
        "brief",
        "What would you like AI to help with?",
        <textarea id="cf-brief" name="brief" rows={3} className={`${s.field} resize-none`} aria-invalid={!!errors.brief} aria-describedby={described("brief")} />,
      )}
      <div>
        <button type="submit" className={s.button}>
          Send enquiry
        </button>
      </div>
    </form>
  );
}
