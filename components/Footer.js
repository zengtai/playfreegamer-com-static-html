import { SITE_META } from "@/lib/constants";

export default function Footer(params) {
  return (
    <footer className="site-footer border-t border-t-rose-200 bg-rose-400 text-sm text-white">
      <nav className="border-b border-b-black/10">
        <ul className="grid grid-cols-2 justify-center gap-x-8 gap-y-4 p-4 text-white drop-shadow xl:flex">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Use</a>
          </li>
        </ul>
      </nav>
      <p className="m-4 flex gap-2 text-xs text-white/80 drop-shadow xl:justify-center">
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
