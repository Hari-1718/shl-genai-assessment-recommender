const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

export function isValidEmail(email: string): boolean {
  return EMAIL_REGEX.test(email.trim());
}

export const PERSONAL_EMAIL_DOMAINS = new Set([
  "gmail.com",
  "yahoo.com",
  "yahoo.co.in",
  "hotmail.com",
  "outlook.com",
  "live.com",
  "msn.com",
  "icloud.com",
  "me.com",
  "aol.com",
  "proton.me",
  "protonmail.com",
  "gmx.com",
  "pm.me",
  "yandex.com",
  "yandex.ru",
  "mail.ru",
]);

export const ALLOWLISTED_DOMAINS = new Set([
  "prewise.in",
  "prewise.co",
  "prewise.io",
]);

export function isPersonalEmail(email: string): boolean {
  const domain = email.trim().toLowerCase().split("@")[1] || "";
  return !ALLOWLISTED_DOMAINS.has(domain) && PERSONAL_EMAIL_DOMAINS.has(domain);
}

const NAME_REGEX = /^[A-Za-z\s'-]+$/;

/** Returns true when the value contains only letters, spaces, hyphens and apostrophes. */
export function isTextOnly(value: string): boolean {
  return NAME_REGEX.test(value.trim());
}

const PHONE_REGEX = /^\+?[\d\s()-]{7,20}$/;

/** Returns true for phone-shaped strings: optional +, then 7-20 digits/spaces/hyphens/parens. */
export function isValidPhone(value: string): boolean {
  return PHONE_REGEX.test(value.trim());
}

const URL_REGEX = /^https?:\/\/.+\..+/;

/** Returns true for strings that look like an http(s) URL. */
export function isValidUrl(value: string): boolean {
  return URL_REGEX.test(value.trim());
}
