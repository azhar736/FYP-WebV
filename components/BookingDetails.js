import React from "react";
import BookingForm from "./BookingForm";
import Header from "./Header";

function BookingDetails() {
  return (
    <>
      <div>
        <img
          className="max-w-full h-auto"
          src="http://usis.iiu.edu.pk:64453//assets/frontend/img/usis/bgpics4.png"
          alt="image description"
        />
        <BookingForm />
      </div>
    </>
  );
}

export default BookingDetails;
