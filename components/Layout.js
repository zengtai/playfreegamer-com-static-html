import Footer from "./Footer";
import Header from "./Header";
import { Nunito } from "@next/font/google";
const nunito = Nunito({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <div className={"flex flex-col min-h-screen " + nunito.className}>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
}
