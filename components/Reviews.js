import React from "react";
import Review from "./Review";

function Reviews() {
  return (
    <>
      <div className="flex items-center justify-center my-10">
        <div className="flex w-[1400px]">
          <div className="p-10 border-2 border-gray-400">
            <Review
              ReviewText="I recently stayed at this hostel and it exceeded all of my expectations. The staff was incredibly friendly and helpful, the rooms were clean and comfortable, and the common areas were well-maintained. I particularly appreciated the convenient location and the affordable prices. I would highly recommend this hostel to anyone looking for a great place to stay."
              User="Azhar"
            />
          </div>
          <div className="p-10 border-2 border-gray-400">
            <Review
              ReviewText="I had a fantastic experience at this hostel during my recent trip. The facilities were top-notch and the staff was extremely accommodating, I could not have asked for more. The bed was comfortable, the room was clean, and the shared kitchen was well-equipped. I also enjoyed meeting other travelers in the common area. I would definitely stay here again and I highly recommend it to other travelers."
              User="Uzair"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Reviews;
