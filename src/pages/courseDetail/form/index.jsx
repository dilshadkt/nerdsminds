"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const EnrollmentForm = ({ course }) => {
  const [submissionError, setSubmissionError] = useState(null > null);
  const [submissionSuccess, setSubmissionSuccess] = useState(null > null);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      courseName: course,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Name must be at least 2 characters")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
        .required("Phone number is required"),
      courseName: Yup.string(),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      setSubmissionError(null);
      setSubmissionSuccess(null);
      const script = document.createElement("script");
      const callback = "jsonp_callback_" + Math.round(100000 * Math.random());

      const timeoutId = setTimeout(() => {
        setSubmissionError("Request timed out. Please try again.");
        setSubmitting(false);
        delete window[callback];
        document.body.removeChild(script);
      }, 10000);

      window[callback] = function (response) {
        clearTimeout(timeoutId);
        delete window[callback];
        document.body.removeChild(script);

        if (response.result === "success") {
          console.log("Form Submitted");
          setSubmissionSuccess(
            "Form submitted successfully! We will contact you soon. Thank you for your interest."
          );
          resetForm();
        } else {
          const errorMessage =
            response.message || "An error occurred while submitting the form";
          console.error(errorMessage);
          setSubmissionError(errorMessage);
        }
        setSubmitting(false);
      };

      try {
        const stringValues = Object.entries(values).reduce(
          (acc, [key, value]) => ({ ...acc, [key]: String(value) }),
          {}
        );

        const scriptUrl = import.meta.env.VITE_REGISTER_SCRIPT_URL;
        if (!scriptUrl) {
          throw new Error("Script URL is not configured");
        }

        script.src = `${scriptUrl}?callback=${callback}&${new URLSearchParams(
          stringValues
        ).toString()}`;
        script.onerror = () => {
          clearTimeout(timeoutId);
          setSubmissionError(
            "Failed to connect to the server. Please try again."
          );
          setSubmitting(false);
          delete window[callback];
          document.body.removeChild(script);
        };
        document.body.appendChild(script);
      } catch (error) {
        setSubmissionError(error.message);
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="h-full flex items-center justify-center pt-10 md:pt-24 md:px-4 lg:px-6 2xl:px-10">
      <div
        className="2xl:w-[90%] h-full bg-[#0276CB]
       text-white rounded-lg shadow-md py-7 md:py-12 px-8 lg:px-14 flex flex-col"
      >
        <h4 className="text-2xl md:text-4xl font-medium">Enroll Now</h4>
        <p className="my-4 md:my-5 text-sm md:text-base md:leading-8 font-light">
          Contrary to popular belief, Lorem Ipsum is not simply random text.
        </p>

        {submissionSuccess && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
            {submissionSuccess}
          </div>
        )}

        {submissionError && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
            {submissionError}
          </div>
        )}

        <form
          onSubmit={formik.handleSubmit}
          className="w-full flex flex-col gap-y-6"
        >
          <div className="flex flex-col gap-y-1">
            <input
              type="text"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className="p-3 border rounded-md text-sm outline-none w-full text-gray-800 border-[#E1E3E5]"
              placeholder="Your Name"
            />
            {formik.touched.name && formik.errors.name && (
              <span className="text-red-200 text-sm">{formik.errors.name}</span>
            )}
          </div>

          <div className="flex flex-col gap-y-1">
            <input
              type="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="p-3 border rounded-md text-sm outline-none w-full text-gray-800 border-[#E1E3E5]"
              placeholder="Email"
            />
            {formik.touched.email && formik.errors.email && (
              <span className="text-red-200 text-sm">
                {formik.errors.email}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-y-1">
            <input
              type="tel"
              name="phone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              className="p-3 border rounded-md text-sm outline-none w-full text-gray-800 border-[#E1E3E5]"
              placeholder="Phone Number"
            />
            {formik.touched.phone && formik.errors.phone && (
              <span className="text-red-200 text-sm">
                {formik.errors.phone}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-y-1">
            <input
              type="text"
              disabled
              name="courseName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.courseName}
              className="p-3 border rounded-md text-sm outline-none w-full text-gray-800 border-[#E1E3E5]"
              placeholder="Course Name (Optional)"
            />
            {formik.touched.courseName && formik.errors.courseName && (
              <span className="text-red-200 text-sm">
                {formik.errors.courseName}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="p-3 font-medium text-sm md:text-base bg-black hover:bg-gray-700 mt-3 rounded-md disabled:opacity-50"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? "SENDING..." : "SEND MESSAGE"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnrollmentForm;
