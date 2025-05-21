"use client";

export default function BackToTop({ title }: { title: string }) {
  return (
    <button
      className="group flex cursor-pointer items-center justify-center gap-x-2 rounded-lg border border-zinc-200 px-4 py-2 text-center font-sans text-sm font-semibold text-zinc-600 transition-colors duration-300 hover:bg-zinc-700/5 hover:text-zinc-700 focus-visible:bg-zinc-700/5 focus-visible:text-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-700 active:bg-zinc-800/10 active:text-zinc-800 lg:rounded-xl lg:px-2 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-200/10 dark:hover:text-zinc-200 dark:focus-visible:bg-zinc-200/10 dark:focus-visible:text-zinc-200 dark:focus-visible:outline-zinc-200 dark:active:bg-zinc-100/15 dark:active:text-zinc-100"
      onClick={() => window.scrollTo({ behavior: "smooth", top: 0 })}
      title={title}
      type="button"
    >
      <svg
        aria-hidden="true"
        className="-ml-1 size-5 shrink-0 translate-y-px transition duration-300 group-hover:-translate-y-px group-focus-visible:-translate-y-px group-active:-translate-y-0 lg:ml-0"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M10 18a.75.75 0 0 1-.75-.75V4.66L7.3 6.76a.75.75 0 0 1-1.1-1.02l3.25-3.5a.75.75 0 0 1 1.1 0l3.25 3.5a.75.75 0 1 1-1.1 1.02l-1.95-2.1v12.59A.75.75 0 0 1 10 18Z"
          fillRule="evenodd"
        />
      </svg>
      <span className="lg:sr-only">{title}</span>
    </button>
  );
}
