import { useTranslations } from "next-intl";
import { cookies } from "next/headers";
import Link from "next/link";

export default function Announcement() {
  const t = useTranslations("common");
  const tMarketingLayout = useTranslations("MarketingLayout");
  async function action() {
    "use server";
    (await cookies()).set("show-announcement", "no", { maxAge: 30 * 24 * 60 * 60, secure: true });
  }
  return (
    <section className="visible fixed inset-x-0 top-0 isolate z-10 flex max-h-14 items-center gap-x-2 overflow-hidden bg-zinc-900 px-4 py-3 sm:before:flex-1 md:px-6 dark:bg-zinc-50">
      <div aria-hidden="true" className="absolute top-1/2 left-0 -z-10 -translate-y-1/2 transform-gpu blur-2xl">
        <div
          style={{
            clipPath:
              "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
          }}
          className="aspect-6/1 w-xl bg-linear-to-r from-zinc-400 to-zinc-500 will-change-transform dark:from-zinc-500 dark:to-zinc-400"
        />
      </div>
      <div aria-hidden="true" className="absolute top-1/2 right-0 -z-10 -translate-y-1/2 transform-gpu blur-2xl">
        <div
          style={{
            clipPath:
              "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
          }}
          className="aspect-6/1 w-xl bg-linear-to-r from-zinc-400 to-zinc-500 will-change-transform dark:from-zinc-500 dark:to-zinc-400"
        />
      </div>
      <div className="relative flex items-center gap-x-4 gap-y-2">
        <p className="line-clamp-2 text-sm text-zinc-50 lg:line-clamp-1 dark:text-zinc-900">
          <strong className="font-bold text-white dark:text-zinc-950">ParongCon 2025</strong>
          <svg aria-hidden="true" className="mx-2 inline size-1 fill-current" height={8} viewBox="0 0 2 2" width={8}>
            <circle cx={1} cy={1} r={1} />
          </svg>
          {tMarketingLayout("announcement_description", { place: "Bandung" })}
        </p>
        <Link
          className="flex items-center justify-center rounded-xl bg-white p-2 text-sm font-semibold whitespace-nowrap text-zinc-950 capitalize transition duration-300 hover:bg-zinc-50 hover:text-zinc-900 focus-visible:bg-zinc-50 focus-visible:text-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-50 active:scale-95 active:bg-zinc-100 active:text-zinc-800 lg:gap-x-1 lg:rounded-full lg:px-3 lg:py-1.5 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-900 dark:hover:text-zinc-50 dark:focus-visible:bg-zinc-900 dark:focus-visible:text-zinc-50 dark:focus-visible:outline-zinc-900 dark:active:bg-zinc-800 dark:active:text-zinc-100"
          href="/"
          title={t("Register now")}
        >
          <span className="sr-only lg:not-sr-only lg:truncate">{t("Register now")}</span>
          <span aria-hidden="true" className="sr-only lg:not-sr-only">
            &rarr;
          </span>
          <svg aria-hidden="true" className="inline size-5 shrink-0 lg:hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M17 4.25A2.25 2.25 0 0 0 14.75 2h-5.5A2.25 2.25 0 0 0 7 4.25v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 .75.75v11.5a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 0-1.5 0v2A2.25 2.25 0 0 0 9.25 18h5.5A2.25 2.25 0 0 0 17 15.75V4.25Z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M1 10a.75.75 0 0 1 .75-.75h9.546l-1.048-.943a.75.75 0 1 1 1.004-1.114l2.5 2.25a.75.75 0 0 1 0 1.114l-2.5 2.25a.75.75 0 1 1-1.004-1.114l1.048-.943H1.75A.75.75 0 0 1 1 10Z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
      <form action={action} className="flex flex-1 justify-end">
        <button
          className="-mr-2 flex cursor-pointer items-center justify-center rounded-full p-2 text-white transition duration-300 hover:bg-zinc-50/5 hover:text-zinc-50 focus-visible:bg-zinc-50/5 focus-visible:text-zinc-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-50 active:scale-95 active:bg-zinc-100/10 active:text-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-900/10 dark:hover:text-zinc-900 dark:focus-visible:bg-zinc-900/10 dark:focus-visible:text-zinc-900 dark:focus-visible:outline-zinc-900 dark:active:bg-zinc-800/15 dark:active:text-zinc-800"
          title={t("dismiss")}
        >
          <span className="sr-only">{t("dismiss")}</span>
          <svg aria-hidden="true" fill="currentColor" className="size-5 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              clipRule="evenodd"
              d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
              fillRule="evenodd"
            />
          </svg>
        </button>
      </form>
    </section>
  );
}
