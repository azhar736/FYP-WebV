import { Inter } from "@next/font/google";
import Banner from "../components/Banner";
import Rooms from "../components/Rooms";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Banner />
      <Rooms />
    </>
  );
}
