"use client";

import Image from "next/image";

export default function MathComic() {
  return (
    <div className="min-h-screen">
      <center>
        {[...Array(12)].map((e, i) => {
          const imgSrc = `/comic/gara-gara-matematika-ep1-slide${i + 1}.webp`;
          return <Image src={imgSrc} width={800} height={900} key={i} />;
        })}
      </center>
    </div>
  );
}
