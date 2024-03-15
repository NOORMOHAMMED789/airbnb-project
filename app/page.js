import Reviews from "./components/Reviews";
import ImageGallary from "./components/ImageGallary";

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
      <div className="pt-[40px]">
        <ImageGallary />
      </div>
    </div>
  );
}
