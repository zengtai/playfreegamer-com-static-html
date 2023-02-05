import Footer from "./Footer";
import Header from "./Header";
import SearchPanel from "./SearchPanel";
import { Nunito } from "@next/font/google";
import { useState, useEffect } from "react";
const nunito = Nunito({ subsets: ["latin"] });

export default function Layout({ children }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      if (window.pageYOffset > 200) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    return () => {
      window.onscroll = null;
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <>
      <SearchPanel />
      <div className={"flex min-h-screen flex-col " + nunito.className}>
        <Header />
        <main className="main grow bg-gradient-to-t from-rose-50 to-white">
          {children}
        </main>
        <Footer />
        <button
          onClick={scrollToTop}
          className={`fixed right-2 bottom-2 z-10 ${
            showScrollTop ? `grid` : `hidden`
          } h-12 w-12 content-center justify-center rounded-full bg-rose-500/50 text-white`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
