import Head from "next/head";
import Header from "../Header/Header.component";
import Footer from "../footer/footer.component";

interface Props {
  title: any;
  children: any;
  keywords: any;
  description: any;
}

const Layout = ({ title, children, keywords, description }: Props) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Welcome to Suci",
  keywords: "development, coding, programming",
  description: "The best info and news in the blockchain space",
};

export default Layout;
