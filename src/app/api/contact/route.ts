import { Resend } from "resend";

const RECIPIENT = process.env.CONTACT_TO_EMAIL ?? "jwren859@aol.com";
const ALLOWED_SERVICES = new Set([
  "",
  "Street Cleaning",
  "Power Washing",
  "Window Cleaning",
  "Multiple Services",
]);

type ContactPayload = {
  name: string;
  organization: string;
  email: string;
  service: string;
  message: string;
  companyWebsite: string;
};

function clean(value: unknown, maximum: number) {
  return typeof value === "string" ? value.trim().slice(0, maximum) : "";
}

function parsePayload(value: unknown): ContactPayload | null {
  if (!value || typeof value !== "object") return null;

  const input = value as Record<string, unknown>;
  const payload = {
    name: clean(input.name, 100),
    organization: clean(input.organization, 150),
    email: clean(input.email, 254).toLowerCase(),
    service: clean(input.service, 50),
    message: clean(input.message, 4000),
    companyWebsite: clean(input.companyWebsite, 200),
  };

  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email);

  if (
    payload.name.length < 2 ||
    !emailIsValid ||
    payload.message.length < 10 ||
    !ALLOWED_SERVICES.has(payload.service)
  ) {
    return null;
  }

  return payload;
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && new URL(origin).host !== new URL(request.url).host) {
    return Response.json({ error: "Request origin is not allowed." }, { status: 403 });
  }

  let input: unknown;
  try {
    input = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const payload = parsePayload(input);
  if (!payload) {
    return Response.json({ error: "Please check the form fields." }, { status: 400 });
  }

  if (payload.companyWebsite) {
    return Response.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !from) {
    return Response.json({ error: "Contact service is not configured." }, { status: 503 });
  }

  const resend = new Resend(apiKey);
  const subjectContext = payload.organization || payload.name;
  const { error } = await resend.emails.send({
    from,
    to: RECIPIENT,
    replyTo: payload.email,
    subject: `JAG website proposal request — ${subjectContext}`,
    text: [
      `Name: ${payload.name}`,
      `Organization: ${payload.organization || "Not provided"}`,
      `Email: ${payload.email}`,
      `Service: ${payload.service || "Not selected"}`,
      "",
      "Message:",
      payload.message,
    ].join("\n"),
  });

  if (error) {
    return Response.json({ error: "Message delivery failed." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
