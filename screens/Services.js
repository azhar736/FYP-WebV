import React, { useEffect, useState } from "react";
import BookingDetails from "../components/BookingDetails";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useRouter } from "next/router";
function Services() {
  const [logggedInfo, setLoggedInfo] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const Token = localStorage.getItem("AUTH_TOKEN");
    console.log("The Token is: " + Token);
    if (Token) {
      setLoggedInfo(true);
    }
    if (!Token) {
      alert("Please Login First");
      router.replace("signin");
    }
  }, []);

  return (
    <>
      {logggedInfo && (
        <>
          <Header />
          <BookingDetails />
          <Footer />
        </>
      )}
    </>
  );
}

export default Services;
