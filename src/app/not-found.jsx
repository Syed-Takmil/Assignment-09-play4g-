



import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center bg-cover bg-center justify-center bg-green-950 text-white p-4"
      style={{
        backgroundImage:
          "url('/hero.jpg')",
      }}
      >

      <div className="text-center text-gray-400 font-extrabold text-xl max-w-xl">

        {/* Big 404 */}
        <h1 className="text-8xl font-bold text-black">
          404 Not Found!
        </h1>

        {/* Message */}
        <h2 className="text-2xl font-semibold mt-3">
         <span className="text-gray-600 font-bold"> Oops! You are </span> off the pitch
        </h2>

        <p className="text-gray-300 mt-2">
          <span className="text-black font-bold">
            The page 
            </span> you’re looking  for doesn't exist  <br />
          Time to get back in the game ⚽
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center mt-6">

          <Link
            href="/"
            className="btn bg-lime-500 hover:bg-lime-600 text-black font-semibold px-5 py-2 rounded-xl transition"
          >
            🏠 Back Home
          </Link>

          <Link
            href="/facilities"
            className="border btn border-lime-400 hover:bg-lime-500 hover:text-black px-5 py-2 rounded-xl transition"
          >
            ⚽ Browse Turf
          </Link>

        </div>

      </div>

    </div>
  );
}