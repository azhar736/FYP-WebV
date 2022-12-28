import Banner from "../components/Banner";
import Header from "../components/Header";
import RectangularCard from "../components/RectangularCard";
import Review from "../components/Review";
import Rooms from "../components/Rooms";
import Footer from "../components/Footer";
function MyHome() {
  return (
    <>
      <Header />
      <Banner />
      <Rooms />
      <div className="border-4 border-blue-700 flex justify-between">
        <div className="border-4 border-red-500 w-[50%] py-10 px-20">
          <Review />
        </div>
        <div className="border-4 border-green-500 w-[50%] py-10 px-20">
          <Review />
        </div>
      </div>
      <RectangularCard />
      <Footer />
    </>
  );
}

export default MyHome;
