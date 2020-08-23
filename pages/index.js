import Head from "next/head";
import { HomeView } from "./home";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Github API based repository search" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <title>GitHub Light</title>
      </Head>
      <HomeView />
    </div>
  );
}
