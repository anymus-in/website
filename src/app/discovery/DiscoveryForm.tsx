"use client";

import { useState, useTransition } from "react";
import {
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { submitDiscovery, type DiscoveryData } from "./actions";

const fieldClass =
  "w-full bg-sheet-lift border rounded-[2px] px-3.5 py-2.5 text-sm text-inkwarm placeholder:text-inkwarm-faint outline-none min-h-12 transition-colors border-[rgba(28,24,18,0.16)] hover:border-[rgba(28,24,18,0.42)] focus-visible:border-mark focus-visible:shadow-[2px_2px_0_0_var(--color-mark)] disabled:opacity-50 disabled:cursor-not-allowed";

const selectFieldClass =
  "w-full bg-sheet-lift border rounded-[2px] px-3.5 py-2.5 text-sm text-inkwarm outline-none min-h-12 transition-colors border-[rgba(28,24,18,0.16)] hover:border-[rgba(28,24,18,0.42)] focus-visible:border-mark focus-visible:shadow-[2px_2px_0_0_var(--color-mark)] disabled:opacity-50 disabled:cursor-not-allowed appearance-none";

const checkboxLabelClass =
  "flex items-center gap-2.5 text-sm text-inkwarm cursor-pointer select-none";

const servicesOptions = ["Website", "SEO", "Automation"] as const;

const yesNoOptions = ["", "Yes", "No"];

function Field({
  label,
  children,
  optional,
}: {
  label: string;
  children: React.ReactNode;
  optional?: boolean;
}) {
  return (
    <label className="block">
      <span className="anno !text-[11px] sm:!text-[10px] block mb-2">
        {label}
        {optional && (
          <span className="text-inkwarm-faint ml-1">(optional)</span>
        )}
      </span>
      {children}
    </label>
  );
}

export default function DiscoveryForm() {
  const [businessName, setBusinessName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [industry, setIndustry] = useState("");
  const [existingWebsite, setExistingWebsite] = useState("");
  const [googleBusinessProfile, setGoogleBusinessProfile] = useState("");
  const [leadSources, setLeadSources] = useState("");
  const [challenges, setChallenges] = useState("");
  const [services, setServices] = useState<string[]>([]);
  const [preferredDate, setPreferredDate] = useState("");
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [isPending, startTransition] = useTransition();

  function toggleService(service: string) {
    setServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service],
    );
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("idle");

    const data: DiscoveryData = {
      businessName,
      contactPerson,
      phone,
      email,
      industry,
      existingWebsite,
      googleBusinessProfile,
      leadSources,
      challenges,
      services,
      preferredDate,
      notes,
    };

    startTransition(async () => {
      const result = await submitDiscovery(data);

      if (result.success) {
        setStatus("success");
        setBusinessName("");
        setContactPerson("");
        setPhone("");
        setEmail("");
        setIndustry("");
        setExistingWebsite("");
        setGoogleBusinessProfile("");
        setLeadSources("");
        setChallenges("");
        setServices([]);
        setPreferredDate("");
        setNotes("");
      } else {
        setStatus("error");
        setErrorMsg(result.error ?? "Something went wrong.");
      }
    });
  }

  if (status === "success") {
    return (
      <div className="plate relative overflow-hidden p-8 sm:p-10 flex flex-col items-center text-center gap-5">
        <span className="absolute top-0 left-0 right-0 h-[2px] bg-mark" />
        <div className="w-14 h-14 rounded-[2px] border rule bg-sheet flex items-center justify-center">
          <CheckCircle className="w-7 h-7 text-live" strokeWidth={1.6} />
        </div>
        <div>
          <p className="font-serif font-light text-[26px] text-inkwarm mb-2">
            Discovery saved
          </p>
          <p className="text-[14px] text-inkwarm-soft leading-relaxed max-w-[320px]">
            Thanks — the details are on their way to the team. We&apos;ll
            follow up shortly.
          </p>
        </div>
        <button
          onClick={() => setStatus("idle")}
          className="u-draw text-[13px] font-medium text-inkwarm-soft hover:text-inkwarm transition-colors"
        >
          Submit another discovery
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="plate relative overflow-hidden p-6 sm:p-8 space-y-4 sm:space-y-5"
    >
      <span className="absolute top-0 left-0 right-0 h-[2px] bg-mark" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Business name">
          <input
            required
            placeholder="e.g. Acme Corp"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            disabled={isPending}
            className={fieldClass}
          />
        </Field>
        <Field label="Contact person">
          <input
            required
            placeholder="Full name"
            value={contactPerson}
            onChange={(e) => setContactPerson(e.target.value)}
            disabled={isPending}
            className={fieldClass}
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Phone">
          <input
            required
            type="tel"
            placeholder="+1 (555) 000-0000"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            disabled={isPending}
            className={fieldClass}
          />
        </Field>
        <Field label="Email">
          <input
            required
            type="email"
            placeholder="contact@business.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isPending}
            className={fieldClass}
          />
        </Field>
      </div>

      <Field label="Industry">
        <input
          required
          placeholder="e.g. Construction, Healthcare, Retail"
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
          disabled={isPending}
          className={fieldClass}
        />
      </Field>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Existing website">
          <select
            required
            value={existingWebsite}
            onChange={(e) => setExistingWebsite(e.target.value)}
            disabled={isPending}
            className={selectFieldClass}
          >
            {yesNoOptions.map((opt) => (
              <option key={opt} value={opt} disabled={opt === ""}>
                {opt === "" ? "Select…" : opt}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Google Business Profile">
          <select
            required
            value={googleBusinessProfile}
            onChange={(e) => setGoogleBusinessProfile(e.target.value)}
            disabled={isPending}
            className={selectFieldClass}
          >
            {yesNoOptions.map((opt) => (
              <option key={opt} value={opt} disabled={opt === ""}>
                {opt === "" ? "Select…" : opt}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Main lead sources" optional>
        <textarea
          rows={2}
          placeholder="e.g. Google searches, referrals, social media, walk-ins"
          value={leadSources}
          onChange={(e) => setLeadSources(e.target.value)}
          disabled={isPending}
          className={`${fieldClass} resize-none`}
        />
      </Field>

      <Field label="Current challenges" optional>
        <textarea
          rows={2}
          placeholder="What's holding the business back or what are they hoping to improve?"
          value={challenges}
          onChange={(e) => setChallenges(e.target.value)}
          disabled={isPending}
          className={`${fieldClass} resize-none`}
        />
      </Field>

      <fieldset>
        <span className="anno !text-[11px] sm:!text-[10px] block mb-2">
          Services interested in
          <span className="text-inkwarm-faint ml-1">(optional)</span>
        </span>
        <div className="flex flex-wrap gap-x-6 gap-y-2.5">
          {servicesOptions.map((service) => (
            <label key={service} className={checkboxLabelClass}>
              <input
                type="checkbox"
                checked={services.includes(service)}
                onChange={() => toggleService(service)}
                disabled={isPending}
                className="accent-[#C8391B] w-4 h-4"
              />
              {service}
            </label>
          ))}
        </div>
      </fieldset>

      <Field label="Preferred meeting date & time" optional>
        <input
          type="datetime-local"
          value={preferredDate}
          onChange={(e) => setPreferredDate(e.target.value)}
          disabled={isPending}
          className={fieldClass}
        />
      </Field>

      <Field label="Notes" optional>
        <textarea
          rows={3}
          placeholder="Anything else the team should know before the meeting?"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          disabled={isPending}
          className={`${fieldClass} resize-none`}
        />
      </Field>

      {status === "error" && (
        <div className="flex items-center gap-2.5 rounded-[2px] bg-mark/[0.06] border border-mark/50 px-4 py-3">
          <AlertCircle className="w-4 h-4 text-mark shrink-0" />
          <p className="text-[13px] text-mark-deep">{errorMsg}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="btn-stamp w-full px-7 py-3.5 text-[14px] sm:text-[15px] font-medium min-h-12 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isPending ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Save discovery
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>

      <p className="anno !text-[11px] sm:!text-[9px] text-center block">
        The team will be notified immediately
      </p>
    </form>
  );
}
