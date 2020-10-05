import Head from "next/head";
import Footer from "../layouts/footer";

const IndexPage: React.FC<{}> = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="TuanPhan-Minshop" />
      </Head>
      <div>Hello next js</div>
      <Footer />
    </>
  );
};

export default IndexPage;
