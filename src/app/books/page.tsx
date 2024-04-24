import Navbar from "../components/Navbar"

const books =() => {
  return (
    <main className="bg-teal-500 h-screen text-teal-100">
        <div className="flex justify-around px-96 pt-40">
            <div className="">
                <button className="bg-teal-700 rounded-2xl px-10 py-2 font-semibold text-3xl hover:bg-teal-600 cursor-pointer">New Book</button>
                <button className="bg-teal-500 rounded-2xl px-10 py-2 font-semibold text-3xl hover:cursor-pointer hover:underline underline-offset-8">+ Create New Book</button>
            </div>

        </div>
    </main>
  )
}

export default books;