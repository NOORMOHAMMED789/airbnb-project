import Image from "next/image";
import Reviews from "./components/Reviews";

export default function Home() {
  return (
    <div>
      <Reviews 
        title="Bordeaux Gateway"
        rating={5}
        review={7}
        tags="Superhost"
        place="Bordeaux, France"
      />
    </div>
  );
}
