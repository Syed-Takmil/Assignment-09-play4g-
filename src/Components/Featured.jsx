


import Link from "next/link";
import Image from "next/image";

export default async function Featured() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/facilities`,
    { cache: "no-store" }
  );

  const facilities = await res.json();

  const featured = facilities.slice(0, 3);

  return (
    <section className="p-10">
      <h2 className="text-4xl font-bold text-center mb-10">
        Featured Facilities
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {featured.map((item) => (
          <div
            key={item._id}
            className="bg-base-300 rounded-2xl shadow-md overflow-hidden hover:scale-[1.02] transition"
          >
            <Image
              src={item.image}
              width={500}
              height={300}
              alt={item.facility_name}
              className="h-48 w-full object-cover"
            />

            <div className="p-4 space-y-2">
              <h3 className="text-xl font-bold">
                {item.facility_name}
              </h3>

              <p className="text-sm opacity-80">
                {item.location}
              </p>

              <p className="font-semibold">
                ৳ {item.price_per_hour} / hour
              </p>

              <Link
                href={`/facilityDetails/${item._id}`}
                className="btn btn-primary w-full mt-3"
              >
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}