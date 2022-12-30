import Banner from "../components/Banner";
import Header from "../components/Header";
import RectangularCard from "../components/RectangularCard";
import Review from "../components/Review";
import Rooms from "../components/Rooms";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";
function MyHome() {
  return (
    <>
      <Header />
      <Banner />
      <Rooms />
      <Reviews />
      <RectangularCard />
      <Footer />
    </>
  );
}

export default MyHome;
