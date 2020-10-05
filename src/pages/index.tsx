import Head from "next/head";
import Footer from "layouts/footer";
import SidebarCategory from "layouts/sidebar/sidebar";

const IndexPage: React.FC<{}> = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="TuanPhan-Minshop" />
      </Head>
      <SidebarCategory
        type={"grocery"}
        deviceType={{ desktop: true, mobile: "", tablet: "" }}
      />
      <Footer />
    </>
  );
};

export default IndexPage;
