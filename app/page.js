import Reviews from "./components/Reviews";
import ImageGallary from "./components/ImageGallary";
import CheckInDetails from "./components/CheckInDetails";

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
      <div className="pt-[40px] pb-[40px]">
        <ImageGallary />
      </div>
      <CheckInDetails />
    </div>
  );
}
