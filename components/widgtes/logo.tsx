import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href={"/"}
      className="uppercase font-black text-white flex items-center text-lg"
    >
      <span className="bg-white text-black w-4 h-4 flex items-center justify-center rounded mr-px">
        S
      </span>
      lider
    </Link>
  );
};

export default Logo;
