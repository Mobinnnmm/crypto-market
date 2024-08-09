import Search from "./search";
import { useRouter } from "next/router";

export default function GettingStarted() {
    const router = useRouter();
    return (
      <div>
        <h1>Todo: Design the getting started page.</h1>
        <ul> Create a custom welcome image</ul>
        <ul> Calls the existing components </ul>
        <ul> Implement animated UI</ul>
        <Search />

        <button onClick={() => router.push("/login")}>Login</button>
        <button onClick={() => router.push("/signup")}>Signup</button>
      </div>
    );
  
}