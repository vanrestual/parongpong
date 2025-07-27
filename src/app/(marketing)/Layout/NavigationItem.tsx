"use client";

import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type PropsWithChildren } from "react";

export default function NavigationItem(props: PropsWithChildren<LinkProps>) {
  const pathname = usePathname();
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (pathname) {
      const activePathname = new URL(pathname, location.href).pathname;
      const linkPathname = new URL(props.as ? props.as.toString() : props.href.toString(), location.href).pathname;
      setActive(activePathname === linkPathname || activePathname.startsWith(linkPathname));
    }
  }, [pathname, props.as, props.href]);
  return (
    <li className="relative flex items-center">
      <Link
        className={`${active ? "pointer-events-none bg-zinc-900 text-zinc-50 select-none focus:outline-none dark:bg-zinc-50 dark:text-zinc-900" : "text-zinc-700 transition duration-300 hover:bg-zinc-800/5 hover:text-zinc-800 focus-visible:bg-zinc-800/5 focus-visible:text-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-800 active:scale-95 active:bg-zinc-900/10 active:text-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-100/10 dark:hover:text-zinc-100 dark:focus-visible:bg-zinc-100/10 dark:focus-visible:text-zinc-100 dark:focus-visible:outline-zinc-100 dark:active:bg-zinc-50/15 dark:active:text-zinc-50"} flex items-center justify-center rounded-lg px-5 py-2.5 font-sans text-sm font-semibold whitespace-nowrap capitalize`}
        {...props}
      />
    </li>
  );
}
