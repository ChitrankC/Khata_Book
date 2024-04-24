import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-teal-500 h-screen">
      <nav className="text-teal-100">
        <div>
          <h1 className="flex justify-center pt-20 pb-10 text-6xl font-bold ">Welcome to KhataBook</h1>
        </div>
        <div className="Button flex justify-center">
            <Link href="/books"><button className="bg-teal-700 rounded-2xl px-36 mx-2 py-16 text-3xl font-semibold hover:bg-teal-600 ">Create Book</button></Link>
            <Link href="/books"><button className="bg-teal-700 rounded-2xl px-40 mx-2 py-16 text-3xl font-semibold hover:bg-teal-600 ">My Books</button></Link>
        </div>
      </nav>
    </main>
  );
}
