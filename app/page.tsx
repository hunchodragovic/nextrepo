import { log } from "console";
import Hello from "./components/Hello";

export default function Home() {
  log("Hello, world!");
  return (
    <>
      <Hello />
      <h1 className="text-violet-500 font-bold text-4xl">Welcome to next</h1>
      <h2>Hello, world!</h2>
      <h2>Wow</h2>
    </>
  );
}
