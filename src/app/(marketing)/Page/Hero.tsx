import clsx from "clsx";
import { getTranslations } from "next-intl/server";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";

export default async function Hero() {
  const cookie = await cookies();
  const announcementShow = cookie.get("show-announcement")?.value !== "no";
  const t = await getTranslations("common");
  return (
    <section className="relative isolate bg-white dark:bg-zinc-950">
      <div aria-hidden="true" className="absolute top-32 left-0 -z-10 transform-gpu overflow-hidden blur-3xl lg:top-16">
        <div
          className="relative -left-16 aspect-square w-xs rotate-135 bg-linear-to-tr from-zinc-400 to-zinc-500 opacity-25 sm:w-sm md:w-md lg:w-lg xl:w-xl dark:from-zinc-500 dark:to-zinc-400"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className={clsx(announcementShow ? "pt-40" : "pt-24", "flex flex-col justify-center space-y-12 pb-16 sm:space-y-14 lg:space-y-16 xl:min-h-screen")}>
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mb-6 flex justify-center sm:mb-8 lg:mb-10">
            <div className="relative flex flex-col justify-center rounded-lg px-4 py-1 text-center font-sans text-sm text-zinc-600 ring-1 ring-zinc-950/10 transition duration-300 hover:ring-zinc-950/20 sm:flex-row sm:items-center sm:rounded-full sm:px-6 sm:py-1.5 lg:px-8 lg:py-2 lg:text-base dark:text-zinc-300 dark:ring-white/10 dark:hover:ring-white/20">
              {t("Start your waste-to-material journey")}
              {". "}
              <Link
                className="font-semibold text-zinc-800 transition duration-300 hover:text-zinc-900 hover:underline hover:underline-offset-4 focus-visible:text-zinc-900 focus-visible:underline focus-visible:underline-offset-4 focus-visible:outline-none active:text-zinc-950 sm:ml-1 dark:text-zinc-100 dark:hover:text-zinc-50 dark:focus-visible:text-zinc-50 dark:active:text-white"
                href="/"
              >
                {t("Get started")} <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <h1 className="text-center font-sans text-4xl font-bold tracking-tight text-balance text-zinc-950 uppercase sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl dark:text-white">
            {t("there's no such thing as waste")}
          </h1>
          <p className="mt-3 text-center font-sans text-lg font-medium text-pretty text-zinc-700 sm:mt-4 sm:text-xl md:text-2xl lg:mt-6 lg:text-3xl dark:text-zinc-200">
            {t("Only material out of place")}
          </p>
          <div className="mt-8 flex flex-col items-center space-y-4 sm:mt-10 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 lg:mt-12 lg:space-x-6">
            <Link
              className="rounded-md bg-zinc-950 px-5 py-2.5 text-center font-sans text-sm font-semibold text-white uppercase transition duration-300 hover:bg-zinc-800/90 focus-visible:bg-zinc-800/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-800/90 active:scale-95 active:bg-zinc-900/95 max-sm:w-full max-sm:max-w-xs sm:rounded-lg sm:px-6 sm:py-3 sm:text-base lg:rounded-xl lg:px-8 lg:py-4 lg:text-lg dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100/90 dark:focus-visible:bg-zinc-100/90 dark:focus-visible:outline-zinc-100/90 dark:active:bg-zinc-50/95"
              href="/"
            >
              {t("learn more")}
            </Link>
            <Link
              className="group flex items-center justify-center rounded-md px-5 py-2.5 text-center font-sans text-sm font-semibold text-zinc-950 transition duration-300 hover:bg-zinc-800/5 focus-visible:bg-zinc-800/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-800/90 active:scale-95 active:bg-zinc-900/10 max-sm:w-full max-sm:max-w-xs sm:rounded-lg sm:px-6 sm:py-3 sm:text-base lg:rounded-xl lg:px-8 lg:py-4 lg:text-lg dark:text-white dark:hover:bg-zinc-100/10 dark:focus-visible:bg-zinc-100/10 dark:focus-visible:outline-zinc-100/90 dark:active:bg-zinc-50/15"
              href="/"
            >
              {t("Contact us")}{" "}
              <svg
                aria-hidden="true"
                className="-mr-1 ml-1 size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-focus-visible:translate-x-0.5 sm:size-5"
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
        <div className="mx-auto grid grid-cols-8 place-items-center items-center gap-12 px-6 sm:max-w-3xl lg:max-w-6xl lg:grid-cols-7 lg:gap-x-12 lg:gap-y-0 lg:px-8">
          {[
            { alt: "Conture", src: "/affiliates/conture.png", inverted: true },
            { alt: "Mallsampah", src: "/affiliates/mallsampah.png", inverted: false },
            { alt: "OceanKita", src: "/affiliates/oceankita.png", inverted: false },
            { alt: "Paperpods", src: "/affiliates/paperpods.png", inverted: false },
            { alt: "Pura", className: "sm:col-start-2 lg:col-start-auto", src: "/affiliates/pura.png", inverted: true },
            { alt: "RAWHaus", src: "/affiliates/rawhaus.png", inverted: false },
            { alt: "Sisa", className: "col-start-3 sm:col-start-auto", src: "/affiliates/sisa.png", inverted: true },
          ].map(({ alt, className, inverted, src }, index) => (
            <Image
              alt={alt}
              className={clsx(
                className ?? null,
                inverted ? "dark:invert" : null,
                "col-span-4 h-auto max-h-12 w-full object-contain transition duration-300 hover:scale-110 focus:scale-110 sm:col-span-2 sm:max-h-16 lg:col-span-1 lg:max-h-20",
              )}
              height={40}
              key={index}
              loading="eager"
              src={src}
              width={110}
            />
          ))}
        </div>
      </div>
      <div aria-hidden="true" className="absolute right-0 bottom-32 -z-10 transform-gpu overflow-hidden blur-3xl lg:bottom-16">
        <div
          className="relative -right-16 aspect-square w-xs rotate-315 bg-linear-to-tl from-zinc-400 to-zinc-500 opacity-25 sm:w-sm md:w-md lg:w-lg xl:w-xl dark:from-zinc-500 dark:to-zinc-400"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </section>
  );
}
