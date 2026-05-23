


import { FaShieldAlt, FaClock, FaStar } from "react-icons/fa";

export default function StaticSection() {
  return (
    <section className="p-10 bg-base-200 mt-10 rounded-3xl">
      <h2 className="text-4xl font-bold text-center mb-10">
        Why Choose Us
      </h2>

      <div className="grid md:grid-cols-3 gap-6 text-center">
        <div className="p-6 bg-base-100 rounded-2xl shadow">
          <FaShieldAlt className="text-4xl mx-auto text-primary" />
          <h3 className="text-xl font-bold mt-3">      Trusted & Secure
             </h3>
          <p>Safe booking system with verified facilities.</p>
        </div>
 <div className="p-6 bg-base-100 rounded-2xl shadow">
          <FaClock className="text-4xl mx-auto text-primary" />
          <h3 className="text-xl font-bold mt-3">
    Fast Booking
          </h3>
  <p>Book your turf or court in under 1 minute.</p>
        </div>

        <div className="p-6 bg-base-100 rounded-2xl shadow">
          <FaStar className="text-4xl mx-auto text-primary" />
          <h3 className="text-xl font-bold mt-3">
            Top Rated
         </h3>
          <p>Best rated sports facilities in your area.</p>
        </div>
      </div>
    </section>
  );
}