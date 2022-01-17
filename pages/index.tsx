import styles from "../styles/Home.module.css";
import type { NextPage } from "next";
import Head from "next/head";
import useSWR from "swr";
import { fetcher } from "../utils";
import { BarChart } from "../components";

const Home: NextPage = () => {
  const { data, error } = useSWR("/api/notion", fetcher);

  const renderContent = () => {
    if (!data) return <h1>Loading...</h1>;
    if (error) return <h1>Failed to load</h1>;
    return <BarChart data={data.results} labelX="Month" labelY="Revenue" />;
  };

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

      <div className={styles.container}>{renderContent()}</div>
    </div>
  );
};

export default Home;
