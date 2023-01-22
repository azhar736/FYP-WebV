import axios from "axios";
const BASE_URL = "http://localhost:8000/";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { LoginSchema } from "../schemas/loginSchema";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

const initialValues = {
  email: "",
  password: "",
};
const SignIn = () => {
  const router = useRouter();
  const [handlingError, setHandlingError] = useState("");
  const sendRequest = async (email, password) => {
    console.log("The DATA in Send Request Message===", email, password);
    try {
      const response = await axios.post(`${BASE_URL}loginUser`, {
        email,
        password,
      });
      const data1 = await response.data;
      console.log("The DATA from API", data1);
      localStorage.setItem("AUTH_TOKEN", data1.authToken);
      localStorage.setItem("USER_NAME", data1.name);
      localStorage.setItem("USER_ID", data1.id);
      if (data1.success) {
        console.log("Success");
        router.push("/");
      } else {
        console.log("Error");
        setHandlingError(data1.message);
      }
    } catch (error) {
      console.log("error", error.message);
      setHandlingError(error.message);
    }
  };

  console.log("The ERROR State====", handlingError);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: LoginSchema,
      onSubmit: (values, action) => {
        console.log(values);
        sendRequest(values.email, values.password);
        action.resetForm();
      },
    });
  console.log(errors);

  return (
    <>
      <Header />
      <div className="flex items-center justify-center h-[100vh] mt-10 bg-white">
        <div className="w-[470px] rounded-md bg-gray-100 p-5">
          <form onSubmit={handleSubmit}>
            <div className="input-block flex flex-col mx-5">
              <label
                htmlFor="email"
                className="input-label text-lg font-semibold"
              >
                Email
              </label>
              <input
                type="email"
                autoComplete="off"
                name="email"
                id="email"
                className="border-2 border-gray-500 py-[5px] rounded-md my-2 pl-2"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p className="text-red-600 text-base">{errors.email}</p>
              ) : null}
            </div>
            <div className="input-block flex flex-col mx-5">
              <label
                htmlFor="password"
                className="input-label text-lg font-semibold"
              >
                Password
              </label>
              <input
                type="password"
                autoComplete="off"
                name="password"
                id="password"
                className="border-2 border-gray-500 py-[5px] rounded-md my-2 pl-2"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <p className="text-red-600 text-base">{errors.password}</p>
              ) : null}
            </div>
            <div className="flex items-center flex-col justify-center my-5">
              {handlingError && (
                <div className="py-1 w-[250px] flex items-center justify-center">
                  <p className="text-red-600 text-base">{handlingError}</p>
                </div>
              )}
              <div>
                <button
                  className="input-button text-white text-lg font-semibold w-[300px] flex items-center justify-center py-2 rounded-md bg-blue-500"
                  type="submit"
                >
                  Sign In
                </button>
              </div>
              <div className="my-3 py-2 px-4">
                <p>
                  Don't have a account ?{" "}
                  <span
                    className="cursor-pointer"
                    onClick={() => router.push("/signup")}
                  >
                    SignUP
                  </span>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignIn;
