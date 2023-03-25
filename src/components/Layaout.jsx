import Head from "next/head";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

export default function Layaout({ children, title }) {
  return (
    <div>
      <Head>
        <title> {title}</title>
        <Navbar />
      </Head>
      <main>{children}</main>
      <Footer />
    </div>
  );
}

Layaout.defaultProps = {
  title: "Next.js | mi sitio web",
};
