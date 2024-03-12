import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-white sticky top-0 border-b-2 border-gray-300 px-5 py-2 md:py-0 items-center z-10">
      <div className={"flex justify-between max-w-[1280px] mx-auto"}>
        <div className={"flex items-center space-x-5"}>
          <Link href={"/"}>
            <h1 className={"text-2xl font-bold"}>Nuraini Comic</h1>
          </Link>

          <div className={"flex space-x-4 items-stretch"}></div>
        </div>
        <div className={"flex items-center space-x-2"}>
          <button
            className={
              "bg-teal-600 text-white rounded-full flex justify-between items-center space-x-3 pl-2 py-1.5 pr-4"
            }
          >
            <div>
              <Image
                src={"/image/no_pfp.png"}
                alt={"no pfp pic"}
                width={30}
                height={30}
              />
            </div>
            <div>Log In</div>
          </button>
        </div>
      </div>
    </div>
  );
}
