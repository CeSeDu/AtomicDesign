import MainTemplate from "@/components/templates/MainTemplate";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Atomic Design Example</title>
      </Head>
      <MainTemplate>
        <h1 className='grid gap-4 items-center mt-12 justify-center'>Welcome to My Site</h1>
      </MainTemplate>
    </div>
  );
}
