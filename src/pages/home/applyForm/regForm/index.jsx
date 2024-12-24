"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";

const RegForm = () => {
  const initialValues = {
    name: "",
    courseName: "",
    email: "",
    phone: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("First Name is required"),
    courseName: Yup.string().required("Course is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phone: Yup.string().required("Phone is required"),
  });

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    const script = document.createElement("script");
    const callback = "jsonp_callback_" + Math.round(100000 * Math.random());

    window[callback] = function (response) {
      delete window[callback];
      document.body.removeChild(script);
      if (response.result === "success") {
        // toast.success("Form Submitted");
        console.log("form submited");
        resetForm();
      } else {
        alert(
          "An error occurred while submitting the form: " + response.message
        );
      }
      setSubmitting(false);
    };
    const stringValues = Object.entries(values).reduce(
      (acc, [key, value]) => ({ ...acc, [key]: String(value) }),
      {}
    );
    const scriptUrl = import.meta.env.VITE_REGISTER_SCRIPT_URL;
    script.src = `${scriptUrl}?callback=${callback}&${new URLSearchParams(
      stringValues
    ).toString()}`;
    document.body.appendChild(script);
  };
  return (
    <div className="my-5 rounded-2xl shadow-lg bg-white p-5 md:p-10 ">
      <h1 className="text-3xl md:text-6xl leading-snug">
        Apply for a <span className="font-bold text-[#1BC9FE]">Internship</span>
      </h1>

      <div className="pt-5">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="">
              <div className="grid grid-cols-1">
                <Field
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="mt-1 block w-full border border-gray-300 rounded-md text-black shadow-sm p-2 placeholder:font-light"
                />
                <div style={{ minHeight: "25px", padding: "2px" }}>
                  {" "}
                  {/* Reserve space for error message */}
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm font-manrope"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1">
                <Field
                  as="select"
                  name="courseName"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-400"
                >
                  <option value="" disabled className="font-light">
                    Select Internship
                  </option>
                  <option value="Web Development">Web Development</option>
                  <option value="Data Science">Data Science</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                </Field>
                <div style={{ minHeight: "25px", padding: "2px" }}>
                  {" "}
                  {/* Reserve space for error message */}
                  <ErrorMessage
                    name="courseName"
                    component="div"
                    className="text-red-500 text-sm font-manrope"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1">
                <Field
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 placeholder:font-light"
                />
                <div style={{ minHeight: "25px", padding: "2px" }}>
                  {" "}
                  {/* Reserve space for error message */}
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm font-manrope"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1">
                <Field
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 placeholder:font-light"
                />
                <div style={{ minHeight: "25px", padding: "2px" }}>
                  {" "}
                  {/* Reserve space for error message */}
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500 text-sm font-manrope"
                  />
                </div>
              </div>

              <div className="flex py-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className=" bg-black text-white font-manrope py-2 px-4  rounded-md w-full uppercase"
                >
                  Send Message
                </button>

                <ToastContainer
                  position="top-right"
                  autoClose={3000}
                  hideProgressBar
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="dark"
                  transition={Bounce}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegForm;
