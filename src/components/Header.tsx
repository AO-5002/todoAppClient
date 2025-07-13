import Navbar from "./Navbar/Navbar";

export default function Header() {
  return (
    <header className="w-full min-h-full col-start-2 col-end-4 row-start-1 p-8">
      <h1 className=" border-b font-extralight text-3xl tracking-wide">
        To-Do
      </h1>
      <Navbar />
    </header>
  );
}
