import { siteConfig } from "@/lib/site";

export type ContactFormPayload = {
  name: string;
  email: string;
  message: string;
  phone?: string;
  subject?: string;
  source: "footer" | "contact-page";
  website?: string;
};

export async function submitContactForm(payload: ContactFormPayload) {
  if (payload.website) {
    return { ok: true };
  }

  const formData = new FormData();
  formData.append("name", payload.name);
  formData.append("email", payload.email);
  formData.append("_replyto", payload.email);
  formData.append("phone", payload.phone ?? "");
  formData.append("subject", payload.subject ?? "");
  formData.append("message", payload.message);
  formData.append("source", payload.source);
  formData.append("_subject", payload.subject || `New website inquiry from ${payload.name}`);
  formData.append("_template", "table");
  formData.append("_captcha", "false");

  const response = await fetch(`https://formsubmit.co/ajax/${siteConfig.email}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Unable to submit form");
  }

  return { ok: true };
}
