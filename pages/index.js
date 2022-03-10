import Head from "next/head";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../components/Map"), {
  loading: () => "Loading...",
  ssr: false,
});
const Index = () => {
  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Map />
      hello
    </div>
  );
};

export default Index;
