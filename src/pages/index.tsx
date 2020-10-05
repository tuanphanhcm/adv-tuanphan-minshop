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
        type={""}
        deviceType={{ desktop: true, mobile: "", tablet: "" }}
      />
      <div>Hello next js</div>
      <Footer />
    </>
  );
};

export default IndexPage;
