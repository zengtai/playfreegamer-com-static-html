import { SITE_META } from "@/lib/constants";
import Link from "next/link";

export default function Footer(params) {
  return (
    <footer className="site-footer border-t border-t-rose-200 bg-rose-400 text-center text-sm text-white">
      <nav className="border-b border-b-black/10">
        <ul className="grid grid-cols-2 gap-x-8 gap-y-4 p-4 text-white drop-shadow xl:flex xl:justify-center">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link referrerPolicy="no-referrer" href="/privacy-policy">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link referrerPolicy="no-referrer" href="/terms-of-use">
              Terms of Use
            </Link>
          </li>
        </ul>
      </nav>
      <p className="m-4 flex justify-center gap-2 pb-4 text-xs text-red-900/80">
        <span
          dangerouslySetInnerHTML={{
            __html: `&copy; ${new Date().getFullYear()} ${SITE_META.NAME}.`,
          }}
        ></span>
        <span>All Rights Reserved</span>
      </p>
    </footer>
  );
}
