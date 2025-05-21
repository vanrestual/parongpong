import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export const defaultLocale: Locale = "en";
export type Locale = "en" | "id" | "ja";

export default getRequestConfig(async () => {
  const cookie = await cookies();
  const locale = cookie.get("locale")?.value || defaultLocale;
  return { locale, messages: (await import(`../languages/${locale}.json`)).default };
});
