import { useTranslations } from "next-intl";
import Link from "next/link";

export default function NotFound() {
  const t = useTranslations("common");
  return (
    <main className="grid h-full min-h-screen place-items-center bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
        <div className="text-center font-sans text-xl font-semibold text-zinc-950 md:text-2xl dark:text-white">404</div>
        <h1 className="mt-4 text-center font-sans text-4xl font-bold tracking-tight text-balance text-zinc-950 uppercase sm:mt-6 sm:text-5xl lg:mt-8 lg:text-6xl dark:text-white">
          {t("Page not found")}
        </h1>
        <p className="mt-2 text-center font-sans text-base text-pretty text-zinc-500 sm:mt-3 sm:text-lg md:text-xl lg:mt-4 lg:text-2xl dark:text-zinc-400">
          {t("That means the page you're looking for doesn't exist")}.
        </p>
        <div className="mt-6 flex flex-col items-center space-y-3 sm:mt-8 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 lg:mt-10">
          <Link
            className="rounded-md bg-zinc-950 px-5 py-2.5 text-center font-sans text-sm font-semibold text-white uppercase transition duration-300 hover:bg-zinc-950/85 focus-visible:bg-zinc-950/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950/85 active:scale-95 active:bg-zinc-900 md:rounded-lg md:px-6 md:py-3 md:text-base lg:rounded-xl dark:bg-white dark:text-zinc-950 dark:hover:bg-white/90 dark:focus-visible:bg-white/90 dark:focus-visible:outline-white/90 dark:active:bg-zinc-50"
            href="/"
          >
            {t("Back to home")}
          </Link>
          <Link
            className="group flex items-center justify-center rounded-md px-5 py-2.5 text-center font-sans text-sm font-semibold text-zinc-950 transition duration-300 hover:bg-zinc-950/5 focus:outline-none focus-visible:bg-zinc-950/5 active:scale-95 active:bg-zinc-900/10 md:rounded-lg md:px-6 md:py-3 md:text-base lg:rounded-xl dark:text-white dark:hover:bg-white/10 dark:focus-visible:bg-white/10 dark:active:bg-zinc-50/15"
            href="/contact"
          >
            {t("Contact us")}
            <svg
              aria-hidden="true"
              className="-mr-1 ml-1 size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-focus-visible:translate-x-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                fillRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
}
