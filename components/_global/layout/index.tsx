import React from "react";
import { Product } from "../../../services/api-service";
import Main from "./main";
import Navigation from "./navigation";
import Head from "next/head";
type LayoutProps = {
  data?: Product[];
  loading?: boolean;
};

export default function Layout({ data, loading }: LayoutProps) {
  return (
    <div>
      <Head>
        <title>Reaktor example</title>
      </Head>
      <Navigation />
      <Main data={data} loading={loading} />
    </div>
  );
}
