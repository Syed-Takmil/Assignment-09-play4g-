


import Image from "next/image";
import Hero from "../Components/Hero";
import StaticSection from "../Components/StaticSection";
import StaticSection2 from "../Components/StaticSection2";
import Featured from "../Components/Featured";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
<Featured/>
      <StaticSection/>
      <StaticSection2/>
    </div>
  );
}
