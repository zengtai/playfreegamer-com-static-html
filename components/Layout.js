import Footer from "./Footer";
import Header from "./Header";
import { Nunito } from "@next/font/google";
const nunito = Nunito({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <div className={"flex min-h-screen flex-col " + nunito.className}>
      <Header />
      <main className="main grow">{children}</main>
      <Footer />
    </div>
  );
}
