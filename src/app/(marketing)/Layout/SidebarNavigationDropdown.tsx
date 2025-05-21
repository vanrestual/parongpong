"use client";

import { MarketingContext } from "@/app/(marketing)/provider";
import { CloseButton, Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import clsx from "clsx";
import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { use, useEffect, useRef, useState, type MouseEventHandler } from "react";

type Item = { name: string } & LinkProps;

function Item(item: Item) {
  const { setSidebarOpen: onClose } = use(MarketingContext);
  const pathname = usePathname();
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (pathname) {
      setActive(new URL(pathname, location.href).pathname === new URL(item.as ? item.as.toString() : item.href.toString(), location.href).pathname);
    }
  }, [item.as, item.href, pathname]);
  return (
    <li className="group ml-2 first:mt-1.5 last:mb-1.5 sm:ml-3">
      <CloseButton
        as={Link}
        className={`${active ? "pointer-events-none bg-zinc-900 text-zinc-50 select-none focus:outline-none dark:bg-zinc-50 dark:text-zinc-900" : "text-zinc-700 transition duration-300 hover:bg-zinc-800/5 hover:text-zinc-800 focus-visible:bg-zinc-800/5 focus-visible:text-zinc-800 focus-visible:outline-zinc-800 active:scale-98 active:bg-zinc-900/10 active:text-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-100/10 dark:hover:text-zinc-100 dark:focus-visible:bg-zinc-100/10 dark:focus-visible:text-zinc-100 dark:focus-visible:outline-zinc-100 dark:active:bg-zinc-50/15 dark:active:text-zinc-50"} block truncate rounded-lg px-3 py-1.5 font-sans text-sm font-semibold capitalize`}
        href={item.href}
        onClick={() => onClose(false)}
      >
        {item.name}
      </CloseButton>
    </li>
  );
}

export default function SidebarNavigationDropdown(props: {
  items: ({ name: string } & LinkProps)[];
  name: string;
  open: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  const pathname = usePathname();
  const panelRef = useRef<HTMLUListElement | null>(null);
  const [activeDropdown, setActiveDropdown] = useState(false);
  const [panelHeight, setPanelHeight] = useState(0);
  useEffect(() => {
    if (panelRef.current) {
      setPanelHeight(props.open ? panelRef.current.scrollHeight : 0);
    }
  }, [props.open]);
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
    <Disclosure as="li" className="group -mx-2 sm:-mx-3" defaultOpen={activeDropdown}>
      <DisclosureButton
        className={clsx(
          activeDropdown
            ? props.open
              ? "bg-zinc-800 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-800"
              : "bg-zinc-900 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-900"
            : props.open
              ? "bg-zinc-800/10 text-zinc-800 dark:bg-zinc-100/15 dark:text-zinc-100"
              : "text-zinc-700 hover:bg-zinc-800/5 hover:text-zinc-800 focus-visible:bg-zinc-800/5 focus-visible:text-zinc-800 focus-visible:outline-zinc-800 active:bg-zinc-900/10 active:text-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-100/10 dark:hover:text-zinc-100 dark:focus-visible:bg-zinc-100/10 dark:focus-visible:text-zinc-100 dark:focus-visible:outline-zinc-100 dark:active:bg-zinc-50/15 dark:active:text-zinc-50",
          "flex w-full cursor-pointer items-center justify-between gap-x-1 truncate rounded-lg px-3 py-2 font-sans text-sm font-semibold capitalize transition duration-300 focus:not-data-focus:outline-none active:scale-98",
        )}
        onClick={props.onClick}
      >
        {props.name}
        <svg
          aria-hidden="true"
          className={`${props.open ? "-rotate-180" : "rotate-0"} size-5 shrink-0 transform transition-transform duration-300`}
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
      </DisclosureButton>
      <DisclosurePanel
        as="ul"
        className={`space-y-1 overflow-hidden transition-[max-height] duration-300`}
        ref={panelRef}
        static
        style={{ maxHeight: props.open ? panelHeight : 0 }}
      >
        {props.items.map((item) => (
          <Item key={item.name} {...item} />
        ))}
      </DisclosurePanel>
    </Disclosure>
  );
}
