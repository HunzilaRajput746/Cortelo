export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

export function isValidPhone(phone: string): boolean {
  const clean = phone.replace(/[\s\-\(\)\+]/g, "");
  return clean.length >= 7 && clean.length <= 15;
}
