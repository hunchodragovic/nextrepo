import { log } from "console";
import Hello from "./components/Hello";
import Link from "next/link";

export default function Home() {
  log("Hello,gggg world!");
  return (
    <>
      <Hello />
      <h1 className="text-violet-500 font-bold text-4xl">Welcome to next</h1>
      <h2>Hello, world!</h2>
      <h2>Wow</h2>
      <Link href="/dashboard">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
          Dashboard
        </button>
      </Link>
    </>
  );
}
