"use client";

import SidebarNavigationDropdown from "@/app/(marketing)/Layout/SidebarNavigationDropdown";
import SidebarNavigationItem from "@/app/(marketing)/Layout/SidebarNavigationItem";
import { MarketingContext } from "@/app/(marketing)/provider";
import { Locale } from "@/i18n/request";
import { setLocale } from "@/services/locale";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { use, useState } from "react";

export default function Sidebar({ appName, companyName }: { appName?: string; companyName?: string }) {
  const { sidebarOpen: open, setSidebarOpen: onClose } = use(MarketingContext);
  const value = useLocale();
  const [openIndex, setOpenIndex] = useState<null | number>(null);
  const t = useTranslations("common");
  return (
    <Dialog className="relative z-10" onClose={onClose} open={open}>
      <DialogBackdrop className="fixed inset-0 bg-black/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0" transition />
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-4">
            <DialogPanel
              className="pointer-events-auto w-screen max-w-xs transform transition duration-500 ease-in-out data-closed:-translate-x-full sm:duration-700"
              transition
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl dark:bg-zinc-950 dark:shadow-white/10">
                <div className="border-b border-b-zinc-200 px-4 sm:px-6 dark:border-b-zinc-800">
                  <div className="flex min-h-16 items-center justify-between space-x-3 py-1">
                    <DialogTitle
                      as={Link}
                      className="rounded-lg transition-transform duration-300 focus:outline-offset-8 focus:outline-zinc-800 active:scale-95 dark:focus:outline-zinc-100"
                      href="/"
                      onClick={() => onClose(false)}
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
                    </DialogTitle>
                    <div className="flex h-7 items-center">
                      <button
                        className="relative -mr-1 flex cursor-pointer items-center justify-center rounded-lg p-1 text-zinc-500 transition duration-300 hover:bg-zinc-600/5 hover:text-zinc-600 focus-visible:bg-zinc-600/5 focus-visible:text-zinc-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600 active:scale-95 active:bg-zinc-700/10 active:text-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-300/10 dark:hover:text-zinc-300 dark:focus-visible:bg-zinc-300/10 dark:focus-visible:text-zinc-300 dark:focus-visible:outline-zinc-300 dark:active:bg-zinc-200/15 dark:active:text-zinc-200"
                        onClick={() => onClose(false)}
                        title={t("Close the sidebar menu")}
                        type="button"
                      >
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">{t("Close the sidebar menu")}</span>
                        <svg aria-hidden="true" className="size-6 shrink-0" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path
                            clipRule="evenodd"
                            d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                            fillRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <nav className="flex-1 overflow-y-auto px-4 sm:px-6">
                  <ul className="space-y-1.5 py-3">
                    {[
                      {
                        items: [
                          { href: "/about", name: t("about us") },
                          { href: "/team", name: t("team") },
                          { href: "/contact", name: t("contact us") },
                          { href: "/helpdesk", name: t("helpdesk") },
                        ],
                        name: t("company"),
                      },
                      { name: t("projects"), href: "/projects" },
                      { name: t("blog"), href: "/blog" },
                    ].map((item, index) =>
                      item.items ? (
                        <SidebarNavigationDropdown
                          key={index}
                          onClick={() => setOpenIndex(index === openIndex ? null : index)}
                          open={index === openIndex}
                          {...item}
                        />
                      ) : (
                        <SidebarNavigationItem key={index} onClick={() => onClose(false)} {...item}>
                          {item.name}
                        </SidebarNavigationItem>
                      ),
                    )}
                  </ul>
                </nav>
                <div className="border-t border-zinc-200 px-4 sm:px-6 dark:border-zinc-800">
                  <div className="space-y-2 py-4">
                    <div className="truncate font-sans text-xs font-medium tracking-wide text-zinc-500 capitalize dark:text-zinc-400">
                      {t("Change language")}
                    </div>
                    <ul className="space-y-1">
                      {[
                        { key: "en", value: t("english") },
                        { key: "id", value: t("indonesian") },
                        { key: "ja", value: t("japanese") },
                      ].map((locale) => (
                        <li className="-mx-2 sm:-mx-3" key={locale.key}>
                          <button
                            className={`${locale.key === value ? "pointer-events-none cursor-default bg-zinc-800/10 font-semibold text-zinc-800 focus:outline-none dark:bg-zinc-100/15 dark:text-zinc-100" : "font-medium text-zinc-700 transition duration-300 hover:bg-zinc-800/5 hover:text-zinc-800 focus-visible:bg-zinc-800/5 focus-visible:text-zinc-800 focus-visible:outline-zinc-800 active:scale-98 active:bg-zinc-900/10 active:text-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-100/10 dark:hover:text-zinc-100 dark:focus-visible:bg-zinc-100/10 dark:focus-visible:text-zinc-100 dark:focus-visible:outline-zinc-100 dark:active:bg-zinc-50/15 dark:active:text-zinc-50"} relative flex w-full cursor-pointer items-center justify-between gap-x-1 truncate rounded-lg px-3 py-2 font-sans text-sm capitalize select-none`}
                            disabled={locale.key === value}
                            onClick={() => {
                              onClose(false);
                              setLocale(locale.key as Locale);
                            }}
                            type="button"
                          >
                            {locale.value}
                            <svg
                              aria-hidden="true"
                              className={`${locale.key === value ? "visible" : "invisible"} size-4 shrink-0`}
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
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
