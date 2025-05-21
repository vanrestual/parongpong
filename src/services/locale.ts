"use server";

import { defaultLocale, Locale } from "@/i18n/request";
import { cookies } from "next/headers";

export async function getLocale() {
  return (await cookies()).get("locale")?.value || defaultLocale;
}

export async function setLocale(locale: Locale) {
  (await cookies()).set("locale", locale);
}
