"use client";

import { Transition } from "@headlessui/react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useState } from "react";

export default function ThemeSwitch() {
  const [open, setOpen] = useState(false);
  const { setTheme, theme } = useTheme();
  const t = useTranslations("common");
  let icon = (
    <svg
      aria-hidden="true"
      className="size-6 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  let label = t("system preferences");
  if (theme === "dark") {
    icon = (
      <svg
        aria-hidden="true"
        className="size-6 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
    label = t("dark mode");
  } else if (theme === "light") {
    icon = (
      <svg
        aria-hidden="true"
        className="size-6 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
    label = t("light mode");
  }
  return (
    <div className="relative inline-block">
      <button
        className="flex cursor-pointer items-center justify-center rounded-xl bg-zinc-100 p-2 text-zinc-700 capitalize transition duration-300 hover:bg-zinc-800/10 hover:text-zinc-800 focus-visible:bg-zinc-800/10 focus-visible:text-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-800 active:scale-95 active:bg-zinc-900/15 active:text-zinc-900 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-100/15 dark:hover:text-zinc-100 dark:focus-visible:bg-zinc-100/15 dark:focus-visible:text-zinc-100 dark:focus-visible:outline-zinc-100 dark:active:bg-zinc-50/20 dark:active:text-zinc-50"
        onClick={() => {
          if (theme === "system") setTheme("dark");
          else if (theme === "dark") setTheme("light");
          else setTheme("system");
        }}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {icon}
        <span className="sr-only">{label}</span>
      </button>
      <Transition show={open}>
        <div className="absolute top-full -right-2 flex translate-y-3 items-center justify-center rounded-lg bg-zinc-950 px-5 py-2.5 text-sm font-semibold whitespace-nowrap text-white capitalize transition-opacity data-closed:opacity-0 data-enter:delay-500 data-enter:duration-200 data-enter:ease-in data-leave:duration-300 data-leave:ease-out md:-right-3 dark:bg-zinc-50 dark:text-zinc-950">
          {label}
        </div>
      </Transition>
    </div>
  );
}
