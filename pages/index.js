import React from "react";
import CardHome from "../src/components/Home/index";
import { apiKey } from "../src/config/apiKey";

function Home({ data }) {
  // console.log(dataCount);
  return (
    <>
      <CardHome data={data} />
    </>
  );
}

export default Home;

export async function getStaticProps() {
  const res = await fetch(`${apiKey}?limit=3`);
  const data = await res.json();

  // const getDataCount = await fetch(`${apiKey}/count`);
  // const dataCount = await getDataCount.json();

  return {
    props: {
      data,
      // dataCount,
    },
  };
}
