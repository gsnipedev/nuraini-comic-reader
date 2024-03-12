import Image from "next/image";

export default function Footer() {
  return (
    <div className=" bg-white w-full border-t-2 border-gray-300 divide-y divide-gray-400">
      <center>
        <div className="max-w-2xl flex items-center justify-center gap-6">
          <Image src={"/image/salute.png"} width={100} height={100} />
          <p className="max-w-60">
            <b>Nantikan komik gratis lainnya hanya di sini!</b>
          </p>
        </div>
      </center>
      <div className="space-y-2 py-5">
        <p className="text-center font-black text-xl">Nuraini Comic</p>
        <p className="text-center text-gray-500">
          @2024 Nuraini Comic. All right reserved.
        </p>
      </div>
    </div>
  );
}
