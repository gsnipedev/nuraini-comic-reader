import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="container mx-auto min-h-screen">
        <div className="flex justify-center">
          <img src={"/comic/comic_banner.png"} width={800} height={400} />
        </div>

        <div className="flex justify-center -translate-y-5">
          <Link href={"/read/gara-gara-matematika"}>
            <button className="bg-cyan-600 text-white px-6 py-3 rounded-md border-4 border-slate-100">
              Baca Sekarang
            </button>
          </Link>
        </div>

        <br />

        <div className="flex flex-col items-center px-5">
          <div className="w-full max-w-3xl space-y-3">
            <div className="font-bold text-lg">Tentang Komik Ini</div>
            <p>
              Komik matematika berbasis Web (Mathematics Webtoon) berisi
              materi-materi matematika yang dikemas dalam cerita menarik
              bergambar kartun.
            </p>

            <br />

            <div className="font-bold text-lg">Author</div>
            <p>Nuraini Sri Bina</p>
          </div>
        </div>
      </div>
    </>
  );
}
