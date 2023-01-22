import axios from "axios";
const BASE_URL = "http://localhost:8000/";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas/SignupSchema";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};
const Signup = () => {
  const [accountType, setaccountType] = useState("STUDENT");
  const router = useRouter();
  const sendRequest = async (name, email, password, confirm_password) => {
    console.log("The DATA in Send Request Message===", name, email, password);
    try {
      const response = await axios.post(`${BASE_URL}addUser`, {
        name: name,
        email: email,
        password: password,
        confirmPassword: confirm_password,
        isActive: true,
        accountType,
      });
      const data1 = await response.data;
      if (data1) {
        router.push("/signin");
      }
      console.log("The DATA from API", data1);
    } catch (error) {
      console.log("error", error.message);
    }
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        sendRequest(
          values.name,
          values.email,
          values.password,
          values.confirm_password
        );
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
                htmlFor="name"
                className="input-label text-lg font-semibold"
              >
                Name
              </label>
              <input
                type="name"
                autoComplete="off"
                name="name"
                id="name"
                className="border-2 border-gray-500 bg-white py-[5px] rounded-md my-2 pl-2"
                placeholder="Enter Your name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name ? (
                <p className="text-red-600 text-base">{errors.name}</p>
              ) : null}
            </div>
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
            <div className="input-block flex flex-col mx-5">
              <label
                htmlFor="confirm_password"
                className="input-label text-lg font-semibold"
              >
                Confirm Password
              </label>
              <input
                type="password"
                autoComplete="off"
                name="confirm_password"
                id="confirm_password"
                className="border-2 border-gray-500 py-[5px] rounded-md my-2 pl-2"
                placeholder="Confirm Password"
                value={values.confirm_password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.confirm_password && touched.confirm_password ? (
                <p className="text-red-600 text-base">
                  {errors.confirm_password}
                </p>
              ) : null}
            </div>
            <div className="flex flex-col items-center justify-center my-5">
              <div>
                <button
                  className="input-button text-white text-lg font-semibold w-[300px] flex items-center justify-center py-2 rounded-md bg-blue-500"
                  type="submit"
                >
                  Registration Now
                </button>
              </div>
              <div className="my-3 py-2 px-4">
                <p>
                  Already have an account ?{" "}
                  <span
                    className="cursor-pointer"
                    onClick={() => router.push("/signin")}
                  >
                    SignIn
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

export default Signup;
