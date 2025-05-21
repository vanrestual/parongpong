import Announcement from "@/app/(marketing)/Layout/Announcement";
import BackToTop from "@/app/(marketing)/Layout/BackToTop";
import Header from "@/app/(marketing)/Layout/Header";
import Sidebar from "@/app/(marketing)/Layout/Sidebar";
import MarketingProvider from "@/app/(marketing)/provider";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: {
    canonical: process.env.APP_URL,
  },
  description: "There's no such thing as waste, only material out of place",
  title: "Parongpong - Recycle and Waste LAB",
};

export default async function MarketingLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const cookie = await cookies();
  const t = await getTranslations("common");
  const tMarketingLayout = await getTranslations("MarketingLayout");
  const announcementShow = cookie.get("show-announcement")?.value !== "no";
  return (
    <MarketingProvider>
      {announcementShow ? <Announcement /> : null}
      <Header announcementShow={announcementShow} appName={process.env.APP_NAME} companyName={process.env.COMPANY_NAME} />
      <main className="flex grow flex-col">{children}</main>
      <footer className="border-t border-t-zinc-200 bg-white dark:border-t-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto space-y-12 px-4 py-16 lg:container lg:flex lg:justify-between lg:space-y-0 lg:space-x-16 lg:px-6 xl:space-x-24">
          <div className="max-w-md space-y-6 max-lg:mx-auto lg:max-w-xs xl:max-w-md">
            <div className="flex justify-center lg:justify-start">
              <Link
                className="rounded-lg transition-transform duration-300 focus:outline-offset-8 focus:outline-zinc-800 active:scale-95 dark:focus:outline-zinc-100"
                href="/"
              >
                <Image
                  alt={t("application logo", { name: process.env.APP_NAME ?? "Brand" })}
                  className="h-auto w-auto dark:invert"
                  height={44}
                  loading="eager"
                  src="/logo.png"
                  width={132}
                />
                <span className="sr-only">{process.env.COMPANY_NAME}</span>
              </Link>
            </div>
            <div className="space-y-4">
              <div className="group space-y-2">
                <div className="inline-flex space-x-2 text-zinc-600 dark:text-zinc-300">
                  <svg
                    aria-hidden="true"
                    className="my-px ml-px size-5 shrink-0 transition-colors duration-300 group-hover:text-rose-700 group-focus-visible:text-rose-700 group-active:text-rose-800 dark:group-hover:text-rose-600 dark:group-focus-visible:text-rose-600 dark:group-active:text-rose-700"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="font-sans text-sm/6 font-medium capitalize">{t("company addresses")}</span>
                </div>
                <ul className="space-y-1.5">
                  <li>
                    <a
                      className="inline-flex items-start space-x-3 text-zinc-500 transition-colors duration-300 hover:text-zinc-800 focus:outline-none focus-visible:text-zinc-800 active:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 dark:focus-visible:text-zinc-100 dark:active:text-zinc-50"
                      href="https://maps.app.goo.gl/7YJw6X1RGdsANhTN7"
                      target="_blank"
                    >
                      <svg
                        aria-hidden="true"
                        className="my-1 h-auto w-6 shrink-0 rounded-sm border border-zinc-100 shadow-sm dark:border-zinc-800 dark:shadow-white/10"
                        viewBox="0 0 640 480"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0h640v240H0Z" fill="#e70011" />
                        <path d="M0 240h640v240H0Z" fill="#fff" />
                      </svg>
                      <span className="font-sans text-base/7">
                        Jl. Linggawastu No. 17, RT 003 RW 017, Kel. Tamansari, Kec. Bandung Wetan, Kota Bandung 40116
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="inline-flex items-start space-x-3 text-zinc-500 transition-colors duration-300 hover:text-zinc-800 focus:outline-none focus-visible:text-zinc-800 active:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 dark:focus-visible:text-zinc-100 dark:active:text-zinc-50"
                      href="https://maps.app.goo.gl/rtvLfFPjf8BsFd5Y6"
                      target="_blank"
                    >
                      <svg
                        aria-hidden="true"
                        className="my-1 h-auto w-6 shrink-0 rounded-sm border border-zinc-100 shadow-sm dark:border-zinc-800 dark:shadow-white/10"
                        viewBox="0 0 640 480"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs>
                          <clipPath id="jp-a">
                            <path fillOpacity=".7" d="M-88 32h640v480H-88z" />
                          </clipPath>
                        </defs>
                        <g fillRule="evenodd" strokeWidth="1pt" clipPath="url(#jp-a)" transform="translate(88 -32)">
                          <path fill="#fff" d="M-128 32h720v480h-720z" />
                          <circle cx="523.1" cy="344.1" r="194.9" fill="#bc002d" transform="translate(-168.4 8.6)scale(.76554)" />
                        </g>
                      </svg>
                      <span className="font-sans text-base/7">Asagayaminami 1-27-2 Suginami-ku, Tokyo 166-0004</span>
                    </a>
                  </li>
                </ul>
              </div>
              <nav className="space-y-2">
                <div className="font-sans text-sm/6 font-medium text-zinc-600 dark:text-zinc-300">{tMarketingLayout("contact_description")}</div>
                <ul className="space-y-1.5">
                  <li>
                    <a
                      className="group inline-flex items-start space-x-3 text-zinc-500 transition-colors duration-300 hover:text-zinc-800 focus:outline-none focus-visible:text-zinc-800 active:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 dark:focus-visible:text-zinc-100 dark:active:text-zinc-50"
                      href="mailto:raditya.wachid@gmail.com?cc=info@parongpong.com"
                    >
                      <svg
                        aria-hidden="true"
                        className="my-1 ml-0.5 size-5 shrink-0 transition-colors duration-300 group-hover:text-sky-700 group-focus-visible:text-sky-700 group-active:text-sky-800 dark:group-hover:text-sky-600 dark:group-focus-visible:text-sky-600 dark:group-active:text-sky-700"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="font-sans text-base/7">info@parongpong.com</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="group inline-flex items-start space-x-3 text-zinc-500 transition duration-300 hover:text-zinc-800 focus:outline-none focus-visible:text-zinc-800 active:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 dark:focus-visible:text-zinc-100 dark:active:text-zinc-50"
                      href="https://wa.me/+6281903300017"
                      target="_blank"
                    >
                      <svg
                        aria-hidden="true"
                        className="my-1 ml-0.5 size-4.5 shrink-0 transition-colors duration-300 group-hover:text-emerald-700 group-focus-visible:text-emerald-700 group-active:text-emerald-800 dark:group-hover:text-emerald-600 dark:group-focus-visible:text-emerald-600 dark:group-active:text-emerald-700"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                      </svg>
                      <span className="font-sans text-base/7">+6281903300017</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="grid grow justify-items-center gap-y-8 sm:grid-cols-3 sm:gap-x-12 sm:gap-y-0">
            {[
              {
                items: [
                  { href: "/about", text: t("about us") },
                  { href: "/team", text: t("team") },
                  { href: "/projects", text: t("projects") },
                  { href: "/contact", text: t("contact us") },
                  { href: "/helpdesk", text: t("helpdesk") },
                  { href: "/career", text: t("career") },
                ],
                name: t("company"),
              },
              {
                items: [
                  { href: "/solutions/everyone", text: t("everyone") },
                  { href: "/solutions/business", text: t("business") },
                  { href: "/solutions/corporate", text: t("corporate") },
                  { href: "/solutions/government", text: t("government") },
                ],
                name: t("solutions"),
              },
              {
                items: [
                  { href: "/privacy-policy", text: t("privacy policy") },
                  { href: "/terms-and-conditions", text: t("terms & conditions") },
                  { href: "/data-attribution", text: t("data attribution") },
                  { href: "/cookie-policy", text: t("cookie policy") },
                ],
                name: t("legal"),
              },
            ].map((list) => (
              <div className="relative inline-block space-y-4" key={list.name}>
                <h2 className="text-center font-sans text-base/7 font-semibold text-zinc-600 uppercase lg:text-left dark:text-zinc-300">{list.name}</h2>
                <ul className="space-y-3">
                  {list.items.map((item) => (
                    <li className="text-center lg:text-left" key={item.text}>
                      <Link
                        className="font-sans text-base text-zinc-500 capitalize underline-offset-4 transition-colors duration-300 hover:text-zinc-800 hover:underline focus:outline-none focus-visible:text-zinc-800 focus-visible:underline active:text-zinc-900 active:underline dark:text-zinc-400 dark:hover:text-zinc-100 dark:focus-visible:text-zinc-100 dark:active:text-zinc-50"
                        href={item.href}
                      >
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="border-zinc-200 dark:border-zinc-800" />
        <div className="mx-auto flex flex-col items-center space-y-4 px-4 py-8 lg:container lg:flex-row lg:justify-between lg:space-y-0 lg:space-x-8 lg:px-6 lg:py-4">
          <div className="grow text-center font-sans text-sm text-zinc-500 lg:order-first lg:text-left dark:text-zinc-400">
            <span className="block capitalize xl:inline">
              &copy; {new Date().getFullYear()}{" "}
              <Link
                className="font-semibold text-zinc-600 transition duration-300 hover:text-zinc-800 focus:outline-none focus-visible:text-zinc-800 active:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100 dark:focus-visible:text-zinc-100 dark:active:text-zinc-50"
                href="/"
              >
                {process.env.APP_NAME}®
              </Link>
              . {t("all rights reserved")}
              <span className="xl:hidden">. </span>
            </span>
            <span className="hidden xl:inline"> | </span>
            <span className="block xl:inline">
              {tMarketingLayout("trademark", { legalName: "PT. Raesaka Amanah Widyakarya", name: process.env.APP_NAME + "®" })}.
            </span>
          </div>
          <div className="order-first flex items-center space-x-4">
            <span className="font-sans text-sm font-medium text-zinc-500 dark:text-zinc-400">{t("Follow us on")}</span>
            <nav className="flex items-stretch space-x-3">
              <a
                className="text-zinc-500 transition-colors duration-300 hover:text-[#1877f2] focus:outline-none focus-visible:text-[#1877f2] active:text-zinc-700 dark:text-zinc-400 dark:active:text-zinc-200"
                href="https://www.facebook.com/parongpong.raw"
                target="_blank"
              >
                <svg aria-hidden="true" className="size-5 shrink-0" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>
                <span className="sr-only">{t("Facebook Page")}</span>
              </a>
              <a
                className="text-zinc-500 transition-colors duration-300 hover:text-[#e1306c] focus:outline-none focus-visible:text-[#e1306c] active:text-zinc-700 dark:text-zinc-400 dark:active:text-zinc-200"
                href="https://www.instagram.com/parong.pong"
                target="_blank"
              >
                <svg aria-hidden="true" className="size-5 shrink-0" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                </svg>
                <span className="sr-only">{t("Instagram Account")}</span>
              </a>
              <a
                className="text-zinc-500 transition-colors duration-300 hover:text-[#0077b5] focus:outline-none focus-visible:text-[#0077b5] active:text-zinc-700 dark:text-zinc-400 dark:active:text-zinc-200"
                href="https://www.linkedin.com/company/parongpong-raw-lab"
                target="_blank"
              >
                <svg aria-hidden="true" className="size-5 shrink-0" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
                <span className="sr-only">{t("LinkedIn Account")}</span>
              </a>
            </nav>
          </div>
          <BackToTop title={t("Back to top")} />
        </div>
      </footer>
      <Sidebar appName={process.env.APP_NAME} companyName={process.env.COMPANY_NAME} />
    </MarketingProvider>
  );
}
