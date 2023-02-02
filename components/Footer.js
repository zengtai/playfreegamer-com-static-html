import { SITE_META } from "@/lib/constants";

export default function Footer(params) {
  return (
    <footer className="site-footer bg-cyan-600 text-sm text-white">
      <nav className="bg-cyan-700">
        <ul className="xl:flex grid grid-cols-2 justify-center gap-x-8 gap-y-4 xl:p-2 p-4 text-cyan-100 drop-shadow">
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
      <p className="flex gap-2 m-4 opacity-50 drop-shadow justify-center">
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
