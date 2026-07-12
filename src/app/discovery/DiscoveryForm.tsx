"use client";

import { useState, useTransition } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle,
  AlertCircle,
  ChevronDown,
  Loader2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { submitDiscovery, type DiscoveryData } from "./actions";

const fieldClass =
  "w-full bg-sheet-lift border rounded-[2px] px-3.5 py-2.5 text-sm text-inkwarm placeholder:text-inkwarm-faint outline-none min-h-12 transition-colors border-[rgba(28,24,18,0.16)] hover:border-[rgba(28,24,18,0.42)] focus-visible:border-mark focus-visible:shadow-[2px_2px_0_0_var(--color-mark)] disabled:opacity-50 disabled:cursor-not-allowed";

const selectFieldClass =
  "w-full bg-sheet-lift border rounded-[2px] pl-3.5 pr-9 py-2.5 text-sm text-inkwarm outline-none min-h-12 transition-colors border-[rgba(28,24,18,0.16)] hover:border-[rgba(28,24,18,0.42)] focus-visible:border-mark focus-visible:shadow-[2px_2px_0_0_var(--color-mark)] disabled:opacity-50 disabled:cursor-not-allowed appearance-none";

const checkboxLabelClass =
  "flex items-center gap-2.5 text-sm text-inkwarm cursor-pointer select-none group";

function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-2.5 pt-1">
      <span className="anno !text-[10px] !tracking-[0.14em] !text-mark shrink-0">
        {index}
      </span>
      <span className="h-px flex-1 bg-hairline" />
      <span className="anno !text-[10px] !tracking-[0.14em]">{label}</span>
    </div>
  );
}

function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className="relative">
      <select {...props} className={selectFieldClass} />
      <ChevronDown className="w-3.5 h-3.5 text-inkwarm-faint absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
    </div>
  );
}

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

      <SectionLabel index="01" label="Business" />

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

      <SectionLabel index="02" label="Digital presence" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Existing website">
          <Select
            required
            value={existingWebsite}
            onChange={(e) => setExistingWebsite(e.target.value)}
            disabled={isPending}
          >
            {yesNoOptions.map((opt) => (
              <option key={opt} value={opt} disabled={opt === ""}>
                {opt === "" ? "Select…" : opt}
              </option>
            ))}
          </Select>
        </Field>
        <Field label="Google Business Profile">
          <Select
            required
            value={googleBusinessProfile}
            onChange={(e) => setGoogleBusinessProfile(e.target.value)}
            disabled={isPending}
          >
            {yesNoOptions.map((opt) => (
              <option key={opt} value={opt} disabled={opt === ""}>
                {opt === "" ? "Select…" : opt}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      <SectionLabel index="03" label="Discovery notes" />

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
          {servicesOptions.map((service) => {
            const checked = services.includes(service);
            return (
              <label key={service} className={checkboxLabelClass}>
                <span
                  className={cn(
                    "relative w-4 h-4 shrink-0 rounded-[2px] border flex items-center justify-center transition-colors",
                    checked
                      ? "bg-mark border-mark"
                      : "bg-sheet-lift border-[rgba(28,24,18,0.32)] group-hover:border-mark/60",
                  )}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleService(service)}
                    disabled={isPending}
                    className="absolute inset-0 opacity-0 cursor-pointer disabled:cursor-not-allowed"
                  />
                  <Check
                    className={cn(
                      "w-3 h-3 text-sheet-lift transition-opacity",
                      checked ? "opacity-100" : "opacity-0",
                    )}
                    strokeWidth={3}
                  />
                </span>
                {service}
              </label>
            );
          })}
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
