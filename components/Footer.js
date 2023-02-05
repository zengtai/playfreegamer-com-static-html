import { SITE_META } from "@/lib/constants";
import Link from "next/link";

export default function Footer(params) {
  return (
    <footer className="site-footer">
      <nav>
        <ul>
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
      <p>
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
