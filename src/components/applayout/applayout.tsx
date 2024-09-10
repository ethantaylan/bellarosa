import { PropsWithChildren } from "react";
import Navbar from "../navbar/navbar";

export default function Applayout({ children }: PropsWithChildren) {
  return (
    <main className="h-screen">
      <header className="bg-white">
        <Navbar />
      </header>

      {children}

      <footer></footer>
    </main>
  );
}
