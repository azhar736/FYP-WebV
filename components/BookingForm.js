import React from "react";
import Header from "./Header";
import Heading from "./Heading";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
const BASE_URL = "http://localhost:8000/";
function BookingForm() {
  const [noOFSEATS, setNoOFSEATS] = useState("");
  const [userId, setUserId] = useState("");
  const router = useRouter();
  const RoomId = router.query;
  useEffect(() => {
    const id = localStorage.getItem("USER_ID");
    console.log("IDDDD:", id);
    setUserId(id);
  }, []);

  const sendRequest = async () => {
    console.log("ROOOM ID", RoomId);
    try {
      const response = await axios.post(`${BASE_URL}bookRoom`, {
        bookedByUser: userId,
        id: RoomId.id,
        noOfseats: noOFSEATS,
      });
      const result = await response.data;
      console.log("The Data from the server", result);
      if (result) {
        router.push("login");
      }
    } catch (error) {
      console.log("error", error.message);
    }
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log("The No of Seats:", noOFSEATS);
    sendRequest();
  };
  return (
    <>
      <Heading Title="Booking Details" />
      <div className="flex items-center justify-center">
        <form className="w-[600px] flex flex-col items-center justify-center ">
          <div className="w-[400px]">
            <label
              for="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              First name
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
            />
          </div>
          <div className="w-[400px]">
            <label
              for="last_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Last name
            </label>
            <input
              type="text"
              id="last_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Doe"
              required
            />
          </div>
          <div className="w-[400px]">
            <label
              for="phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="123-45-678"
              // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </div>
          <div className="w-[400px]">
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="john.doe@company.com"
              required
            />
          </div>
          <div className="w-[400px] mb-10">
            <label
              jtmlFor="noOfSeats"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Enter No of Seats
            </label>
            <input
              type="text"
              onChange={(e) => setNoOFSEATS(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            onClick={SubmitHandler}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default BookingForm;
