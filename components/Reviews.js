import React from "react";
import Review from "./Review";

function Reviews() {
  return (
    <>
      <div className="flex items-center justify-center my-10">
        <div className="border-4 border-blue-700 flex w-[1400px]">
          <div className="border-4 border-yellow-600 p-10">
            <Review />
          </div>
          <div className="border-4 border-green-700 p-10">
            <Review />
          </div>
        </div>
      </div>
    </>
  );
}

export default Reviews;
