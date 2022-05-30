import React from "react";
import CardHome from "../../src/components/CardPage";
import { apiKey } from "../../src/config/apiKey";

export async function getStaticPaths() {
  const res = await fetch(`${apiKey}`);
  const data = await res.json();

  const paths = data.map((currentCard) => {
    return {
      params: { id: currentCard.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const res = await fetch(`${apiKey}/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

function Details({ data }) {
  return (
    <>
      <div>
        <CardHome data={data} />
      </div>
    </>
  );
}
export default Details;
