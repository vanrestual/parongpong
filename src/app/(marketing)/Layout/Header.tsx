"use client";

import NavigationDropdown from "@/app/(marketing)/Layout/NavigationDropdown";
import NavigationItem from "@/app/(marketing)/Layout/NavigationItem";
import { MarketingContext } from "@/app/(marketing)/provider";
import { setLocale as onChange } from "@/services/locale";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, PopoverGroup } from "@headlessui/react";
import { BuildingOfficeIcon, PhoneIcon, TicketIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useLocale, useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { use, useEffect, useState } from "react";

const ThemeSwitch = dynamic(() => import("@/app/(marketing)/Layout/ThemeSwitch"), {
  loading: () => <div className="size-10 animate-pulse rounded-xl bg-zinc-200 dark:bg-zinc-700" />,
  ssr: false,
});

export default function Header({ announcementShow, appName, companyName }: { announcementShow: boolean; appName?: string; companyName?: string }) {
  const { setSidebarOpen } = use(MarketingContext);
  const value = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations("common");
  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 16);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={clsx(
        announcementShow ? "top-14" : "top-0",
        scrolled ? "bg-white/90 backdrop-blur-xs dark:bg-zinc-950/90" : "bg-transparent backdrop-blur-none",
        "fixed inset-x-0 z-10 -mb-px border-b border-b-zinc-200 transition-colors duration-300 dark:border-b-zinc-800",
      )}
    >
      <div className="mx-auto flex min-h-16 justify-between space-x-4 px-4 lg:container lg:space-x-6 lg:px-6">
        <div className="flex items-center space-x-3 py-1 lg:space-x-0">
          <button
            className="-ml-2 flex cursor-pointer items-center justify-center rounded-lg p-2.5 text-zinc-600 transition duration-300 hover:bg-zinc-700/5 hover:text-zinc-700 focus-visible:bg-zinc-700/5 focus-visible:text-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-700 active:scale-95 active:bg-zinc-800/10 active:text-zinc-800 lg:hidden dark:text-zinc-300 dark:hover:bg-zinc-200/10 dark:hover:text-zinc-200 dark:focus-visible:bg-zinc-200/10 dark:focus-visible:text-zinc-200 dark:focus-visible:outline-zinc-200 dark:active:bg-zinc-100/15 dark:active:text-zinc-100"
            onClick={() => setSidebarOpen(true)}
            title={t("Open the sidebar menu")}
            type="button"
          >
            <svg aria-hidden="true" className="size-5 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                clipRule="evenodd"
                d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75Zm0 10.5a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Z"
                fillRule="evenodd"
              />
            </svg>
            <span className="sr-only">{t("Open the sidebar menu")}</span>
          </button>
          <Link
            className="rounded-lg transition-transform duration-300 focus:outline-offset-8 focus:outline-zinc-800 active:scale-95 dark:focus:outline-zinc-100"
            href="/"
          >
            <Image
              alt={t("application logo", { name: appName ?? "Brand" })}
              className="h-auto w-auto dark:invert"
              height={40}
              loading="eager"
              priority={true}
              src="/logo.png"
              width={120}
            />
            <span className="sr-only">{companyName || "Brand"}</span>
          </Link>
        </div>
        <nav className="hidden lg:flex">
          <PopoverGroup as="ul" className="flex flex-1 justify-center space-x-2">
            {[
              {
                items: [
                  { description: t("Get to know us better"), href: "/about", icon: BuildingOfficeIcon, name: t("about us") },
                  { description: t("Experienced in the field"), href: "/team", icon: UserGroupIcon, name: t("team") },
                  { href: "/contact", icon: PhoneIcon, name: t("contact us") },
                  { href: "/helpdesk", icon: TicketIcon, name: t("helpdesk") },
                ],
                name: t("company"),
              },
              { name: t("projects"), href: "/projects" },
              { name: t("blog"), href: "/blog" },
            ].map((item) =>
              item.items ? (
                <NavigationDropdown key={item.name} {...item} />
              ) : (
                <NavigationItem key={item.name} {...item}>
                  {item.name}
                </NavigationItem>
              ),
            )}
          </PopoverGroup>
        </nav>
        <div className="flex items-center justify-end space-x-2">
          <div className="relative hidden sm:inline-block">
            <Listbox onChange={onChange} value={value}>
              <ListboxButton
                className="group flex cursor-pointer items-center justify-center gap-x-1 rounded-xl p-2.5 font-sans text-sm font-medium whitespace-nowrap text-zinc-700 uppercase transition duration-300 hover:bg-zinc-800/5 hover:text-zinc-800 focus:not-data-focus:outline-none focus-visible:bg-zinc-800/5 focus-visible:text-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-800 active:scale-95 active:bg-zinc-900/10 active:text-zinc-900 data-open:bg-zinc-800/10 data-open:text-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-100/10 dark:hover:text-zinc-100 dark:focus-visible:bg-zinc-100/10 dark:focus-visible:text-zinc-100 dark:focus-visible:outline-zinc-100 dark:active:bg-zinc-50/15 dark:active:text-zinc-50 dark:data-open:bg-zinc-100/15 dark:data-open:text-zinc-100"
                title={t("Change language")}
              >
                <svg aria-hidden="true" className="size-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    clipRule="evenodd"
                    d="M9 2.25a.75.75 0 0 1 .75.75v1.506a49.384 49.384 0 0 1 5.343.371.75.75 0 1 1-.186 1.489c-.66-.083-1.323-.151-1.99-.206a18.67 18.67 0 0 1-2.97 6.323c.318.384.65.753 1 1.107a.75.75 0 0 1-1.07 1.052A18.902 18.902 0 0 1 9 13.687a18.823 18.823 0 0 1-5.656 4.482.75.75 0 0 1-.688-1.333 17.323 17.323 0 0 0 5.396-4.353A18.72 18.72 0 0 1 5.89 8.598a.75.75 0 0 1 1.388-.568A17.21 17.21 0 0 0 9 11.224a17.168 17.168 0 0 0 2.391-5.165 48.04 48.04 0 0 0-8.298.307.75.75 0 0 1-.186-1.489 49.159 49.159 0 0 1 5.343-.371V3A.75.75 0 0 1 9 2.25ZM15.75 9a.75.75 0 0 1 .68.433l5.25 11.25a.75.75 0 1 1-1.36.634l-1.198-2.567h-6.744l-1.198 2.567a.75.75 0 0 1-1.36-.634l5.25-11.25A.75.75 0 0 1 15.75 9Zm-2.672 8.25h5.344l-2.672-5.726-2.672 5.726Z"
                    fillRule="evenodd"
                  />
                </svg>
                {value}
                <svg
                  aria-hidden="true"
                  className="size-5 shrink-0 rotate-0 transform transition duration-300 group-data-open:-rotate-180"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                    fillRule="evenodd"
                  />
                </svg>
              </ListboxButton>
              <ListboxOptions
                className="absolute top-full left-1/2 z-10 mt-3 flex w-screen max-w-max -translate-x-1/2 flex-col focus:outline-none data-closed:translate-y-1 data-enter:duration-300 data-enter:ease-out data-leave:duration-150 data-leave:ease-in data-leave:data-closed:opacity-0 sm:px-6 xl:px-8"
                transition
              >
                <div className="w-screen max-w-48 flex-auto overflow-hidden bg-white py-1.5 ring-1 ring-zinc-950/5 sm:rounded-md sm:shadow-sm xl:rounded-lg xl:shadow-md dark:bg-zinc-950 dark:shadow-white/10 dark:ring-white/10">
                  {[
                    { key: "en", value: t("english") },
                    { key: "id", value: t("indonesian") },
                    { key: "ja", value: t("japanese") },
                  ].map((locale) => (
                    <ListboxOption
                      className="group relative flex cursor-pointer items-center text-sm/6 font-medium whitespace-nowrap text-zinc-700 capitalize transition-colors duration-300 select-none focus:outline-none data-disabled:cursor-default data-focus:bg-zinc-50 data-focus:text-zinc-800 data-selected:bg-zinc-100 data-selected:font-semibold data-selected:text-zinc-900 sm:gap-x-2 sm:px-4 sm:py-2 dark:text-zinc-200 dark:data-focus:bg-zinc-900 dark:data-focus:text-zinc-100 dark:data-selected:bg-zinc-800 dark:data-selected:text-zinc-50"
                      disabled={locale.key === value}
                      key={locale.key}
                      value={locale.key}
                    >
                      <svg
                        aria-hidden="true"
                        className="invisible size-4 shrink-0 group-data-selected:visible"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                          fillRule="evenodd"
                        />
                      </svg>
                      {locale.value}
                    </ListboxOption>
                  ))}
                </div>
              </ListboxOptions>
            </Listbox>
          </div>
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
}
