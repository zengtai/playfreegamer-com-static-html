import Footer from "./Footer";
import Header from "./Header";
import SearchPanel from "./SearchPanel";
import { Nunito } from "@next/font/google";
const nunito = Nunito({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <>
      <SearchPanel />
      <div className={"flex min-h-screen flex-col " + nunito.className}>
        <Header />
        <main className="main grow bg-gradient-to-t from-rose-50 to-white">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
