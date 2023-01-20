import React, { useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import Header from "../components/Header";
const BASE_URL = "http://localhost:8000/";
import { useRouter } from "next/router";
function signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const sendRequest = async () => {
    try {
      const response = await axios.post(`${BASE_URL}loginUser`, {
        email,
        password,
      });
      const data1 = await response.data;
      console.log("The DATA from API", data1);
      localStorage.setItem("AUTH_TOKEN", data1.authToken);
      localStorage.setItem("USER_ID", data1.id);
      if (data1) {
        router.push("services");
      }
    } catch (error) {
      console.log("error", error.message);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest();
    console.log("The Name", email);
    console.log("The Name", password);
  };
  return (
    <>
      <Header />
      <div className="flex items-center justify-center mt-32">
        <form className="border-2 border-black w-[60%] flex flex-col items-center">
          <div className="mb-6 w-[350px]">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="enter you email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6 w-[350px]">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default signin;
