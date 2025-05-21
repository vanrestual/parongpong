"use client";

import { CloseButton, Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ForwardRefExoticComponent, type RefAttributes, type SVGProps } from "react";

type Item = {
  description?: string;
  icon: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & { title?: string; titleId?: string } & RefAttributes<SVGSVGElement>>;
  name: string;
} & LinkProps;

function Item(item: Item) {
  const pathname = usePathname();
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (pathname) {
      setActive(new URL(pathname, location.href).pathname === new URL(item.as ? item.as.toString() : item.href.toString(), location.href).pathname);
    }
  }, [item.as, item.href, pathname]);
  return item.description ? (
    <CloseButton
      as={Link}
      className={`${active ? "pointer-events-none bg-zinc-900 select-none focus:outline-none dark:bg-zinc-50" : "transition duration-300 hover:bg-zinc-800/5 focus-visible:bg-zinc-800/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-800 active:scale-95 active:bg-zinc-900/10 dark:hover:bg-zinc-100/10 dark:focus-visible:bg-zinc-100/10 dark:focus-visible:outline-zinc-100 dark:active:bg-zinc-50/15"} group relative flex items-center space-x-3 rounded-xl p-3`}
      href={item.href}
      key={item.name}
    >
      <div
        className={`${active ? "bg-zinc-50 dark:bg-zinc-900" : "border-zinc-100 transition-colors duration-300 group-hover:border-zinc-200 group-hover:bg-white group-focus-visible:border-zinc-200 group-focus-visible:bg-white group-active:border-zinc-50 group-active:bg-white dark:border-zinc-800 dark:group-hover:border-zinc-700 dark:group-hover:bg-zinc-950 dark:group-focus-visible:border-zinc-700 dark:group-focus-visible:bg-zinc-950 dark:group-active:border-zinc-900 dark:group-active:bg-zinc-950"} flex size-10 shrink-0 items-center justify-center rounded-xl border`}
      >
        <item.icon
          aria-hidden="true"
          className={`${active ? "text-zinc-900 dark:text-zinc-50" : "text-zinc-700 transition-colors duration-300 group-hover:text-zinc-800 group-focus-visible:text-zinc-800 group-active:text-zinc-900 dark:text-zinc-200 dark:group-hover:text-zinc-100 dark:group-focus-visible:text-zinc-100 dark:group-active:text-zinc-50"} size-6 shrink-0`}
        />
      </div>
      <div className="flex-auto">
        <div
          className={`${active ? "text-zinc-200 dark:text-zinc-700" : "text-zinc-700 group-hover:text-zinc-800 group-focus-visible:text-zinc-800 group-active:text-zinc-900 dark:text-zinc-200 dark:group-hover:text-zinc-100 dark:group-focus-visible:text-zinc-100 dark:group-active:text-zinc-50"} block truncate font-sans text-sm font-semibold capitalize`}
        >
          {item.name}
          <span className="absolute inset-0" />
        </div>
        <p
          className={`${active ? "text-zinc-400 dark:text-zinc-500" : "text-zinc-500 group-hover:text-zinc-600 group-focus-visible:text-zinc-600 group-active:text-zinc-700 dark:text-zinc-400 dark:group-hover:text-zinc-300 dark:group-focus-visible:text-zinc-300 dark:group-active:text-zinc-200"} truncate font-sans text-sm/6`}
        >
          {item.description}
        </p>
      </div>
    </CloseButton>
  ) : (
    <CloseButton
      as={Link}
      className={`${active ? "pointer-events-none bg-zinc-800 text-zinc-100 select-none dark:bg-zinc-100 dark:text-zinc-800" : "text-zinc-600 transition-colors duration-300 hover:bg-zinc-700/5 hover:text-zinc-700 focus-visible:bg-zinc-700/5 focus-visible:text-zinc-700 active:bg-zinc-800/10 active:text-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-200/10 dark:hover:text-zinc-200 dark:focus-visible:bg-zinc-200/10 dark:focus-visible:text-zinc-200 dark:active:bg-zinc-100/15 dark:active:text-zinc-100"} relative flex items-center justify-center gap-x-2 px-2 py-3 text-center font-sans text-sm font-medium capitalize focus:outline-none`}
      href={item.href}
      key={item.name}
    >
      <item.icon aria-hidden="true" className="size-5 shrink-0" />
      {item.name}
    </CloseButton>
  );
}

export default function NavigationDropdown(props: { items: Item[]; name: string }) {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState(false);
  useEffect(() => {
    if (pathname) {
      setActiveDropdown(
        props.items.some(
          (item) => new URL(pathname, location.href).pathname === new URL(item.as ? item.as.toString() : item.href.toString(), location.href).pathname,
        ),
      );
    }
  }, [pathname, props.items]);
  return (
    <Popover as="li" className="group relative flex items-center">
      <PopoverButton
        className={`${activeDropdown ? "bg-zinc-900 text-zinc-50 data-open:bg-zinc-800 data-open:text-zinc-100 dark:bg-zinc-50 dark:text-zinc-900 dark:data-open:bg-zinc-100 dark:data-open:text-zinc-800" : "text-zinc-700 hover:bg-zinc-800/5 hover:text-zinc-800 focus-visible:bg-zinc-800/5 focus-visible:text-zinc-800 focus-visible:outline-zinc-800 active:bg-zinc-900/10 active:text-zinc-900 data-open:bg-zinc-800/10 data-open:text-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-100/10 dark:hover:text-zinc-100 dark:focus-visible:bg-zinc-100/10 dark:focus-visible:text-zinc-100 dark:focus-visible:outline-zinc-100 dark:active:bg-zinc-50/15 dark:active:text-zinc-50 dark:data-open:bg-zinc-100/15 dark:data-open:text-zinc-100"} flex cursor-pointer items-center justify-center gap-x-1 rounded-lg px-5 py-2.5 font-sans text-sm font-semibold whitespace-nowrap capitalize transition duration-300 focus:not-data-focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-95`}
      >
        {props.name}
        <svg
          aria-hidden="true"
          className="-mr-1.5 size-5 shrink-0 transform transition-transform duration-300 group-data-open:-rotate-180"
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
      </PopoverButton>
      <PopoverPanel
        className="absolute top-full left-1/2 z-10 flex w-screen max-w-max -translate-x-1/2 flex-col px-4 data-closed:translate-y-2.5 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-150 data-leave:ease-in md:px-6"
        transition
      >
        <div className="w-screen max-w-xs flex-auto divide-y divide-zinc-900/10 overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-zinc-950/5 dark:divide-zinc-50/15 dark:bg-zinc-950 dark:shadow-white/10 dark:ring-white/10">
          <div className="space-y-1 px-2 py-3">{props.items.map((item) => (item.description ? <Item key={item.name} {...item} /> : null))}</div>
          <div className="grid grid-cols-2 divide-x divide-zinc-900/5 bg-zinc-50 dark:divide-zinc-50/10 dark:bg-zinc-900">
            {props.items.map((item) => (!item.description ? <Item key={item.name} {...item} /> : null))}
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  );
}
