



import { FaSearch, FaCalendarCheck, FaSmile } from "react-icons/fa";

export default function StaticSection2() {
  return (
    <section className="p-10 mt-10">
      <h2 className="text-4xl font-bold text-center mb-10">
        How It Works
      </h2>

      <div className="grid md:grid-cols-3 gap-6 text-center">
        <div className="p-6 border rounded-2xl">
          <FaSearch className="text-4xl mx-auto text-primary" />
          <h3 className="font-bold mt-3">Search Facility</h3>
          <p>Find your favorite sports ground easily.</p>
        </div>

        <div className="p-6 border rounded-2xl">
          <FaCalendarCheck className="text-4xl mx-auto text-primary" />
          <h3 className="font-bold mt-3">Book Slot</h3>
          <p>Choose time and confirm your booking instantly.</p>
        </div>

        <div className="p-6 border rounded-2xl">
          <FaSmile className="text-4xl mx-auto text-primary" />
          <h3 className="font-bold mt-3">Enjoy Play</h3>
          <p>Go and enjoy your game hassle-free.</p>
        </div>
      </div>
    </section>
  );
}