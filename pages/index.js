import { Inter } from "@next/font/google";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import RectangularCard from "../components/RectangularCard";
import Review from "../components/Review";
import Rooms from "../components/Rooms";
import UserDashboard from "../components/userDashboard";
import MyHome from "../screens/Home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <MyHome />
      {/* <UserDashboard /> */}
    </>
  );
}
