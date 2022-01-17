import type { NextPage } from "next";
import Head from "next/head";
import useSWR from "swr";
import { fetcher } from "../utils";

const Home: NextPage = () => {
  const { data, error } = useSWR("/api/notion", fetcher);
  console.log(data);

  return (
    <div>
      <Head>
        <title>Notiolize</title>
        <meta
          name="description"
          content="Dead simple data visualization for Notion."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default Home;
